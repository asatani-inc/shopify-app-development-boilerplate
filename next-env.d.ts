/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: string;
    readonly SHOPIFY_API_KEY: string;
    readonly SHOPIFY_API_SECRET: string;
    readonly SCOPES: string;
    readonly HOST: string;
  }
}
