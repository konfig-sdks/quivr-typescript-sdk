/* tslint:disable */
/* eslint-disable */
/*
FastAPI

Open-source RAG Framework

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HealthApi - axios parameter creator
 * @export
 */
export const HealthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/chat/healthz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/chat/healthz',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_1: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/crawl/healthz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/crawl/healthz',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_2: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/healthz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/healthz',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_3: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/upload/healthz`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/upload/healthz',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HealthApi - functional programming interface
 * @export
 */
export const HealthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HealthApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkStatus(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkStatus(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkStatus_1(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkStatus_1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkStatus_2(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkStatus_2(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkStatus_3(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkStatus_3(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HealthApi - factory interface
 * @export
 */
export const HealthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HealthApiFp(configuration)
    return {
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.checkStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_1(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.checkStatus_1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_2(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.checkStatus_2(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Healthz
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkStatus_3(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.checkStatus_3(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HealthApiGenerated - object-oriented interface
 * @export
 * @class HealthApiGenerated
 * @extends {BaseAPI}
 */
export class HealthApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Healthz
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public checkStatus(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).checkStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Healthz
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public checkStatus_1(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).checkStatus_1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Healthz
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public checkStatus_2(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).checkStatus_2(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Healthz
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiGenerated
     */
    public checkStatus_3(options?: AxiosRequestConfig) {
        return HealthApiFp(this.configuration).checkStatus_3(options).then((request) => request(this.axios, this.basePath));
    }
}