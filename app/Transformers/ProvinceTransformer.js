'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

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
  transform (model) {
    return {
     id: model.province_code,
     name: model.description
    }
  }
}

module.exports = ProvinceTransformer
