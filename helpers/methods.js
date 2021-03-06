/**
 *
 * @param message
 * @param payload
 * @returns {{payload, message, status: boolean}}
 */
exports.successResponse = (message, payload) => {
    return {
        status: true,
        message,
        payload
    }
}

/**
 *
 * @param message
 * @param payload
 * @returns {{message, status: boolean}}
 */
exports.failResponse = (message, payload = null) => {
    let response = {
        status: false,
        message
    }

    if (payload) {
        response.payload = payload;
    }

    return response;
}

/**
 *
 * @type {{message: string, status: boolean}}
 */
exports.notFountResponse = {
    status: false,
    message: "Unable to find the requested resource!"
}

exports.uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);

    return head + tail;
}
