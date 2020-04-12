'use strict'

const Barangay = use('App/Models/Barangay')
const  { map_request_parameters } = use('App/Helpers')

class BarangayRepository {

    async index(params){

        let p = map_request_parameters('city', params.page, params.filter)

        const query = Barangay.query().orderBy(p.order_by_field, p.order_by_direction)

        if(params.filter != undefined && params.filter.where != undefined){
            if(params.filter.where.description != undefined)
                query.where('description', 'LIKE',  params.filter.where.description.like +'%')

            if(params.filter.where.region_code != undefined)
                query.where('region_code',  params.filter.where.region_code)

            if(params.filter.where.province_code != undefined)
                query.where('province_code',  params.filter.where.province_code)

            if(params.filter.where.city_code != undefined)
                query.where('city_code',  params.filter.where.city_code)

        }

        const items = await query.paginate(p.page)
        return items
    } 
}

module.exports = BarangayRepository