const request = require ('supertest')
const app = require('./app')

describe('Questions API' () => {
    it('GET /Questions --> fetch all questions', () => {
        return request(app).get('/questions').expect('content-Type', /json/).expect(200).then()

    })
    it('GET /Questions/id --> fetch specific question by ID', () => {

    })
    it('GET /Questions --> Validates all questions', () => {

    })
    it('GET /Questions/id --> 404 if not found', () => {

    })

    it('POST /Questions --> Add all questions', () => {

    })
    it('POST /Questions --> Add all questions', () => {

    })
    it('Update /Questions/id -->  Update specific question', () => {

    })
    it('DELETE /Questions/id --> Delete specific question', () => {

    })
    
})
