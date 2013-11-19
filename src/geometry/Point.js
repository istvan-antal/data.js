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

Data.geometry.Point.prototype.getX = function () {
    return this._x;
};

Data.geometry.Point.prototype.getY = function () {
    return this._y;
};

Data.geometry.Point.prototype.isEqual = function (point) {
    
};