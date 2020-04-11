'use strict'

const City = use('App/Models/City')
const  { map_request_parameters } = use('App/Helpers')

class CityRepository {

    async index(params){

        let p = map_request_parameters('city', params.page, params.filter)

        const query = City.query().orderBy(p.order_by_field, p.order_by_direction)

        if(params.filter != undefined){
            if(params.filter.where != undefined && params.filter.where.description != undefined)
            query.where('description', 'LIKE',  params.filter.where.description.like +'%')
        }

        const items = await query.paginate(p.page)
        return items
    } 
}

module.exports = CityRepository