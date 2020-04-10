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

module.exports = {
    build_api_url
}
