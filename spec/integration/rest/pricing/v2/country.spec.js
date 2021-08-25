'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Country', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v2/Trunking/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v2.countries.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v2/Trunking/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v2.countries.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://pricing.twilio.com/v2/Trunking/Countries',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v2/Trunking/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.pricing.v2.countries.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.pricing.v2.countries.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://pricing.twilio.com/v2/Trunking/Countries';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'countries': [
              {
                  'country': 'Andorra',
                  'iso_country': 'AD',
                  'url': 'https://pricing.twilio.com/v2/Trunking/Countries/AD'
              }
          ],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v2.countries.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'countries': [],
          'meta': {
              'first_page_url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0',
              'key': 'countries',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://pricing.twilio.com/v2/Trunking/Countries?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v2.countries.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.pricing.v2.countries('US').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var isoCountry = 'US';
      var url = `https://pricing.twilio.com/v2/Trunking/Countries/${isoCountry}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'country': 'United States',
          'originating_call_prices': [
              {
                  'base_price': '',
                  'current_price': '0.0085',
                  'number_type': 'local'
              },
              {
                  'base_price': '',
                  'current_price': '0.022',
                  'number_type': 'toll free'
              }
          ],
          'iso_country': 'US',
          'terminating_prefix_prices': [
              {
                  'base_price': '',
                  'current_price': '0.090',
                  'destination_prefixes': [
                      '1907'
                  ],
                  'friendly_name': 'Outbound Trunking Minute - United States - Alaska',
                  'origination_prefixes': [
                      'ALL'
                  ]
              },
              {
                  'base_price': '',
                  'current_price': '0.013',
                  'destination_prefixes': [
                      '1808'
                  ],
                  'friendly_name': 'Outbound Trunking Minute - United States - Hawaii',
                  'origination_prefixes': [
                      'ALL'
                  ]
              },
              {
                  'base_price': '',
                  'current_price': '0.013',
                  'destination_prefixes': [
                      '1800',
                      '1844',
                      '1855',
                      '1866',
                      '1877',
                      '1888'
                  ],
                  'friendly_name': 'Outbound Trunking Minute - United States & Canada - Toll Free',
                  'origination_prefixes': [
                      'ALL'
                  ]
              },
              {
                  'base_price': '',
                  'current_price': '0.013',
                  'destination_prefixes': [
                      '1'
                  ],
                  'friendly_name': 'Outbound Trunking Minute - United States & Canada',
                  'origination_prefixes': [
                      'ALL'
                  ]
              }
          ],
          'price_unit': 'USD',
          'url': 'https://pricing.twilio.com/v2/Trunking/Countries/US'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.pricing.v2.countries('US').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});