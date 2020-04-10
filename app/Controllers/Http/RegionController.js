'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Region = use('App/Models/Region')

/**
 * Resourceful controller for interacting with regions
 */
class RegionController {
  /**
   * Show a list of all regions.
   * GET regions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, transform }) {
    const current_page = request.input('page', 1)
    const items = await Region.query().orderBy('description', 'asc').paginate(current_page)
    return transform.collection(items, 'RegionTransformer')
  }

  /**
   * Render a form to be used for creating a new region.
   * GET regions/create
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
   * Create/save a new region.
   * POST regions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Display a single region.
   * GET regions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const item = await Region.query().where('region_code', params.id).first()
    return transform.item(item, 'RegionTransformer')
  }

  /**
   * Render a form to update an existing region.
   * GET regions/:id/edit
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
   * Update region details.
   * PUT or PATCH regions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Delete a region with id.
   * DELETE regions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }
}

module.exports = RegionController
