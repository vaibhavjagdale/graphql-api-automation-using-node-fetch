import jsonpath from 'jsonpath';
import { AssertResponse } from '../checks/assertResponse';

const assertResponse = AssertResponse.Instance;

export class Response {
  /**
   * getJsonResponse
   * @param response
   */
  public async getJsonResponse(response: any) {
    return (await response).json();
  }

  /**
   * getTextResponse
   * @param response
   */
  public async getTextResponse(response: any) {
    return (await response).text();
  }

  /**
   * getResponseOK
   * @param response
   */
  public async getResponseOK(response: any) {
    return (await response).ok;
  }

  /**
   * getResponseStatus
   * @param response
   */
  public async getResponseStatus(response: any) {
    return (await response).status;
  }

  /**
   * checkStatusOK
   * @param response
   * @param message
   */
  public async checkStatusOK(response: any, message?: string) {
    assertResponse.verifyStatusOK((await response).status, message);
  }

  /**
   * checkStatusOKText
   * @param response
   * @param message
   */
  public async checkStatusOKText(response: any, message?: string) {
    assertResponse.verifyStatusOKText((await response).statusText, message);
  }

  /**
   * getResponseStatusText
   * @param response
   */
  public async getResponseStatusText(response: any) {
    return (await response).statusText;
  }

  /**
   * getResponseHeaders
   * @param response
   */
  public async getResponseHeaders(response: any, headerName: string) {
    return (await response).headers.get(headerName);
  }

  /**
   * checkStatusCode
   * @param response
   * @param expectStatus
   * @param message
   */
  public async checkStatusCode(
    response: any,
    expectStatus: string,
    message?: string
  ) {
    assertResponse.verifyStatus((await response).status, expectStatus, message);
  }

  /**
   * verify getResponseValue
   * @param response
   * @param key
   */
  public async getResponseValue(response: any, key: string) {
    const responsePayload = await response.json();
    const path = `$..${key}`;
    return jsonpath.query(responsePayload, path);
  }
}
