'use strict'

/*
|--------------------------------------------------------------------------
| RegionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Helpers = use('Helpers')
const Region = use('App/Models/Region')
const fs = require('fs')


class RegionSeeder {
  async run () {

    var regions = JSON.parse(fs.readFileSync(Helpers.appRoot() + '/storage/refregion.json', 'utf8'));
    
    for(var i =0; i < regions.RECORDS.length; i++){
        await Region.create(
            { 
              psgc_code: regions.RECORDS[i].psgcCode, 
              description: regions.RECORDS[i].regDesc,
              region_code: regions.RECORDS[i].regCode 
            }
        )        
    } // for
     
  } // run
}

module.exports = RegionSeeder