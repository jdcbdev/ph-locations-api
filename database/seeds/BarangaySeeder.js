'use strict'

/*
|--------------------------------------------------------------------------
| BarangaySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Helpers = use('Helpers')
const Barangay = use('App/Models/Barangay')
const fs = require('fs')


class BarangaySeeder {
  async run () {

    var barangays = JSON.parse(fs.readFileSync(Helpers.appRoot() + '/storage/refbrgy.json', 'utf8'));
    
    for(var i =0; i < barangays.RECORDS.length; i++){
        await Barangay.create(
            { 
              psgc_code: barangays.RECORDS[i].psgcCode, 
              description: barangays.RECORDS[i].brgyDesc,
              region_code: barangays.RECORDS[i].regCode,
              province_code: barangays.RECORDS[i].provCode,
              city_code: barangays.RECORDS[i].citymunCode,
              brgy_code: barangays.RECORDS[i].brgyCode
            }
        )        
    } // for
     
  } // run
}

module.exports = BarangaySeeder