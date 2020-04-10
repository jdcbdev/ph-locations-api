'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const City = use('App/Models/City')

/**
 * Resourceful controller for interacting with cities
 */
class CityController {
  /**
   * Show a list of all cities.
   * GET cities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, transform }) {
    const current_page = request.input('page', 1)
    const items = await City.query().orderBy('description', 'asc').paginate(current_page)
    return transform.collection(items, 'CityTransformer')
  }

  /**
   * Render a form to be used for creating a new city.
   * GET cities/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Create/save a new city.
   * POST cities
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Display a single city.
   * GET cities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const item = await City.query().where('city_code', params.id).first()
    return transform.item(item, 'CityTransformer')
  }

  /**
   * Render a form to update an existing city.
   * GET cities/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Update city details.
   * PUT or PATCH cities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Delete a city with id.
   * DELETE cities/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }
}

module.exports = CityController
