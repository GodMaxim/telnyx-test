const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x83g1c',
  e2e: {
    baseUrl: 'https://telnyx.com',
      experimentalSessionAndOrigin: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    chromeWebSecurity: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalModifyObstructiveThirdPartyCode: true,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'chrome' || browser.name === 'electron') {
          launchOptions.args.push('--disable-features=PermissionsPolicy');
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--allow-running-insecure-content');
        }
        return launchOptions;
      });
    },
  },
});