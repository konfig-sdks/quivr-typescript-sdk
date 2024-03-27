/*
FastAPI

Open-source RAG Framework

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IntegrationBrainTag } from './integration-brain-tag';
import { IntegrationType } from './integration-type';

/**
 * 
 * @export
 * @interface IntegrationDescriptionEntity
 */
export interface IntegrationDescriptionEntity {
    /**
     * 
     * @type {Array<IntegrationBrainTag>}
     * @memberof IntegrationDescriptionEntity
     */
    'tags'?: Array<IntegrationBrainTag> | null;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'integration_name': string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'integration_logo_url'?: string | null;
    /**
     * 
     * @type {object}
     * @memberof IntegrationDescriptionEntity
     */
    'connection_settings'?: object | null;
    /**
     * 
     * @type {IntegrationType}
     * @memberof IntegrationDescriptionEntity
     */
    'integration_type': IntegrationType;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'information'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof IntegrationDescriptionEntity
     */
    'max_files': number;
    /**
     * 
     * @type {boolean}
     * @memberof IntegrationDescriptionEntity
     */
    'allow_model_change': boolean;
    /**
     * 
     * @type {string}
     * @memberof IntegrationDescriptionEntity
     */
    'integration_display_name': string;
}

