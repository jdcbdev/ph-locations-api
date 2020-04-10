'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

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
  transform (model) {
    return {
     // add your transformation object here
    }
  }
}

module.exports = CityTransformer
