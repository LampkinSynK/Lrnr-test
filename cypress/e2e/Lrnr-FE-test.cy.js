describe('Has all homepage elements', () => {
    it ('should display the logo', () => {
        cy.visit('http://localhost:3000')
        cy.get('[alt="website homepage"]').should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })
    })

    it ('should display a button to take the quiz', () => {
        cy.visit('http://localhost:3000')
        cy.get("a:contains(Begin Journey), a.src").each($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.have.attr("href", "/quiz-generation");
          });
    })
});

describe('Has all navbar elements', () => { 
    it ('should display the correct title', () => {
        cy.visit('http://localhost:3000')
        cy.get("a:contains(lrnr), a.src").each($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.have.attr("href", "/");
          });
    })

    it ('Should have two routing buttons', () => {
        cy.visit('http://localhost:3000')
        cy.get("a:contains(Account), a.src").each($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.have.attr("href", "/account");
          });
        cy.get("a:contains(Quiz Generation), a.src").each($a => {
            const message = $a.parent().parent().text();
            expect($a, message).to.have.attr("href", "/quiz-generation");
          });
    });

});

describe('Quiz generation page has all required values', () => {
    it ('should have all topic options', () => {
        cy.visit('http://localhost:3000/quiz-generation')
        cy.get('select.form-select').contains('golang')
        cy.get('select.form-select').contains('aws')
        cy.get('select.form-select').contains('javascript')
        cy.get('select.form-select').contains('CI/CD')
    })

    it ('should have all difficulty options', () => {
        cy.visit('http://localhost:3000/quiz-generation')
        cy.get('select.form-select').contains('novice')
        cy.get('select.form-select').contains('intermediate')
        cy.get('select.form-select').contains('expert')
    });

    it ('should have all number of questions options', () => {
        cy.visit('http://localhost:3000/quiz-generation')
        cy.get('select.form-select').contains('5')
        cy.get('select.form-select').contains('10')
        cy.get('select.form-select').contains('15')
    });
});

describe('All account stats are there', () => {
    it ('should display the correct titles', () => {
        cy.visit('http://localhost:3000/account')
        cy.get('p.h3').contains('Streak')
        cy.get('p.h3').contains('Platinum Quizzes')
        cy.get('p.h3').contains('Lrnr Level: 2')
    })
});