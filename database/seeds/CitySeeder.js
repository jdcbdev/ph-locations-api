'use strict'

/*
|--------------------------------------------------------------------------
| CitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Helpers = use('Helpers')
const City = use('App/Models/City')
const fs = require('fs')


class CitySeeder {
  async run () {

    var cities = JSON.parse(fs.readFileSync(Helpers.appRoot() + '/storage/refcitymun.json', 'utf8'));
    
    for(var i =0; i < cities.RECORDS.length; i++){
        await City.create(
            { 
              psgc_code: cities.RECORDS[i].psgcCode, 
              description: cities.RECORDS[i].citymunDesc,
              region_code: cities.RECORDS[i].regDesc,
              province_code: cities.RECORDS[i].provCode,
              city_code: cities.RECORDS[i].citymunCode
            }
        )        
    } // for
     
  } // run
}

module.exports = CitySeeder