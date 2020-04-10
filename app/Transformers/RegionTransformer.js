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
  transform (model, context) {
    return {
     id: model.region_code,
     name: model.description,
     href: build_api_url(context.request, 'regions/' +model.region_code)
    }
  }
}

module.exports = RegionTransformer
