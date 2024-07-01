import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

type AxiosProperitesType = 'code' | 'config' | 'message' | 'name' | 'request' | 'response';

type RequiredForAPIErrorType<T extends AxiosError> = Pick<T, AxiosProperitesType>;
type AxiosErrorsRequiredType<T extends AxiosError> = {
  [k in keyof RequiredForAPIErrorType<T>]-?: RequiredForAPIErrorType<T>[k];
} & Omit<AxiosError, AxiosProperitesType>;

function validateRequiredAxiosErrorType<T, D>(
  error: AxiosError<T, D>
): error is AxiosErrorsRequiredType<AxiosError<T, D>> {
  const axiosProperites: AxiosProperitesType[] = ['code', 'config', 'message', 'name', 'request', 'response'];

  return axiosProperites.every(property => error[property] !== undefined);
}

export class CustomError<T extends Error = Error> extends Error {
  constructor(error: T) {
    super(error.message);
  }

  static convertError(error: unknown) {
    if (error instanceof AxiosError && error?.response?.status !== 500) {
      const isApiError = validateRequiredAxiosErrorType(error);

      return isApiError ? new APIError(error) : new RuntimeError(error);
    }

    return new RuntimeError(error as Error);
  }
}

export class APIError extends CustomError<AxiosErrorsRequiredType<AxiosError>> {
  errorCode: string;

  errorConfig: AxiosRequestConfig;

  errorMessage: string;

  errorName: string;

  request: XMLHttpRequest;

  response: AxiosResponse;

  constructor(error: AxiosErrorsRequiredType<AxiosError>) {
    super(error);

    this.errorCode = error.code;
    this.errorConfig = error.config;
    this.errorMessage = error.message;
    this.errorName = error.name;
    this.request = error.request;
    this.response = error.response;
  }
}

export class RuntimeError extends CustomError {}
