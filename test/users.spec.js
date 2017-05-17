process.env.NODE_ENV = "test"

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const {knex} = require('../db/database')
chai.use(chaiHttp)

// describe('register and login user', () => {
//   beforeEach(() => {
//     return knex.migrate.rollback()
//     .then(() => {
//       return knex.migrate.latest()
//     })
//     .then( () => {
//       return knex.seed.run()
//     })
//   })
//
//   describe('POST /v1/register', () => {
//     it('should post a new user to the database', () => {
//       return chai.request(server)
//       .post('/v1/register')
//       .send({
//         email: 'a@a.com',
//         password: '111111'
//       })
//       .then( (res) => {
//         // console.log(res.body)
//         res.should.be.json
//         res.body.user.should.be.a('array')
//         res.body.user[0].should.have.property('id')
//         res.body.user[0].should.have.property('email')
//         res.body.user[0].should.have.property('password')
//         res.body.user[0].email.should.equal('a@a.com')
//       })
//     })
//   })
//
//   describe('POST /v1/login', () => {
//     it('should login a user', () => {
//       return chai.request(server)
//       .post('/v1/login')
//       .send({
//         email: 'a@a.com',
//         password: '111111'
//       })
//       .then((res) => {
//         console.log(res)
//       })
//     })
//   })
// })
//
// describe('handle trip routes', () => {
//   beforeEach(() => {
//     return knex.migrate.rollback()
//     .then(() => {
//       return knex.migrate.latest()
//     })
//     .then( () => {
//       return knex.seed.run()
//     })
//   })
//
//   describe('GET /v1/trip/:id', () => {
//     it('should get get all the trips for a user\' id', () => {
//       return chai.request(server)
//       .get('/v1/trip/2')
//       .then((res) => {
//         console.log(res.body)
//         res.body.should.be.a('array')
//       })
//     })
//   })
//
//   describe('POST /v1/trip', () => {
//     it('should save a trip that a user posts', () => {
//       return chai.request(server)
//       .post('/v1/trip')
//       .send({
//         latitude: '36.131892',
//         longitude: '-86.756850',
//         title: 'NSS',
//         subtitle: 'Nashville Software School',
//         number: '10',
//         location: 'Right off of interstate blvd',
//         user_id: 1
//       })
//       .then((res) => {
//         console.log(res.body)
//         res.body.should.be.a('object')
//         res.should.have.status(201)
//       })
//     })
//   })
//
// })

describe('handle journal routes', () => {
  beforeEach(() => {
      return knex.migrate.rollback()
      .then(() => {
        return knex.migrate.latest()
      })
      .then( () => {
        return knex.seed.run()
      })
    })

  describe('GET /v1/journal/:id', () => {
    it('should get get all the journal entries for a user\'s id', () => {
      return chai.request(server)
      .get('/v1/journal/2')
      .then((res) => {
        console.log(res.body)
        res.body.should.be.a('array')
      })
    })
  })

  describe('POST /v1/journal', () => {
      it('should save a journal entry that a user posts', () => {
        return chai.request(server)
        .post('/v1/journal')
        .send({
          entry: 'oijwefoiejfoeiwjf',
          photo_url: 'www.google.com',
          user_id: 1
        })
        .then((res) => {
          console.log(res.body)
          res.body.should.be.a('object')
          res.should.have.status(201)
        })
      })
    })

})
