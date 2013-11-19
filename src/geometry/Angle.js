/*
 * data.js
 * 
 * https://github.com/istvan-antal/data.js
 *
 * Licensed under the MIT license.
 */


Data.geometry.Angle = {
    DEGREES_TO_RAD: 1 / 180 * Math.PI,
    /**
     * Converts the degrees to radians.
     * 
     * @param {Number} angle
     * @returns {Number}
     */
    getRadiansFromDegrees: function (angle) {
        if (typeof angle !== 'number' || isNaN(angle)) {
            throw new Error('angle is not a number.');
        }
        return angle * Data.geometry.Angle.DEGREES_TO_RAD;
    }
};