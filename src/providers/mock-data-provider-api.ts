import { DataProvider } from "@pankod/refine-core";
import { CrudFilters, CrudOperators } from "@refinedev/core";
import axios from "axios";
import { stringify } from "query-string";
import { Applications } from "../utils/applications";
import { IListApprovalProcessing } from "../utils/list-approval-processing";
import { Users } from "../utils/users";

// Error handling with axios interceptors
// const axiosInstance = httpCommon;
const fakePromise = Promise.resolve(123);
axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalConfig = error.config;
        // console.log("old config", JSON.parse(JSON.stringify(originalConfig)));

        await fakePromise.then((token) => {
            originalConfig.headers["Authorization"] = token;
        });

        originalConfig.url = "/";
        originalConfig.method = "get";

        // console.log("new config", JSON.parse(JSON.stringify(originalConfig)));

        return axios.request(originalConfig);
    }
);

// Map refine operators to API operators
const mapOperator = (operator: CrudOperators): string => {
    switch (operator) {
        case "ne":
        case "gte":
        case "lte":
            return `_${operator}`;
        case "contains":
            return "_like";
        case "eq":
        default:
            return "";
    }
};

const generateFilters = (filters?: CrudFilters) => {
    const queryFilters: { [key: string]: string } = {};

    filters?.map((filter): void => {
        if ("field" in filter) {
            const { field, operator, value } = filter;
            const mappedOperator = mapOperator(operator);
            queryFilters[`${field}${mappedOperator}`] = value;
        }
    });

    return queryFilters;
};

export const dataProvider = (apiUrl: string): DataProvider => ({
    getList: async ({ resource, pagination, sort, filters }) => {
        const url = `${apiUrl}/${resource}`;

        const { current = 1, pageSize = 10 } = pagination ?? {};

        const query: {
            _start?: number;
            _end?: number;
            _sort?: string;
            _order?: string;
        } = {
            _start: (current - 1) * pageSize,
            _end: current * pageSize
        };

        if (sort && sort.length > 0) {
            query._sort = sort[0].field;
            query._order = sort[0].order;
        }

        const queryFilters = generateFilters(filters);
        // console.log("queryfilter:  ", queryFilters);
        const userId = JSON.parse(localStorage.getItem("userId") as string);

        const results: IListApprovalProcessing[] = [];

        Applications.forEach((app) => {
            if (app.checkerId === parseInt(userId)) {
                const candidate = Users.find((u) => u.userId === app.candidateId);
                if (candidate !== undefined) {
                    const data = {
                        applicationId: app.applicationId,
                        candidateId: app.candidateId,
                        candidateName: candidate?.name + " " + candidate?.givenName,
                        candidateEmail: candidate?.email,
                        candidateGender: candidate?.gender,
                        dateApplying: app.dateApplying
                    };
                    results.push(data);
                }
            }
        });
        // console.log("data 1: ", results);

        const { data } = await axios.get(`${url}?${stringify(query)}&${stringify(queryFilters)}`);

        return Promise.resolve(data);
    },

    create: async ({ resource, variables }) => {
        const url = `${apiUrl}/${resource}`;

        const { data } = await axios.post(url, variables);

        return {
            data
        };
    },

    update: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axios.patch(url, variables);

        return {
            data
        };
    },

    deleteOne: async ({ resource, id, variables }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await axios.delete(url, {
            data: variables
        });

        return {
            data
        };
    },

    getOne: async ({ resource, id }) => {
        const url = `${apiUrl}/${resource}/${id}`;

        // console.log("asd");
        const { data } = await axios.get(url);

        return {
            data
        };
    },

    getApiUrl: () => apiUrl,

    custom: async ({ url, method, filters, sort, payload, query, headers }) => {
        let requestUrl = `${url}?`;

        if (sort && sort.length > 0) {
            const sortQuery = {
                _sort: sort[0].field,
                _order: sort[0].order
            };
            requestUrl = `${requestUrl}&${stringify(sortQuery)}`;
        }

        if (filters) {
            const filterQuery = generateFilters(filters);
            requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
        }

        if (query) {
            requestUrl = `${requestUrl}&${stringify(query)}`;
        }

        // if (headers) {
        //     axiosInstance.defaults.headers = {
        //         ...axiosInstance.defaults.headers,
        //         ...headers,
        //     };
        // }

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await axios[method](url, payload);
                break;
            case "delete":
                axiosResponse = await axios.delete(url, {
                    data: payload
                });
                break;
            default:
                axiosResponse = await axios.get(requestUrl);
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    }
});
