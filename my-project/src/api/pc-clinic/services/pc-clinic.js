'use strict';

/**
 * pc-clinic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pc-clinic.pc-clinic');
