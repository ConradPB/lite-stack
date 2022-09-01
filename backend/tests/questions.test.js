const request = require ('supertest')
const { response } = require('../server.js')
const app = require('../server.js')

//when I call /questions with HTTP GET, I should get back an array 
//which has an abject that has a shape with a name thats a string and completed as a string
describe('Questions API', () => {
    it('GET /Questions --> fetch all questions',  () => {
        const response = request(app)
            .get('/questions')
            .expect('Content-Type', /json/)
            .expect(200)
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    order: expect.any(Number),
                    date: expect.any(Number),
                    question: expect.any(String),
                    completed: expect.any(Boolean)
                })
            ])
        )

    })
    it('GET /Questions/id --> fetch specific question by ID', () => {
        const response = request(app)
            .get('/.questionRoutes.js')
            .expect('Content-Type', /json/)
            .expect(200)
        expect(response.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                order: expect.any(Number),
                date: expect.any(Number),
                question: expect.any(String),
                completed: expect.any(Boolean)
            })
        )

    })
    it('GET /Questions --> Validates all questions', () => {
        return request(app)
        .post('/questions')
        .send({ name: 123 })
        .expect(404)

    })
    it('GET /Questions/id --> 404 if not found', () => {
        return request(app)
        .get('/questions/56654')
        .expect(404)

    })

    it('POST /Questions --> Add all questions', () => {
        const response = request(app)
            .post('/questions')
            .send({ question: 'Dondes es la cerveza??' })
            .expect('content-Type', /json/)
            .expect(201)
        expect(response.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                order: expect.any(Number),
                date: expect.any(Number),
                question: 'Dondes es la cerveza??',
                completed: expect.any(false)
            })
        )

    })
   
    it('Update /Questions/id -->  Update specific question', () => {

    })
    it('DELETE /Questions/id --> Delete specific question', () => {

    })
    
})
