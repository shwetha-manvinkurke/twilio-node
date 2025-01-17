'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var AwsList;
var AwsPage;
var AwsInstance;
var AwsContext;

/* jshint ignore:start */
/**
 * Initialize the AwsList
 *
 * @constructor Twilio.Accounts.V1.CredentialContext.AwsList
 *
 * @param {Twilio.Accounts.V1} version - Version of the resource
 */
/* jshint ignore:end */
AwsList = function AwsList(version) {
  /* jshint ignore:start */
  /**
   * @function aws
   * @memberof Twilio.Accounts.V1.CredentialContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Accounts.V1.CredentialContext.AwsContext}
   */
  /* jshint ignore:end */
  function AwsListInstance(sid) {
    return AwsListInstance.get(sid);
  }

  AwsListInstance._version = version;
  // Path Solution
  AwsListInstance._solution = {};
  AwsListInstance._uri = `/Credentials/AWS`;
  /* jshint ignore:start */
  /**
   * Streams AwsInstance records from the API.
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
   * @function each
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  AwsListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists AwsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {object} [opts] - Options for request
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AwsListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AwsListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AwsPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of AwsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  AwsListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new AwsPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * create a AwsInstance
   *
   * @function create
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.credentials -
   *          A string that contains the AWS access credentials in the format <AWS_ACCESS_KEY_ID>:<AWS_SECRET_ACCESS_KEY>
   * @param {string} [opts.friendlyName] - A string to describe the resource
   * @param {string} [opts.accountSid] -
   *          The Subaccount this Credential should be associated with.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed AwsInstance
   */
  /* jshint ignore:end */
  AwsListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.credentials)) {
      throw new Error('Required parameter "opts.credentials" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Credentials': _.get(opts, 'credentials'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'AccountSid': _.get(opts, 'accountSid')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new AwsInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a aws
   *
   * @function get
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Accounts.V1.CredentialContext.AwsContext}
   */
  /* jshint ignore:end */
  AwsListInstance.get = function get(sid) {
    return new AwsContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Accounts.V1.CredentialContext.AwsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AwsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AwsListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return AwsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the AwsPage
 *
 * @constructor Twilio.Accounts.V1.CredentialContext.AwsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {AwsSolution} solution - Path solution
 *
 * @returns AwsPage
 */
/* jshint ignore:end */
AwsPage = function AwsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AwsPage.prototype, Page.prototype);
AwsPage.prototype.constructor = AwsPage;

/* jshint ignore:start */
/**
 * Build an instance of AwsInstance
 *
 * @function getInstance
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsPage#
 *
 * @param {AwsPayload} payload - Payload response from the API
 *
 * @returns AwsInstance
 */
/* jshint ignore:end */
AwsPage.prototype.getInstance = function getInstance(payload) {
  return new AwsInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
AwsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AwsPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AwsContext
 *
 * @constructor Twilio.Accounts.V1.CredentialContext.AwsInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT when the resource was last updated
 * @property {string} url -
 *          The URI for this resource, relative to `https://accounts.twilio.com`
 *
 * @param {V1} version - Version of the resource
 * @param {AwsPayload} payload - The instance payload
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AwsInstance = function AwsInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(AwsInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new AwsContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a AwsInstance
 *
 * @function fetch
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a AwsInstance
 *
 * @function update
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a AwsInstance
 *
 * @function remove
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
AwsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AwsInstance.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AwsContext
 *
 * @constructor Twilio.Accounts.V1.CredentialContext.AwsContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AwsContext = function AwsContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/Credentials/AWS/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a AwsInstance
 *
 * @function fetch
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AwsInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a AwsInstance
 *
 * @function update
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {string} [opts.friendlyName] - A string to describe the resource
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'FriendlyName': _.get(opts, 'friendlyName')});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new AwsInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a AwsInstance
 *
 * @function remove
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AwsInstance
 */
/* jshint ignore:end */
AwsContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Accounts.V1.CredentialContext.AwsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
AwsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

AwsContext.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  AwsList: AwsList,
  AwsPage: AwsPage,
  AwsInstance: AwsInstance,
  AwsContext: AwsContext
};
