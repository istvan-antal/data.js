/*
 * data.js
 * 
 * https://github.com/istvan-antal/data.js
 *
 * Licensed under the MIT license.
 */

Data.geolocation.Point = function (latitude, longitude) {
    if (typeof latitude !== 'number' || isNaN(latitude)) {
        throw new Error('latitude is not a number.');
    }

    if (typeof longitude !== 'number' || isNaN(longitude)) {
        throw new Error('longitude is not a number.');
    }

    this._latitude = latitude;
    this._longitude = longitude;
};

/**
 * @returns {number}
 */
Data.geolocation.Point.prototype.getLatitude = function () {
    return this._latitude;
};

/**
 * @returns {number}
 */
Data.geolocation.Point.prototype.getLongitude = function () {
    return this._longitude;
};

/**
 * Returns the distance from another point in kilometers.
 * 
 * @param {Data.geolocation.Point} point
 * @returns {number}
 */
Data.geolocation.Point.prototype.getDistanceFrom = function (point) {
    if (!(point instanceof Data.geolocation.Point)) {
        throw new Error('point is of invalid type');
    }

    var acos = Math.acos,
        sin = Math.sin,
        cos = Math.cos,
        aLat = Data.geometry.Angle.getRadiansFromDegrees(this.getLatitude()),
        aLng = Data.geometry.Angle.getRadiansFromDegrees(this.getLongitude()),
        bLat = Data.geometry.Angle.getRadiansFromDegrees(point.getLatitude()),
        bLng = Data.geometry.Angle.getRadiansFromDegrees(point.getLongitude());

    return acos(
            sin(aLat) * sin(bLat) +
            cos(aLat) * cos(bLat) * cos(bLng - aLng)) *
    6371;
};
