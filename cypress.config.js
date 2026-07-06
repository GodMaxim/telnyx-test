import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'x83g1c',
  allowCypressEnv: false,
  chromeWebSecurity: false,
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
