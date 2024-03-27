/*
FastAPI

Open-source RAG Framework

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ApiBrainAllowedMethods } from './api-brain-allowed-methods';
import { ApiBrainDefinitionSchema } from './api-brain-definition-schema';
import { ApiBrainDefinitionSecret } from './api-brain-definition-secret';

/**
 * 
 * @export
 * @interface ApiBrainDefinitionEntityInputNullable
 */
export interface ApiBrainDefinitionEntityInputNullable {
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'brain_id': string;
    /**
     * 
     * @type {ApiBrainAllowedMethods}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'method': ApiBrainAllowedMethods;
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'url': string;
    /**
     * 
     * @type {ApiBrainDefinitionSchema}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'params': ApiBrainDefinitionSchema;
    /**
     * 
     * @type {ApiBrainDefinitionSchema}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'search_params': ApiBrainDefinitionSchema;
    /**
     * 
     * @type {Array<ApiBrainDefinitionSecret>}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'secrets': Array<ApiBrainDefinitionSecret>;
    /**
     * 
     * @type {boolean}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'raw'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityInputNullable
     */
    'jq_instructions'?: string | null;
}

