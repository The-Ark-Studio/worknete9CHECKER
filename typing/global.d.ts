/*
 * Copyright (c) 2024.
 * The Ark Studio Co,Ltd.
 * All rights reserved.
 */

import { MRT_Column, MRT_Row } from "material-react-table";
import { DataProvider } from "@refinedev/core";

declare global {
    const __APP_INFO__: {
        pkg: {
            name: string;
            version: string;
            dependencies: Recordable<string>;
            devDependencies: Recordable<string>;
        };
        lastBuildTime: string;
        lastBuildTimeMs: number;
        envPrefix: string;
    };

    type Nullable<T> = T | null;
    type Recordable<T = any> = Record<string, T>;

    interface IViteEnv {
        [key: string]: any;
    }

    interface IChangeEvent extends Event {
        target: HTMLInputElement;
    }

    interface IGenericType {
        [key: string]: any;
    }

    interface INameCode {
        name: string;
        code: number | string;
    }

    interface ISubRow extends IGenericType {
        [key: string]: any;
        subRows?: ISubRow[];
    }

    interface INameId {
        id: number;
        name: string;
    }

    interface INameEmail {
        name: string;
        email: string;
    }

    interface IRangeDate {
        startDate: string;
        endDate: string;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Window {
        google: any;
    }

    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface MRT_Cell {
        column: MRT_Column;
        row: MRT_Row;
        value: any;
        meta: IGenericType;
    }

    interface IDataMultipleContextProvider {
        default: DataProvider;
        [key: string]: DataProvider | any;
    }

    type IShortcutStyle = Array<func | object | bool> | func | object;
}

export {};
