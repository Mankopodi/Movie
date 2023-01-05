'use strict';

/**
 * movie-actor service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-actor.movie-actor');
