import { SharedModuleConfigServices } from 'src/app/shared';


export type Environment = {
  production:     boolean;
  configuration?: EnvironmentConfiguration;
};

export type EnvironmentConfiguration = {
  shared: SharedModuleConfigServices;
};
