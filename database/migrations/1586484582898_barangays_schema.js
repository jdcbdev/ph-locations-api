'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BarangaysSchema extends Schema {
  up () {
    this.create('barangays', (table) => {
      table.increments()
      table.string('psgc_code')
      table.string('description')
      table.string('region_code')
      table.string('province_code')
      table.string('city_code')
      table.string('brgy_code')
      table.timestamps()
    })
  }

  down () {
    this.drop('barangays')
  }
}

module.exports = BarangaysSchema
