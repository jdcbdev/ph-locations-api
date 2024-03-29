'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Region:
*      type: object
*      properties:
*        id:
*          type: string
*        name:
*          type: string
*        href:
*          type: string
*/
class Region extends Model {
    static boot () {
        super.boot()
        this.addTrait('@provider:Lucid/SoftDeletes')
    }
}

module.exports = Region