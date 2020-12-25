import { SharedModuleConfig } from 'src/app/shared';


export type Environment = {
  production:     boolean;
  configuration?: EnvironmentConfiguration;
};

type EnvironmentConfiguration = {
  shared: SharedModuleConfig;
};
