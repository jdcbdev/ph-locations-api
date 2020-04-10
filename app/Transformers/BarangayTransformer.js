'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const {build_api_url} = use('App/Helpers')

/**
 * BarangayTransformer class
 *
 * @class BarangayTransformer
 * @constructor
 */
class BarangayTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model, context) {
    return {
      id: model.brgy_code,
      name: model.description,
      region_code: model.region_code,
      province_code: model.province_code,
      city_code: model.city_code,
      href: build_api_url(context.request, 'barangays/' + model.brgy_code)
    }
  }
}

module.exports = BarangayTransformer
