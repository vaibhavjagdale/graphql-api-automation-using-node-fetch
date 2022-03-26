export enum HttpStatusCode {
  Continue = 100,

  OK = 200,
  Created = 201,
  Accepted = 202,

  MovedPermanently = 301,
  Found = 302,

  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  RequestTimeout = 408,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,

  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}
