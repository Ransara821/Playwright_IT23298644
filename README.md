# Playwright_IT23298644

# SwiftTranslator Test Automation Suite

This project contains automated tests for the SwiftTranslator Singlish to Sinhala conversion system using Playwright.

## Project Overview

This test suite validates the functionality of the SwiftTranslator web application by testing:
- 24 positive functional scenarios
- 10 negative functional scenarios  
- 1 UI-related test scenario

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (comes with Node.js)

## Installation

### Step 1: Clone or Download the Repository

If you have the project as a zip file, extract it. If it's a Git repository:

### Step 2: Install Dependencies

Run the following command in the project root directory:

```bash
npm install
```

### Step 3: Install Playwright Browsers

After installing dependencies, install the required browsers:

```bash
npx playwright install chromium
```

## Project Structure

```
.
├── swift-translator-tests.spec.js    # Main test file
├── playwright.config.js              # Playwright configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Running the Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Headed Mode (visible browser)

```bash
npm run test:headed
```

### Run Tests with UI Mode (interactive)

```bash
npm run test:ui
```

### Run Tests in Debug Mode

```bash
npm run test:debug
```

### View Test Report

After running tests, view the HTML report:

```bash
npm run report
```


### Installation Issues

1. **Node.js Version**: Ensure you're using Node.js 16+
   ```bash
   node --version
   ```

2. **Clear Cache**: If having npm issues
   ```bash
   npm cache clean --force
   npm install
   ```

### Browser Issues

If Playwright browsers aren't working:
```bash
npx playwright install --force chromium
```



