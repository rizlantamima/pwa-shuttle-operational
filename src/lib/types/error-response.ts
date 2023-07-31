import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type ValidationFieldError = {
  [key: string]: string[];
};

export type ResponseError = {
  message: string;
};

export type ResponseError422 = {
  errors: ValidationFieldError;
} & ResponseError;

export interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: XMLHttpRequest;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}
