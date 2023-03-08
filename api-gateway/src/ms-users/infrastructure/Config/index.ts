import { registerAs } from '@nestjs/config';

interface IConfigJson {
  [key: string]: Record<string, string | number>;
}

export default registerAs(
  'config',
  (): IConfigJson => ({
    project: {
      apiPrefix: 'api/v1',
      name: process.env.npm_package_name,
      version: Number(process.env.npm_package_version),
      description: process.env.npm_package_description,
    },
    server: {
      env: process.env.NODE_ENV,
      port: process.env.API_GATEWAY_PORT,
      host: '127.0.0.1',
      basePath: process.env.BASE_PATH,
      origins: process.env.ORIGIN_CORS || '*',
      allowedHeaders: process.env.ALLOWED_HEADERS,
      allowedMethods: process.env.ALLOWED_METHODS,
      corsEnabled: process.env.CORS_ENABLED,
      corsCredentials: process.env.CORS_CREDENTIALS,
    },
    swagger: {
      path: process.env.SWAGGER_PATH,
      enabled: process.env.SWAGGER_ENABLED,
    },
  }),
);
