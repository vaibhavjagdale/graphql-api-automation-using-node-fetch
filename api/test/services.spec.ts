import dotenv from 'dotenv';
dotenv.config();

import { GraphQLHeader } from '../helper/graphQLHeader';
import { GraphQLService } from '../helper/graphQLService';
import { Response } from '../helper/response';

const graphQLHeader = new GraphQLHeader();
const graphQLService = new GraphQLService();
const response = new Response();

describe('GraphQL API Automation', function () {
  beforeEach(() => {});

  it('Get users', async function () {
    const query = `{
      online_users {
        id
        user {
          id
          name
        }
      }
    }`;
    const token = process.env['Authorization'];
    const serviceEndpoint = 'https://hasura.io/learn/graphql';
    await graphQLHeader.addHeader('Authorization', token);
    const headers = await graphQLHeader.getHeaders();
    const requestResponce = await graphQLService.makeGraphQLRequest(
      serviceEndpoint,
      headers,
      query
    );

    await response.checkStatusOK(requestResponce, 'Status ok failed');
    await response.checkStatusOKText(requestResponce, 'Status ok text failed');
  });
});
