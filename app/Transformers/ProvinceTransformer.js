'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const {build_api_url} = use('App/Helpers')

/**
 * ProvinceTransformer class
 *
 * @class ProvinceTransformer
 * @constructor
 */
class ProvinceTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model, context) {
    return {
     id: model.province_code,
     name: model.description,
     region_code: model.region_code,
     href: build_api_url(context.request, 'provinces/' + model.province_code)
    }
  }
}

module.exports = ProvinceTransformer
