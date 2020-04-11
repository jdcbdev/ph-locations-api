'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Barangay = use('App/Models/Barangay')
const BarangayRepository = use('App/Repositories/BarangayRepository')

/**
 * Resourceful controller for interacting with barangays
 */
class BarangayController {
  /**
   * Show a list of all barangays.
   * GET barangays
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   * @swagger
   * /v1/barangays:
   *   get:
   *     tags:
   *       - region
   *     summary: Get all barangay
   *     parameters:
   *       - name: page
   *         description: current page to load (results is paginated)
   *         in: query
   *         required: false
   *         type: uint
   *               
   *     responses:
   *       200:
   *         description: Get top first 10 barangay
   */
  async index ({ request, transform }) {

    const page = request.input('page', 1)
    const filter = request.input('filter')

    const repo = new BarangayRepository()
    const items = await repo.index({ page, filter})

    return transform.paginate(items, 'BarangayTransformer')
  }

  /**
   * Render a form to be used for creating a new barangay.
   * GET barangays/create
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
   * Create/save a new barangay.
   * POST barangays
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Display a single barangay.
   * GET barangays/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, transform }) {
    const item = await Barangay.query().where('brgy_code', params.id).first()
    return transform.item(item, 'BarangayTransformer')
  }

  /**
   * Render a form to update an existing barangay.
   * GET barangays/:id/edit
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
   * Update barangay details.
   * PUT or PATCH barangays/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }

  /**
   * Delete a barangay with id.
   * DELETE barangays/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return response.json({"message": "feature WIP"})
  }
}

module.exports = BarangayController
