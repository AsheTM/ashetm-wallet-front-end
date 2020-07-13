
export type SharedModuleConfig = {
  services: SharedModuleConfigServices;
};

export type SharedModuleConfigServices = {
  http:     SharedModuleConfigServicesHttp;
  session:  SharedModuleConfigServicesSession;
};

export type SharedModuleConfigServicesHttp = {
  url:        string;
  controller: SharedModuleConfigServicesHttpController;
  swagger?:   string;
  doc?:       string;
};

export type SharedModuleConfigServicesHttpController = {
  prefix: string;
  api:    SharedModuleConfigServicesHttpControllerApi;
};

export type SharedModuleConfigServicesHttpControllerApi = {
  [path: string]: SharedModuleConfigServicesHttpControllerApiDetail;
};

export type SharedModuleConfigServicesHttpControllerApiDetail = {
  method: HttpMethod;
  path:   string;
};

type HttpMethod = HttpMethodGet | HttpMethodPost | HttpMethodPut | HttpMethodPatch | HttpMethodDelete;

type HttpMethodGet    = 'get'     | 'GET';
type HttpMethodPost   = 'post'    | 'POST';
type HttpMethodPut    = 'put'     | 'PUT';
type HttpMethodPatch  = 'patch'   | 'PATCH';
type HttpMethodDelete = 'delete'  | 'DELETE';

export type SharedModuleConfigServicesSession = {
  storage:    SharedModuleConfigServicesSessionsStorage;
  password?:  SharedModuleConfigServicesSessionsPassword;
}

export type SharedModuleConfigServicesSessionsPassword = {
  length: number;
};

export type SharedModuleConfigServicesSessionsStorage = {
  [key: string]: SharedModuleConfigServicesSessionsStorageDetail;
};

export type SharedModuleConfigServicesSessionsStorageDetail = {
  name: string;
};
