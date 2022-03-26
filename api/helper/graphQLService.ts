import { ExecuteGraphQLRequest } from './executeGraphQLRequest';

const executeGraphQLRequest = new ExecuteGraphQLRequest();

export class GraphQLService {
  /**
   * makeGraphQLRequest
   * @param serviceEndpoint
   * @param headers
   * @param query
   * @param variables
   */
  public async makeGraphQLRequest(serviceEndpoint, headers, query, variables?) {
    return executeGraphQLRequest.makeGraphQLRequest(
      serviceEndpoint,
      headers,
      query,
      variables
    );
  }

  /**
   * fetchGraphQlQueryWithOptions
   * @param serviceEndpoint
   * @param requestOptions
   */
  public async makeGraphQLRequestWithOptions(serviceEndpoint, requestOptions) {
    return executeGraphQLRequest.makeGraphQLRequestWithOptions(
      serviceEndpoint,
      requestOptions
    );
  }
}
