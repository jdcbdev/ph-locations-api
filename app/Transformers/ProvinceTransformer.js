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
     // add your transformation object here
    }
  }
}

module.exports = ProvinceTransformer
