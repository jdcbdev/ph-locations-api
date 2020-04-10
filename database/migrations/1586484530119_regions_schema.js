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
      table.timestamps()
    })
  }

  down () {
    this.drop('regions')
  }
}

module.exports = RegionsSchema
