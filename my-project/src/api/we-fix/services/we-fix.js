'use strict';

/**
 * we-fix service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::we-fix.we-fix');
