/*
FastAPI

Open-source RAG Framework

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UserIdentity
 */
export interface UserIdentity {
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'username'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'company'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UserIdentity
     */
    'onboarded'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'company_size'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UserIdentity
     */
    'usage_purpose'?: string | null;
}

