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
 * @interface ApiBrainDefinitionEntityOutput
 */
export interface ApiBrainDefinitionEntityOutput {
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'brain_id': string;
    /**
     * 
     * @type {ApiBrainAllowedMethods}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'method': ApiBrainAllowedMethods;
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'url': string;
    /**
     * 
     * @type {ApiBrainDefinitionSchema}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'params': ApiBrainDefinitionSchema;
    /**
     * 
     * @type {ApiBrainDefinitionSchema}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'search_params': ApiBrainDefinitionSchema;
    /**
     * 
     * @type {Array<ApiBrainDefinitionSecret>}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'secrets': Array<ApiBrainDefinitionSecret>;
    /**
     * 
     * @type {boolean}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'raw'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApiBrainDefinitionEntityOutput
     */
    'jq_instructions'?: string | null;
}

