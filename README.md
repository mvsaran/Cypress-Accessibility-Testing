# Cypress Accessibility Testing Starter

**A simple starter project for running automated web accessibility checks with [Cypress](https://www.cypress.io/) and [axe-core](https://www.deque.com/axe/).**  
It helps you detect accessibility issues early in your CI/CD pipeline.

---

## 🌍 Why Accessibility Testing?

Accessibility (a11y) testing ensures that your website is usable by **everyone**, including people with disabilities who rely on screen readers, keyboard navigation, or assistive tech.

**Benefits:**
- Comply with standards like **WCAG** and **ADA**.
- Improve user experience for all.
- Avoid costly legal risks.
- Build inclusive products.

---

## ✅ What This Project Does

✔️ Uses [cypress-axe](https://www.npmjs.com/package/cypress-axe) to inject [axe-core](https://github.com/dequelabs/axe-core) into your app.

✔️ Runs accessibility scans on your pages during E2E tests.

✔️ Automatically saves violations as **JSON**.

✔️ Converts JSON results to a **readable HTML report**.

---

## 🚀 Get Started

Follow these **step-by-step** instructions to run your own accessibility scans.

---

### 1️⃣ Clone This Repo

git clone https://github.com/YOUR_USERNAME/cypress-axe-accessibility-testing-starter.git
cd cypress-axe-accessibility-testing-starter
2️⃣ Install Dependencies
npm install
3️⃣ Run the Accessibility Test

npx cypress run
This will:
Open your target URL (cy.visit())
Inject axe-core
Run an a11y scan with cy.runA11yCheck()
Save a11y-results.json under cypress/reports/

4️⃣ Generate a HTML Report
npm run a11y:report
This converts a11y-results.json into a human-friendly a11y-report.html.

✅ Check it here:

cypress/reports/a11y-report.html
📂 Project Structure
.
├── cypress/
│   ├── e2e/
│   │   └── accessibility.cy.js   # Cypress test file
│   ├── reports/                  # JSON & HTML results
│   └── support/
│       ├── commands.js           # Custom commands for axe
│       └── e2e.js
├── generate-axe-report.js        # Node script to build HTML report
├── cypress.config.js
├── package.json
✏️ How to Customize
Change the URL:
Update cy.visit() in accessibility.cy.js to point to your own site.

Check more pages:
Add multiple cy.runA11yCheck() calls for different pages or states.

Run in CI:
Integrate npx cypress run into your build pipeline.

📢 Contribution
Fork it → Improve it → PRs welcome!

✅ Useful Links
Deque axe-core

Cypress Documentation https://docs.cypress.io/app/get-started/why-cypress

cypress-axe https://docs.cypress.io/app/get-started/why-cypress#Accessibility-Testing

Build for everyone. Test for everyone. 💙

#HappyTesting 🚀
