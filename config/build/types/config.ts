export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildOption {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  apiUrl: string,
  project: 'storybook' | 'frontend' | 'jest',
  port: number
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string,
}
