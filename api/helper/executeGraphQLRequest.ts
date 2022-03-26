// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch');
import { Logger } from '../support/logger';
const logger = Logger.Instance;

export class ExecuteGraphQLRequest {
  private methodName: string = 'POST';

  private validateRequestParameter(serviceEndpoint, headers, query) {
    try {
      if (serviceEndpoint == null || serviceEndpoint == undefined)
        throw new Error('Service Endpoint is missing');
      if (headers == null || headers == undefined)
        throw new Error('Request headers is missing');
      if (query == null || query == undefined)
        throw new Error('GraphQL query is missing');
    } catch (error) {
      logger.log('file').info(`Request Parameter - ${error}`);
    }
  }

  private validateRequestParameterWithOptions(serviceEndpoint, requestOptions) {
    try {
      if (serviceEndpoint == null || serviceEndpoint == undefined)
        throw new Error('Service Endpoint is missing');
      if (requestOptions.method == null || requestOptions.method == undefined)
        throw new Error('Method is missing');
      if (requestOptions.headers == null || requestOptions.headers == undefined)
        throw new Error('Headers is missing');
      if (requestOptions.body == null || requestOptions.body == undefined)
        throw new Error('Body is missing');
    } catch (error) {
      logger.log('file').info(`Request Parameter - ${error}`);
    }
  }

  /**
   * makeGraphQLRequest
   * @param serviceEndpoint
   * @param headers
   * @param query
   * @param variables
   */
  public async makeGraphQLRequest(serviceEndpoint, headers, query, variables?) {
    this.validateRequestParameter(serviceEndpoint, headers, query);
    try {
      logger
        .log('file')
        .info(`Make GraphQL Request for endpoint - ${serviceEndpoint}`);
      const response = await fetch(serviceEndpoint, {
        method: this.methodName,
        headers: headers,
        body: JSON.stringify({
          query: query,
          variables: variables
        })
      });
      logger
        .log('file')
        .info(`GraphQL Request status - ${await response.status}`);
      return response;
    } catch (err) {
      logger.log('file').info(err);
    }
  }

  /**
   * makeGraphQLRequestWithOptions
   * @param serviceEndpoint
   * @param requestOptions
   */
  public async makeGraphQLRequestWithOptions(serviceEndpoint, requestOptions) {
    this.validateRequestParameterWithOptions(serviceEndpoint, requestOptions);
    try {
      logger
        .log('file')
        .info(
          `Make GraphQL Request with options for endpoint - ${serviceEndpoint}`
        );
      const response = await fetch(serviceEndpoint, requestOptions);
      logger
        .log('file')
        .info(`GraphQL Request status - ${await response.status}`);
      return new response();
    } catch (err) {
      logger.log('file').info(err);
    }
  }
}
