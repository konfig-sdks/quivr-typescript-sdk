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
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { UserIdentity } from '../models';
// @ts-ignore
import { UserUpdatableProperties } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get user identity.
         * @summary Get User Identity Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIdentityRoute: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/identity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/user/identity',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get user information and statistics.  - `current_user`: The current authenticated user. - Returns the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date.  This endpoint retrieves information and statistics about the authenticated user. It includes the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date. The brain size is calculated based on the user\'s uploaded vectors, and the maximum brain size is obtained from the environment variables. The requests statistics provide information about the user\'s API usage.
         * @summary Get User Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformation: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/user',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update user identity.
         * @summary Update User Identity Route
         * @param {UserUpdatableProperties} userUpdatableProperties 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateIdentityRoute: async (userUpdatableProperties: UserUpdatableProperties, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userUpdatableProperties' is not null or undefined
            assertParamExists('updateIdentityRoute', 'userUpdatableProperties', userUpdatableProperties)
            const localVarPath = `/user/identity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: userUpdatableProperties,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/user/identity',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(userUpdatableProperties, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Get user identity.
         * @summary Get User Identity Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getIdentityRoute(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserIdentity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getIdentityRoute(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get user information and statistics.  - `current_user`: The current authenticated user. - Returns the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date.  This endpoint retrieves information and statistics about the authenticated user. It includes the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date. The brain size is calculated based on the user\'s uploaded vectors, and the maximum brain size is obtained from the environment variables. The requests statistics provide information about the user\'s API usage.
         * @summary Get User Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserInformation(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserInformation(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update user identity.
         * @summary Update User Identity Route
         * @param {UserApiUpdateIdentityRouteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateIdentityRoute(requestParameters: UserApiUpdateIdentityRouteRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserIdentity>> {
            const userUpdatableProperties: UserUpdatableProperties = {
                username: requestParameters.username,
                company: requestParameters.company,
                onboarded: requestParameters.onboarded,
                company_size: requestParameters.company_size,
                usage_purpose: requestParameters.usage_purpose
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateIdentityRoute(userUpdatableProperties, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Get user identity.
         * @summary Get User Identity Route
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getIdentityRoute(options?: AxiosRequestConfig): AxiosPromise<UserIdentity> {
            return localVarFp.getIdentityRoute(options).then((request) => request(axios, basePath));
        },
        /**
         * Get user information and statistics.  - `current_user`: The current authenticated user. - Returns the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date.  This endpoint retrieves information and statistics about the authenticated user. It includes the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date. The brain size is calculated based on the user\'s uploaded vectors, and the maximum brain size is obtained from the environment variables. The requests statistics provide information about the user\'s API usage.
         * @summary Get User Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserInformation(options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.getUserInformation(options).then((request) => request(axios, basePath));
        },
        /**
         * Update user identity.
         * @summary Update User Identity Route
         * @param {UserApiUpdateIdentityRouteRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateIdentityRoute(requestParameters: UserApiUpdateIdentityRouteRequest, options?: AxiosRequestConfig): AxiosPromise<UserIdentity> {
            return localVarFp.updateIdentityRoute(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for updateIdentityRoute operation in UserApi.
 * @export
 * @interface UserApiUpdateIdentityRouteRequest
 */
export type UserApiUpdateIdentityRouteRequest = {
    
} & UserUpdatableProperties

/**
 * UserApiGenerated - object-oriented interface
 * @export
 * @class UserApiGenerated
 * @extends {BaseAPI}
 */
export class UserApiGenerated extends BaseAPI {
    /**
     * Get user identity.
     * @summary Get User Identity Route
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getIdentityRoute(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getIdentityRoute(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get user information and statistics.  - `current_user`: The current authenticated user. - Returns the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date.  This endpoint retrieves information and statistics about the authenticated user. It includes the user\'s email, maximum brain size, current brain size, maximum requests number, requests statistics, and the current date. The brain size is calculated based on the user\'s uploaded vectors, and the maximum brain size is obtained from the environment variables. The requests statistics provide information about the user\'s API usage.
     * @summary Get User Endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public getUserInformation(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).getUserInformation(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update user identity.
     * @summary Update User Identity Route
     * @param {UserApiUpdateIdentityRouteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiGenerated
     */
    public updateIdentityRoute(requestParameters: UserApiUpdateIdentityRouteRequest, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).updateIdentityRoute(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
