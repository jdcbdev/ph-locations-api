'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamp('created_at').notNullable().defaultTo(this.db.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.db.fn.now())
      table.timestamp('deleted_at').nullable()

    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
