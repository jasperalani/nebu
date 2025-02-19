/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string

  readonly VITE_BASE_URL: string

  readonly VITE_API_BASE_URL: string

  readonly VITE_OAUTH_REDIRECT_URL: string

  readonly VITE_OAUTH_CLIENT_ID: string

  readonly VITE_OAUTH_CLIENT_SECRET: string

  readonly VITE_DIST_PATH: string

  readonly VITE_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}