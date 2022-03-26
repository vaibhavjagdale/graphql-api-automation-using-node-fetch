import { expect } from 'chai';
import { HttpStatusCode } from '../support/httpStatusCode';

export class AssertResponse {
  private static instance: AssertResponse;
  /**
   * private constructor
   */
  private constructor() {}

  /**
   * get instance of class
   */
  public static get Instance() {
    return this.instance || (this.instance = new this());
  }

  /**
   * VerifyStatusOK
   * @param status
   */
  public verifyStatusOK(status: string, message?: string) {
    expect(status, message).to.equal(HttpStatusCode.OK);
  }

  /**
   * verify Status Text
   * @param status
   */
  public verifyStatusOKText(statusText: string, message?: string) {
    const statusOKText = 'OK';
    expect(statusText, message).to.equal(statusOKText);
  }

  /**
   * VerifyStatus
   * @param actualStatus
   * @param expectStatus
   */
  public verifyStatus(
    actualStatus: string,
    expectStatus: string,
    message?: string
  ) {
    expect(actualStatus, message).to.equal(expectStatus);
  }

  /**
   * verify Status text
   * @param actualStatusText
   * @param expectStatusText
   */
  public verifyStatusText(
    actualStatusText: string,
    expectStatusText: string,
    message?: string
  ) {
    expect(actualStatusText, message).to.equal(expectStatusText);
  }

  /**
   * verify header
   * @param actualheader
   * @param expectedheader
   */
  public verifyheader(
    actualheader: string,
    expectedheader: string,
    message?: string
  ) {
    expect(actualheader, message).to.equal(expectedheader);
  }

  /**
   * verify responceValue
   * @param actualValue
   * @param expectedValue
   */
  public verifyResponceValue(
    actualValue: string,
    expectedValue: string,
    message?: string
  ) {
    expect(actualValue, message).to.equal(expectedValue);
  }

  /**
   * verify responseTime
   * @param actualresponseTime
   * @param expectedresponseTime
   */
  public verifyResponseTime(
    actualresponseTime: number,
    expectedresponseTime: number,
    message?: string
  ) {
    expect(actualresponseTime, message).to.be.below(expectedresponseTime);
  }

  /**
   * verifyBodyMatchesString
   * @param actualResponse
   * @param expectedString
   */
  public async verifyBodyMatchesString(
    actualResponse,
    expectedString: string,
    message?: string
  ) {
    const responseBody = await actualResponse.text();
    expect(responseBody, message).to.include(expectedString);
  }

  /**
   * verifySuccessfulPOSTRequest
   * @param statusCode
   */
  public verifySuccessfulPOSTRequest(statusCode, message?: string) {
    const successCode = [201, 202];
    expect(statusCode, message).to.be.oneOf(successCode);
  }
}
