Markdown
# Telnyx E2E Automation Project

This repository contains an end-to-end (E2E) testing suite for [telnyx.com](https://telnyx.com), built with **Cypress**. The project includes a CI/CD pipeline integrated with GitHub Actions and reporting via Cypress Cloud.

## Features
* **Page Object Model (POM):** Clean and maintainable test structure.
* **CI/CD Integration:** Automated test execution on every push using GitHub Actions.
* **Cypress Cloud:** Real-time reporting, test history, and artifact storage (videos/screenshots).
* **Cross-Environment Compatibility:** Configured for headless execution in Linux-based CI environments.

## Prerequisites
* [Node.js](https://nodejs.org/) (version 18 or higher recommended)
* [npm](https://www.npmjs.com/)

## Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/GodMaxim/telnyx-test.git](https://github.com/GodMaxim/telnyx-test.git)
   cd telnyx-test
   ```
2. Install dependencies:
```bash
   npm ci
   ```

## How to Run 
* **Interactive mode (Cypress Runner):**
  ```bash
  npm run cy:open
  ```

* **Headless mode:**
```bash
npm run cy:run
```

## CI/CD Pipeline
The project uses GitHub Actions for continuous integration. The configuration file is located at .github/workflows/cypress.yml. It automatically triggers on every push to the main branch.

## Project Structure
cypress/e2e/: Contains the test spec files.

cypress/support/: Contains custom commands and support files.

.github/workflows/: Contains the CI/CD pipeline configuration.

cypress.config.js: Main Cypress configuration.

