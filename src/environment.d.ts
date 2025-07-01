declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_TEST_INSTALL_PROMPT?: 'true' | 'false';
    }
  }
}
