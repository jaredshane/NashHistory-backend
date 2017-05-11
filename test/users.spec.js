process.env.NODE_ENV = "test"

onst chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const server = require('../app')
const {knex} = require('../db/database')
chai.use(chaiHttp)

describe()
