const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x83g1c',
  e2e: {
    baseUrl: 'https://telnyx.com',
     experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalModifyObstructiveThirdPartyCode: true,
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