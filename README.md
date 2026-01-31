# IT23863934 - Playwright Test Suite

This repository contains automated test cases using Playwright for testing web applications.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 14 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

## Installation & Setup

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```bash
git clone <repository-url> // repo link have inside the IT23863934.txt
cd IT2386-As
```

Replace `<repository-url>` with the actual GitHub repository URL.

### 2. Install Dependencies

Install all required Node.js dependencies using npm:

```bash
npm install
```

This will install Playwright and all other dependencies listed in `package.json`.

### 3. Install Playwright Browsers

Playwright requires browser binaries to be installed. Run the following command:

```bash
npx playwright install
```

This downloads and installs Chromium, Firefox, and WebKit browsers used for testing.

## Running Tests

### Run All Tests

Execute all test cases:

```bash
npm test
```

Or use Playwright CLI directly:

```bash
npx playwright test
```

### Run Tests in a Specific Browser

Run tests in a specific browser (chromium, firefox, or webkit):

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a Specific Test File

Run tests from a specific file:

```bash
npx playwright test tests/example.spec.ts
```

### Run Tests in Debug Mode

Debug tests interactively with the Playwright Inspector:

```bash
npx playwright test --debug
```

### Run Tests in Headed Mode (See Browser)

Run tests with visible browser windows:

```bash
npx playwright test --headed
```

## Viewing Test Reports

After running tests, view the detailed HTML report:

```bash
npx playwright show-report
```

The report will open in your default browser showing test results, screenshots, and detailed error information.

## Project Structure

```
IT2386-As/
├── tests/                    # Test files directory
│   └── example.spec.ts      # Test specifications
├── playwright-report/        # Test reports (generated)
├── test-results/            # Test results (generated)
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Configuration

Playwright configuration is located in `playwright.config.ts`. You can modify:
- Browser types to test
- Test timeout settings
- Retry policies
- Output directories

## Troubleshooting

### Port Already in Use
If you encounter port conflicts, ensure no other services are running on the required ports.

### Browser Installation Issues
If browsers fail to install, try:

```bash
npx playwright install --with-deps
```

### Clear Cache
To clear cached files and reinstall:

```bash
npm ci
npx playwright install
```

## Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices Guide](https://playwright.dev/docs/best-practices)

## Support

For issues or questions, please refer to the Playwright documentation or create an issue in the repository.
