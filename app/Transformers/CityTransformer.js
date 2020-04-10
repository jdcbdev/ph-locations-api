'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const {build_api_url} = use('App/Helpers')

/**
 * CityTransformer class
 *
 * @class CityTransformer
 * @constructor
 */
class CityTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model, context) {
    return {
      id: model.city_code,
      name: model.description,
      region_code: model.region_code,
      province_code: model.province_code,
      href: build_api_url(context.request, 'cities/' + model.city_code)
    }
  }
}

module.exports = CityTransformer
