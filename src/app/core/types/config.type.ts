
export type SharedModuleConfig = {
  services:     SharedModuleConfigServices
};

export type SharedModuleConfigServices = {
  http:       SharedModuleConfigServicesHttp
};

export type SharedModuleConfigServicesHttp = {
  url:        string;
};
