/*
 * data.js
 * 
 * https://github.com/istvan-antal/data.js
 *
 * Licensed under the MIT license.
 */

Data.geometry.Point = function (x, y) {
    if (typeof x !== 'number' || isNaN(x)) {
        throw new Error('x is not a number.');
    }
    
    if (typeof y !== 'number' || isNaN(y)) {
        throw new Error('y is not a number.');
    }
    
    this._x = x;
    this._y = y;
};

/**
 * Returns the x coordinate of the point.
 * 
 * @returns {number}
 */
Data.geometry.Point.prototype.getX = function () {
    return this._x;
};

/**
 * Returns the y coordinate of the point.
 * 
 * @returns {number}
 */
Data.geometry.Point.prototype.getY = function () {
    return this._y;
};

/**
 * Tells if the two points are equal.
 * 
 * @returns {boolean}
 */
Data.geometry.Point.prototype.isEqual = function (point) {
    
};

/**
 * Returns the distance between two points.
 * 
 * @param {Data.geometry.Point} point
 * @returns {number}
 */
Data.geometry.Point.prototype.getDistance = function (point) {
    return Math.sqrt(Math.pow(point.getX() - this.getX(), 2) + Math.pow(point.getY() - this.getY(), 2));
};