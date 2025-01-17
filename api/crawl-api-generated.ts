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
import { CrawlWebsite } from '../models';
// @ts-ignore
import { HTTPValidationError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CrawlApi - axios parameter creator
 * @export
 */
export const CrawlApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Crawl a website and process the crawled data.
         * @summary Crawl Endpoint
         * @param {string} brainId The ID of the brain
         * @param {CrawlWebsite} crawlWebsite 
         * @param {string} [chatId] The ID of the chat
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        websiteDataProcessor: async (brainId: string, crawlWebsite: CrawlWebsite, chatId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'brainId' is not null or undefined
            assertParamExists('websiteDataProcessor', 'brainId', brainId)
            // verify required parameter 'crawlWebsite' is not null or undefined
            assertParamExists('websiteDataProcessor', 'crawlWebsite', crawlWebsite)
            const localVarPath = `/crawl`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AuthBearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (brainId !== undefined) {
                localVarQueryParameter['brain_id'] = brainId;
            }

            if (chatId !== undefined) {
                localVarQueryParameter['chat_id'] = chatId;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: crawlWebsite,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/crawl',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(crawlWebsite, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CrawlApi - functional programming interface
 * @export
 */
export const CrawlApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CrawlApiAxiosParamCreator(configuration)
    return {
        /**
         * Crawl a website and process the crawled data.
         * @summary Crawl Endpoint
         * @param {CrawlApiWebsiteDataProcessorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async websiteDataProcessor(requestParameters: CrawlApiWebsiteDataProcessorRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const crawlWebsite: CrawlWebsite = {
                url: requestParameters.url,
                js: requestParameters.js,
                depth: requestParameters.depth,
                max_pages: requestParameters.max_pages,
                max_time: requestParameters.max_time
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.websiteDataProcessor(requestParameters.brainId, crawlWebsite, requestParameters.chatId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CrawlApi - factory interface
 * @export
 */
export const CrawlApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CrawlApiFp(configuration)
    return {
        /**
         * Crawl a website and process the crawled data.
         * @summary Crawl Endpoint
         * @param {CrawlApiWebsiteDataProcessorRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        websiteDataProcessor(requestParameters: CrawlApiWebsiteDataProcessorRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.websiteDataProcessor(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for websiteDataProcessor operation in CrawlApi.
 * @export
 * @interface CrawlApiWebsiteDataProcessorRequest
 */
export type CrawlApiWebsiteDataProcessorRequest = {
    
    /**
    * The ID of the brain
    * @type {string}
    * @memberof CrawlApiWebsiteDataProcessor
    */
    readonly brainId: string
    
    /**
    * The ID of the chat
    * @type {string}
    * @memberof CrawlApiWebsiteDataProcessor
    */
    readonly chatId?: string
    
} & CrawlWebsite

/**
 * CrawlApiGenerated - object-oriented interface
 * @export
 * @class CrawlApiGenerated
 * @extends {BaseAPI}
 */
export class CrawlApiGenerated extends BaseAPI {
    /**
     * Crawl a website and process the crawled data.
     * @summary Crawl Endpoint
     * @param {CrawlApiWebsiteDataProcessorRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CrawlApiGenerated
     */
    public websiteDataProcessor(requestParameters: CrawlApiWebsiteDataProcessorRequest, options?: AxiosRequestConfig) {
        return CrawlApiFp(this.configuration).websiteDataProcessor(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
