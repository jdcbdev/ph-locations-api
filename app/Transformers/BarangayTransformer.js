'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

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
  transform (model) {
    return {
     // add your transformation object here
    }
  }
}

module.exports = BarangayTransformer
