'use strict'

class HomeController {
    async index ({ request, response, view }) {
        let message = {
            api_name: "PH Location API",
            api_version: "v1.0.1",
            resources: [
                {"region": "/regions/"},
                {"province": "/provinces/"},
                {"cities": "/cities"},
                {"barangays": "/barangays/"}
            ]
        }
        return response.json(message)
      }
}

module.exports = HomeController
