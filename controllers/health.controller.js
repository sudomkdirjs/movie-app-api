const methods = require('../helpers/methods');

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.get = async (req, res) => {
    res.send(
        methods.successResponse(
            'Server is healthy!',
            {
                data: Date()
            }
        )
    );
}
