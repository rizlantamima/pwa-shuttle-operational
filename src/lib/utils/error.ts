import { ResponseError422 } from "../types/error-response";

// Type guard function to check if error.response is of type ResponseError422
export const isResponseError422 = (error: any): error is ResponseError422 => {
  return error.response && error.response.errors !== undefined;
};
