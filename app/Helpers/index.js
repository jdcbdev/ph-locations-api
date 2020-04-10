'use strict'

function build_api_base_url(request){
    return request.protocol() + '://' + request.hostname() + '/'
}

module.exports = {
    build_api_base_url
}
