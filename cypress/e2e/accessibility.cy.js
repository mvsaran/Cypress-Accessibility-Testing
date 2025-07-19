describe('Accessibility Test', () => {
  beforeEach(() => {
    cy.visit('https://unifiedportal-mem.epfindia.gov.in/memberinterface/');
    cy.get('button').contains('Ok').click({ force: true });
  });

  it('should check accessibility and log details', () => {
    cy.runA11yCheck(null, {
      includedImpacts: ['critical', 'serious', 'moderate'],
    });
  });
});