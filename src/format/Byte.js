/*
 * data.js
 * 
 * https://github.com/istvan-antal/data.js
 *
 * Licensed under the MIT license.
 */

Data.format.Byte = {
    _units: {
        0: '',
        1: 'K',
        2: 'M',
        3: 'G',
        4: 'T',
        5: 'P',
        6: 'E',
        7: 'Z',
        8: 'Y'
    },
    _lengths: [],
    /**
     * Returns a human readable represenation of the bytes.
     * 
     * @param {number} amount
     * @returns {String}
     */
    getByteString: function (amount) {
        var i;
        
        if (typeof amount !== 'number' || isNaN(amount)) {
            throw new Error('Only numbers are accepted');
        }
        
        i = this._lengths.length - 1;
        
        while (amount / this._lengths[i].size < 1 && i !== 0) {
            i -= 1;
        }
        
        return String(Math.floor(amount / this._lengths[i].size * 100) / 100) + this._units[this._lengths[i].power] + 'B';
    }
};


(function () {
    var i;
    
    for (i in Data.format.Byte._units) {
        if (Data.format.Byte._units.hasOwnProperty(i)) {
            Data.format.Byte._lengths.push({ power: parseInt(i, 10) });
        }
    }
    
    Data.format.Byte._lengths.forEach(function (length) {
        length.size = Math.pow(1024, length.power);
    });
    
    /*
     * Ensure that our keys array is sorted, because the JS runtime does 
     * not guarranty the order on which the for in iterator returns the keys. 
     */
    Data.format.Byte._lengths.sort(function (a, b) {
        if (a.power > b.power) {
            return 1;
        }

        if (a.power < b.power) {
            return -1;
        }

        return 0;
    });
}());