import { registerAs } from '@nestjs/config';

const register = registerAs('config', () => ({
  project: {
    apiPrefix: 'api/v1',
    name: process.env.npm_package_name,
    version: Number(process.env.npm_package_version),
    description: process.env.npm_package_description,
  },
  server: {
    env: process.env.NEST_NODE_ENV,
    port: process.env.NEST_BACKEND_PORT,
    basePath: process.env.NEST_BASE_PATH,
    origins: process.env.NEST_ORIGIN_CORS || '*',
    allowedHeaders: process.env.NEST_ALLOWED_HEADERS,
    allowedMethods: process.env.NEST_ALLOWED_METHODS,
    corsEnabled: process.env.NEST_CORS_ENABLED,
    corsCredentials: process.env.NEST_CORS_CREDENTIALS,
  },
  swagger: {
    path: process.env.NEST_SWAGGER_PATH,
    enabled: process.env.NEST_SWAGGER_ENABLED,
  },
  storage: {
    port: process.env.NEST_SWAGGER_PATH,
    host: process.env.NEST_SWAGGER_PATH,
  },
}));

export type Config = { config: ReturnType<typeof register> };

export default register;
