
import { Logger } from '../support/logger';
const logger = Logger.Instance;

export class GraphQLHeader {
  public headers: object = {};

  /**
   * addHeader
   * @param key
   * @param value
   */
  public addHeader(key: string, value: string) {
    logger.log('file').info(`Adding headers:${key}`);
    return (this.headers[key] = value);
  }

  public addHeaders(...header) {
    logger.log('file').info(`Adding headers:${header}`);
    if (header && header.length > 0) {
      for (let i = 0; i < header.length; i++) {
        const headerParam: string[] = header[i].split('=', 2);
        if (headerParam && headerParam.length > 1) {
          this.headers[headerParam[0]] = headerParam[1];
        }
      }
      return this.headers;
    }
  }

  /**
   * getHeaders
   */
  public  getHeaders() {
    this.headers['Content-Type'] = 'application/json';
    this.headers['Connection'] = 'keep-alive';
    logger
      .log('file')
      .info(`Getting default header ${'Content-Type'} and ${'Connection'}`);
    return this.headers;
  }
}
