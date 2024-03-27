/*
FastAPI

Open-source RAG Framework

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MessageIdProperty } from './message-id-property';

/**
 * 
 * @export
 * @interface GetChatHistoryOutput
 */
export interface GetChatHistoryOutput {
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'chat_id': string;
    /**
     * 
     * @type {MessageIdProperty}
     * @memberof GetChatHistoryOutput
     */
    'message_id': MessageIdProperty | null;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'user_message': string;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'assistant': string;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'message_time'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'prompt_title'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'brain_name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetChatHistoryOutput
     */
    'brain_id'?: string | null;
    /**
     * 
     * @type {object}
     * @memberof GetChatHistoryOutput
     */
    'metadata'?: object | null;
    /**
     * 
     * @type {boolean}
     * @memberof GetChatHistoryOutput
     */
    'thumbs'?: boolean | null;
}
