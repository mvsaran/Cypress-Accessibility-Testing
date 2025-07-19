import './commands';
import 'cypress-axe';

Cypress.Commands.add('runA11yCheck', (context = null, options = null) => {
  cy.injectAxe();
  cy.checkA11y(context, options, (violations) => {
    cy.task('log', `${violations.length} accessibility violation${violations.length === 1 ? '' : 's'} found`);
    violations.forEach(({ id, impact, description, helpUrl, nodes }) => {
      cy.task('log',
        `[${impact}] ${id}: ${description}\n  See: ${helpUrl}\n  Nodes: ${nodes.map(n => n.target).join(', ')}`
      );
    });
    cy.writeFile('cypress/reports/a11y-results.json', JSON.stringify({ violations }, null, 2));
  }, true);
});