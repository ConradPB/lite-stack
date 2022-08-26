const request = require ('supertest')
const app = require('./app')

//when I call /questions with HTTP GET, I should get back a an array that has an abject that has a shape with a name thats a string and completed as a string
describe('Questions API' () => {
    it('GET /Questions --> fetch all questions', () => {
        return request(app)
        .get('/questions')
        .expect('content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining {
                        name: expect.any(String),
                        completed: expect.any(String)
                    }
                ])
            ) 
        })

    })
    it('GET /Questions/3 --> fetch specific question by ID', () => {
        return request(app)
        .get('/questions')
        .expect('content-Type', /json/)
        .expect(200)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    name: expect.any(String),
                    completed: expect.any(String)
                })
            ) 
        })

    })
    it('GET /Questions --> Validates all questions', () => {
        return request(app)
        .post('/questions')
        .send({ name: 123 })
        .expect(422)

    })
    it('GET /Questions/id --> 404 if not found', () => {
        return request(app)
        .get('/questions/56654')
        .expect(404)

    })

    it('POST /Questions --> Add all questions', () => {
        return request(app)
        .post('/questions')
        .send({message: 'Add question'})
        .expect('content-Type', /json/)
        .expect(201)
        .then(response => {
            expect(response.body).toEqual(
                expect.objectContaining({
                    message: 'Add question',
                    completed: false
                })
            ) 
        })

    })
    it('POST /Questions --> Add all questions', () => {

    })
    it('Update /Questions/id -->  Update specific question', () => {

    })
    it('DELETE /Questions/id --> Delete specific question', () => {

    })
    
})
