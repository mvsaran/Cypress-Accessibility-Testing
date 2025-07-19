const fs = require('fs');
const path = require('path');

// Read JSON results
const resultsPath = path.join(__dirname, 'cypress', 'reports', 'a11y-results.json');
const results = JSON.parse(fs.readFileSync(resultsPath, 'utf-8'));

const htmlPath = path.join(__dirname, 'cypress', 'reports', 'a11y-report.html');

// Start HTML
let html = `
  <html>
    <head>
      <title>Accessibility Report</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 2rem; }
        h1 { color: #333; }
        .violation { margin-bottom: 2rem; border: 1px solid #ccc; padding: 1rem; }
        .impact { font-weight: bold; color: red; }
        code { background: #f4f4f4; padding: 2px 4px; }
      </style>
    </head>
    <body>
      <h1>Accessibility Violations</h1>
`;

// Add each violation
results.violations.forEach(v => {
  html += `
    <div class="violation">
      <h2>${v.id}</h2>
      <p><span class="impact">Impact:</span> ${v.impact}</p>
      <p>${v.description}</p>
      <p><a href="${v.helpUrl}" target="_blank">More info</a></p>
      <h3>Affected Nodes:</h3>
      <ul>
        ${v.nodes.map(node => `<li><code>${node.target.join(', ')}</code></li>`).join('')}
      </ul>
    </div>
  `;
});

// Close HTML
html += `
    </body>
  </html>
`;

// Write file
fs.writeFileSync(htmlPath, html);

console.log(`✅ HTML accessibility report generated at: ${htmlPath}`);
