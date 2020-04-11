'use strict'

const Env = use('Env')

function build_api_url(request, resource){
    let output = ''

    output += request.protocol() + '://'
    output += request.hostname()

    if(Env.get('NODE_ENV') == 'development')
        output += ':'+ Env.get('PORT', 3333)

    output += '/v1/' + resource

    return  output
}

function map_request_parameters(resource_name, page, filter){

    let orderby = filter.order.split(" ")   
    let order_by_field = orderby[0]
    let order_by_direction = orderby[1]

    if(order_by_field == 'id' && resource_name == 'region')
        order_by_field = 'region_code'
    else if(order_by_field == 'id' && resource_name == 'city')
        order_by_field = 'city_code'
    else if(order_by_field == 'id' && resource_name == 'province')
        order_by_field = 'province_code'
    else if(order_by_field == 'id' && resource_name == 'brgy_code')
        order_by_field = 'brgy_code'
    else
        order_by_field = 'region_code'

    return {
        page,
        order_by_field,
        order_by_direction,
        limit: 10
    }
}

module.exports = {
    build_api_url,
    map_request_parameters
}
