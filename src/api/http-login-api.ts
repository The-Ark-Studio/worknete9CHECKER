import { useApiUrl } from "@refinedev/core";
import axios from "axios";

const urlProduction = "https://services.worknete9.com/api";
const urlLocal = "http://localhost:8080/api";

// const apiUrl = useApiUrl();

export default axios.create({
    baseURL: urlProduction,
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    }
});
