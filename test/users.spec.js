process.env.NODE_ENV = "test"

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const {knex} = require('../db/database')
chai.use(chaiHttp)

describe('register user', () => {
  // beforeEach(() => {
  //   return knex.migrate.rollback()
  //   .then(() => {
  //     return knex.migrate.latest()
  //   })
  //   .then( () => {
  //     return knex.seed.run()
  //   })
  // })

  describe('POST /v1/register', () => {
    it('should post a new user to the database', () => {
      return chai.request(server)
      .post('/v1/register')
      .send({
        email: 'a@a.com',
        password: '111111'
      })
      .then( (res) => {
        // console.log(res.body)
        res.should.be.json
        res.body.user.should.be.a('array')
        res.body.user[0].should.have.property('id')
        res.body.user[0].should.have.property('email')
        res.body.user[0].should.have.property('password')
        res.body.user[0].email.should.equal('a@a.com')
      })
    })
  })

  describe('POST /v1/login', () => {
    it('should login a user', () => {
      return chai.request(server)
      .post('/v1/login')
      .send({
        email: 'a@a.com',
        password: '111111'
      })
      .then((res) => {
        console.log(res)
      })
    })
  })




})
