'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const {build_api_url} = use('App/Helpers')

/**
 * RegionTransformer class
 *
 * @class RegionTransformer
 * @constructor
 */
class RegionTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     id: model.region_code,
     name: model.description
    }
  }
}

module.exports = RegionTransformer
