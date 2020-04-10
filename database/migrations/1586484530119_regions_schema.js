'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegionsSchema extends Schema {
  up () {
    this.create('regions', (table) => {
      table.increments()
      table.string('psgc_code')
      table.string('description')
      table.string('region_code')
      table.timestamp('created_at').notNullable().defaultTo(this.db.fn.now())
      table.timestamp('updated_at').notNullable().defaultTo(this.db.fn.now())
      table.timestamp('deleted_at').nullable()

    })
  }

  down () {
    this.drop('regions')
  }
}

module.exports = RegionsSchema
