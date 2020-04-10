'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

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
     // add your transformation object here
    }
  }
}

module.exports = RegionTransformer
