const { body } = require('express-validator');

/**
 *
 * @type {ValidationChain[]}
 */
exports.indexValidator = [body('Title').exists().withMessage('Title is required')];
