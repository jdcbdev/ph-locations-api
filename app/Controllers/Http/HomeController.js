'use strict'

const {build_api_url} = use('App/Helpers')

class HomeController {
    async index ({ request, response, view }) {
        let message = {
            api_name: "Philippines Location API",
            api_version: "v1.0.1",
            resources: [
                {"region":  build_api_url(request,"regions") },
                {"province": build_api_url(request,"provinces")},
                {"cities": build_api_url(request,"cities")},
                {"barangays": build_api_url(request,"barangays")}
            ]
        }
        return response.json(message)
      }
}

module.exports = HomeController