/*
 * data.js
 * 
 * https://github.com/istvan-antal/data.js
 *
 * Licensed under the MIT license.
 */

/**
 * Creates a new Rectangle.
 * 
 * @param {number} x
 * @param {number} y
 * @param {number} width
 * @param {number} height
 */
Data.geometry.Rectangle = function(x, y, width, height) {
    if (typeof x !== 'number' || isNaN(x)) {
        throw new Error('x is not a number.');
    }

    if (typeof y !== 'number' || isNaN(y)) {
        throw new Error('y is not a number.');
    }

    if (typeof width !== 'number' || isNaN(width)) {
        throw new Error('width is not a number.');
    }

    if (typeof height !== 'number' || isNaN(height)) {
        throw new Error('height is not a number.');
    }

    if (width < 0) {
        throw new Error('Invalid width');
    }

    if (height < 0) {
        throw new Error('Invalid height');
    }

    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getX = function() {
    return this._x;
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getY = function() {
    return this._y;
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getWidth = function() {
    return this._width;
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getHeight = function() {
    return this._height;
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getTop = function() {
    return this.getY();
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getLeft = function() {
    return this.getX();
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getBottom = function() {
    return this.getY() + this.getHeight();
};

/**
 * 
 * @returns {number}
 */
Data.geometry.Rectangle.prototype.getRight = function() {
    return this.getX() + this.getWidth();
};

/**
 * Tells if the rectangle is equal to another one.
 * 
 * @param {Data.geometry.Rectangle} rectangle
 * @returns {boolean}
 */
Data.geometry.Rectangle.prototype.isEqual = function(rectangle) {
    return (
            this.getX() === rectangle.getX() &&
            this.getY() === rectangle.getY() &&
            this.getWidth() === rectangle.getWidth() &&
            this.getHeight() === rectangle.getHeight()
            );
};

/**
 * Tells if the rectangle is intersecting with another one.
 * 
 * @param {Data.geometry.Rectangle} rectangle
 * @returns {boolean}
 */
Data.geometry.Rectangle.prototype.isIntersectingWithRectangle = function(rectangle) {
    return !(rectangle.getLeft() > this.getRight() ||
            rectangle.getRight() < this.getLeft() ||
            rectangle.getTop() > this.getBottom() ||
            rectangle.getBottom() < this.getTop());
};

/**
 * Tells if the rectangle is containging another one.
 * 
 * @param {Data.geometry.Rectangle} rectangle
 * @returns {boolean}
 */
Data.geometry.Rectangle.prototype.isContainingRectangle = function(rectangle) {
    return (this.getTop() <= rectangle.getTop() &&
            this.getLeft() <= rectangle.getLeft() &&
            this.getRight() >= rectangle.getRight() &&
            this.getBottom() >= rectangle.getBottom()
           );
};
