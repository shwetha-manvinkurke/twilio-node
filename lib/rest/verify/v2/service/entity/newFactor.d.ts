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

type NewFactorFactorStatuses = 'unverified'|'verified';

type NewFactorFactorTypes = 'push'|'totp';

type NewFactorNotificationPlatforms = 'apn'|'fcm'|'none';

type NewFactorTotpAlgorithms = 'sha1'|'sha256'|'sha512';

/**
 * Initialize the NewFactorList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param identity - Unique external identifier of the Entity
 */
declare function NewFactorList(version: V2, serviceSid: string, identity: string): NewFactorListInstance;

interface NewFactorListInstance {
  /**
   * create a NewFactorInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: NewFactorListInstanceCreateOptions, callback?: (error: Error | null, item: NewFactorInstance) => any): Promise<NewFactorInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property binding.alg - The algorithm used when `factor_type` is `push`
 * @property binding.publicKey - The public key encoded in Base64
 * @property binding.secret - The shared secret in Base32
 * @property config.alg - The algorithm used to derive the TOTP codes
 * @property config.appId - The ID that uniquely identifies your app in the Google or Apple store
 * @property config.codeLength - Number of digits for generated TOTP codes
 * @property config.notificationPlatform - The transport technology used to generate the Notification Token
 * @property config.notificationToken - For APN, the device token. For FCM, the registration token
 * @property config.sdkVersion - The Verify Push SDK version used to configure the factor
 * @property config.skew - The number of past and future time-steps valid at a given time
 * @property config.timeStep - How often, in seconds, are TOTP codes generated
 * @property factorType - The Type of this Factor
 * @property friendlyName - The friendly name of this Factor
 */
interface NewFactorListInstanceCreateOptions {
  binding?: {
    alg?: string;
    publicKey?: string;
    secret?: string;
  };
  config?: {
    appId?: string;
    notificationPlatform?: NewFactorNotificationPlatforms;
    notificationToken?: string;
    sdkVersion?: string;
    timeStep?: number;
    skew?: number;
    codeLength?: number;
    alg?: NewFactorTotpAlgorithms;
  };
  factorType: NewFactorFactorTypes;
  friendlyName: string;
}

interface NewFactorPayload extends NewFactorResource, Page.TwilioResponsePayload {
}

interface NewFactorResource {
  account_sid: string;
  binding: object;
  config: object;
  date_created: Date;
  date_updated: Date;
  entity_sid: string;
  factor_type: NewFactorFactorTypes;
  friendly_name: string;
  identity: string;
  service_sid: string;
  sid: string;
  status: NewFactorFactorStatuses;
  url: string;
}

interface NewFactorSolution {
  identity?: string;
  serviceSid?: string;
}


declare class NewFactorInstance extends SerializableClass {
  /**
   * Initialize the NewFactorContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   */
  constructor(version: V2, payload: NewFactorPayload, serviceSid: string, identity: string);

  accountSid: string;
  binding: any;
  config: any;
  dateCreated: Date;
  dateUpdated: Date;
  entitySid: string;
  factorType: NewFactorFactorTypes;
  friendlyName: string;
  identity: string;
  serviceSid: string;
  sid: string;
  status: NewFactorFactorStatuses;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class NewFactorPage extends Page<V2, NewFactorPayload, NewFactorResource, NewFactorInstance> {
  /**
   * Initialize the NewFactorPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: NewFactorSolution);

  /**
   * Build an instance of NewFactorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NewFactorPayload): NewFactorInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NewFactorFactorStatuses, NewFactorFactorTypes, NewFactorInstance, NewFactorList, NewFactorListInstance, NewFactorListInstanceCreateOptions, NewFactorNotificationPlatforms, NewFactorPage, NewFactorPayload, NewFactorResource, NewFactorSolution, NewFactorTotpAlgorithms }
