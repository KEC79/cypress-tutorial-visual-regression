const pages = ["http://example.com/"]

const sizes = ["iphone-6", "ipad-2", [1200, 800]]

describe("Visual regression", () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution ${size}`, () => {
                let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
                cy.clock(currentTime)
                cy.setResolution(size)
                cy.visit(page)
                cy.matchImageSnapshot()
            })
        })
    })
})

describe("Single Element Snapshot", () => {
    it("Should match a single element on the page", () => {
        cy.visit("http://example.com")
        cy.get("h1").matchImageSnapshot()
    })
})



// describe("Visual Regression", () => {
//     it("My first visual regression test", () => {
//         // load website
//         cy.visit("http://example.com/")
//         // compare snapshots
//         cy.matchImageSnapshot()
//     })
// })