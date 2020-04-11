'use strict'

const Province = use('App/Models/Province')
const  { map_request_parameters } = use('App/Helpers')

class ProvinceRepository {

    async index(params){

        let p = map_request_parameters('province', params.page, params.filter)

        const query = Province.query().orderBy(p.order_by_field, p.order_by_direction)

        if(params.filter != undefined){
            if(params.filter.where != undefined && params.filter.where.description != undefined)
            query.where('description', 'LIKE',  params.filter.where.description.like +'%')
        }

        const items = await query.paginate(p.page)
        return items
    } 
}

module.exports = ProvinceRepository