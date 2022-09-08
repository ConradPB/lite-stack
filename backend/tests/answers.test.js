const request = require ('supertest')
const app = require('../server')

//when I call /questions with HTTP GET, I should get back an array 
//which has an abject that has a shape with a name thats a string and completed as a string
describe('Questions API', () => {
    it('GET / --> fetch all answers', () => {
        request(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => 
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Number),
                        date: expect.any(Number),
                        question: expect.any(String),
                        completed: expect.any(Boolean),
                    })
                ])
            ))

        })
    it('GET /id --> fetch specific answer by ID', () => {
        request(app)
                .get('/.answers/:id')
                .expect('Content-Type', /json/)
                .expect(200)
                .then((response) => 
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Number),
                        date: expect.any(Number),
                        question: expect.any(String),
                        completed: expect.any(Boolean),
                    })
                ))
    
            })
    
    it('GET /:id --> 404 if not found', () => {
         request(app)
                .get('/answers/56654')
                .expect(404)
        
            })     
    
    it('POST /Send Answers --> Add all answers', () => {
        request(app)
                    .post('/answers')
                    .send({ answer: 'Dondes es la cerveza??' })
                    .expect('Content-Type', /json/)
                    .expect(201)
                    .then((response) => 
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Number),
                        date: expect.any(Number),
                        answer: 'Dondes es la cerveza??',
                        completed: false,
                    })
                ))
        
            })
    it('POST /Questions --> Validates all questions', () => {
        request(app).post('/questions').send({ answer: 6755 }).expect(404)
        
            })     
   
    it('PUT/ UPDATE /:id --> fetch specific answer by ID', () => {
        request(app)
                .put('/update/answer/:id')
                .expect('Content-Type', /json/)
                .send({ answer: 'Updated' })
                .expect(200)
                .then((response) => 
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Number),
                        date: expect.any(Number),
                        question: expect.any(String),
                        completed: expect.any(Boolean),
                    })
                ))
    
            })
    
    it('PUT/ UPDATE /:id --> fetch specific answer by ID', () => {
        request(app)
                .put('/update/answers/:id')
                .expect('Content-Type', /json/)
                .send({ answer: 'Updated' })
                .expect(200)
                .then((response) => 
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Number),
                        date: expect.any(Number),
                        question: expect.any(String),
                        completed: expect.any(Boolean),
                    })
                ))
             })

        
    it('DELETE/ UPDATE /:id --> fetch specific answer by ID', () => {
        request(app)
                .delete('/update/answers/:id')
                .expect('Content-Type', /json/)
                .send({ answer: 'Deleted' })
                .expect(200)
                .then((response) => 
                expect(response.body).toEqual(
                    expect.objectContaining({
                        id: expect.any(Number),
                        order: expect.any(Null),
                        date: expect.any(Null),
                        question: expect.any(Null),
                        completed: expect.any(Boolean),
                    })
                ))
             })
})
