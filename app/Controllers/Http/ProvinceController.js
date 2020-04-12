'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Province = use('App/Models/Province')
const ProvinceRepository = use('App/Repositories/ProvinceRepository')

/**
 * Resourceful controller for interacting with provinces
 */
class ProvinceController {
  /**
   * Show a list of all provinces.
   * GET provinces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * @swagger
   * /v1/provinces:
   *   get:
   *     tags:
   *       - region
   *     summary: Get all province
   *     parameters:
   *       - name: page
   *         description: current page to load (results is paginated)
   *         in: query
   *         required: false
   *         type: uint
   *               
   *     responses:
   *       200:
   *         description: Get top first 10 province
   */
  async index ({ request, transform }) {

    const page = request.input('page', 1)
    const filter = request.input('filter')

    const repo = new ProvinceRepository()
    const items = await repo.index({ page, filter})
    
    return transform.paginate(items, 'ProvinceTransformer')
  }

  /**
   * Render a form to be used for creating a new province.
   * GET provinces/create
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
   * Create/save a new province.
   * POST provinces
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Display a single province.
   * GET provinces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const item = await Province.query().where('province_code', params.id).first()
    return transform.item(item, 'ProvinceTransformer')
  }

  /**
   * Render a form to update an existing province.
   * GET provinces/:id/edit
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
   * Update province details.
   * PUT or PATCH provinces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Delete a province with id.
   * DELETE provinces/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }
}

module.exports = ProvinceController
