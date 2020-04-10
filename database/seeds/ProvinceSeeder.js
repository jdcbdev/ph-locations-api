'use strict'

/*
|--------------------------------------------------------------------------
| ProvinceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Helpers = use('Helpers')
const Province = use('App/Models/Province')
const fs = require('fs')


class ProvinceSeeder {
  async run () {

    var provinces = JSON.parse(fs.readFileSync(Helpers.appRoot() + '/storage/refprovince.json', 'utf8'));
    
    for(var i =0; i < provinces.RECORDS.length; i++){
        await Province.create(
            { 
              psgc_code: provinces.RECORDS[i].psgcCode, 
              description: provinces.RECORDS[i].provDesc,
              region_code: provinces.RECORDS[i].regCode,
              province_code:  provinces.RECORDS[i].provCode
            }
        )        
    } // for
     
  } // run
}

module.exports = ProvinceSeeder