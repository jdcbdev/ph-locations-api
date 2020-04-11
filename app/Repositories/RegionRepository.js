'use strict'

const Region = use('App/Models/Region')
const  { map_request_parameters } = use('App/Helpers')

class RegionRepository {

    async index(params){

        let p = map_request_parameters('region', params.page, params.filter)

        const query = Region.query().orderBy(p.order_by_field, p.order_by_direction)

        if(params.filter.where != undefined)
            query.where('description', 'LIKE',  params.filter.where.description.like +'%')

        const items = await query.paginate(p.page)
        return items
    } 
}

module.exports = RegionRepository