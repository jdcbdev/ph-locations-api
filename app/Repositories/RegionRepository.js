'use strict'

const Region = use('App/Models/Region')
const  { map_request_parameters } = use('App/Helpers')

class RegionRepository {

    async index(params){

        let p = map_request_parameters('region', params.page, params.filter)

        console.log(p)

        const items = await Region.query()
                .orderBy(p.order_by_field, p.order_by_direction).paginate(p.page)
        return items
    } 
}

module.exports = RegionRepository