'use strict'

const City = use('App/Models/City')
const  { map_request_parameters } = use('App/Helpers')

class CityRepository {

    async index(params){

        let p = map_request_parameters('city', params.page, params.filter)

        const query = City.query().orderBy(p.order_by_field, p.order_by_direction)

        if(params.filter != undefined && params.filter.where != undefined){

            if(params.filter.where.description != undefined)
                query.where('description', 'LIKE',  params.filter.where.description.like +'%')

            if(params.filter.where.region_code != undefined)
                query.where('region_code',  params.filter.where.region_code)

            if(params.filter.where.province_code != undefined)
                query.where('province_code',  params.filter.where.province_code)            

        }

        const items = await query.paginate(p.page, p.limit)
        return items
    } 
}

module.exports = CityRepository