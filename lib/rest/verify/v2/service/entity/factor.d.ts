/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2 = require('../../../V2');
import { SerializableClass } from '../../../../../interfaces';

type FactorFactorStatuses = 'unverified'|'verified';

type FactorFactorTypes = 'push'|'totp';

type FactorNotificationPlatforms = 'apn'|'fcm'|'none';

type FactorTotpAlgorithms = 'sha1'|'sha256'|'sha512';

/**
 * Initialize the FactorList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param identity - Unique external identifier of the Entity
 */
declare function FactorList(version: V2, serviceSid: string, identity: string): FactorListInstance;

/**
 * Options to pass to update
 *
 * @property authPayload - Optional payload to verify the Factor for the first time
 * @property config.alg - The algorithm used to derive the TOTP codes
 * @property config.codeLength - Number of digits for generated TOTP codes
 * @property config.notificationPlatform - The transport technology used to generate the Notification Token
 * @property config.notificationToken - For APN, the device token. For FCM, the registration token
 * @property config.sdkVersion - The Verify Push SDK version used to configure the factor
 * @property config.skew - The number of past and future time-steps valid at a given time
 * @property config.timeStep - How often, in seconds, are TOTP codes generated
 * @property friendlyName - The friendly name of this Factor
 */
interface FactorInstanceUpdateOptions {
  authPayload?: string;
  config?: {
    notificationToken?: string;
    sdkVersion?: string;
    timeStep?: number;
    skew?: number;
    codeLength?: number;
    alg?: FactorTotpAlgorithms;
    notificationPlatform?: string;
  };
  friendlyName?: string;
}

interface FactorListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FactorContext;
  /**
   * Streams FactorInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: FactorInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams FactorInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: FactorListInstanceEachOptions, callback?: (item: FactorInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a factor
   *
   * @param sid - A string that uniquely identifies this Factor.
   */
  get(sid: string): FactorContext;
  /**
   * Retrieve a single target page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
  /**
   * Retrieve a single target page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
  /**
   * Lists FactorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: FactorInstance[]) => any): Promise<FactorInstance[]>;
  /**
   * Lists FactorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FactorListInstanceOptions, callback?: (error: Error | null, items: FactorInstance[]) => any): Promise<FactorInstance[]>;
  /**
   * Retrieve a single page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
  /**
   * Retrieve a single page of FactorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FactorListInstancePageOptions, callback?: (error: Error | null, items: FactorPage) => any): Promise<FactorPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface FactorListInstanceEachOptions {
  callback?: (item: FactorInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface FactorListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface FactorListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FactorPayload extends FactorResource, Page.TwilioResponsePayload {
}

interface FactorResource {
  account_sid: string;
  config: object;
  date_created: Date;
  date_updated: Date;
  entity_sid: string;
  factor_type: FactorFactorTypes;
  friendly_name: string;
  identity: string;
  service_sid: string;
  sid: string;
  status: FactorFactorStatuses;
  url: string;
}

interface FactorSolution {
  identity?: string;
  serviceSid?: string;
}


declare class FactorContext {
  /**
   * Initialize the FactorContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   * @param sid - A string that uniquely identifies this Factor.
   */
  constructor(version: V2, serviceSid: string, identity: string, sid: string);

  /**
   * fetch a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
  /**
   * remove a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FactorInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
  /**
   * update a FactorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FactorInstanceUpdateOptions, callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
}


declare class FactorInstance extends SerializableClass {
  /**
   * Initialize the FactorContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   * @param sid - A string that uniquely identifies this Factor.
   */
  constructor(version: V2, payload: FactorPayload, serviceSid: string, identity: string, sid: string);

  private _proxy: FactorContext;
  accountSid: string;
  config: any;
  dateCreated: Date;
  dateUpdated: Date;
  entitySid: string;
  factorType: FactorFactorTypes;
  /**
   * fetch a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
  friendlyName: string;
  identity: string;
  /**
   * remove a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FactorInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  status: FactorFactorStatuses;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a FactorInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
  /**
   * update a FactorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FactorInstanceUpdateOptions, callback?: (error: Error | null, items: FactorInstance) => any): Promise<FactorInstance>;
  url: string;
}


declare class FactorPage extends Page<V2, FactorPayload, FactorResource, FactorInstance> {
  /**
   * Initialize the FactorPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: FactorSolution);

  /**
   * Build an instance of FactorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FactorPayload): FactorInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { FactorContext, FactorFactorStatuses, FactorFactorTypes, FactorInstance, FactorInstanceUpdateOptions, FactorList, FactorListInstance, FactorListInstanceEachOptions, FactorListInstanceOptions, FactorListInstancePageOptions, FactorNotificationPlatforms, FactorPage, FactorPayload, FactorResource, FactorSolution, FactorTotpAlgorithms }
