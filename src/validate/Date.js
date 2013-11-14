var Data = Data || { validate: {}, geometry: {} };

Data.validate.Date = {
    ISO_DATE_REGEXP: /\d{4}-[01]\d-[0-3]\d/,
    /**
     * Converts the string into a number, stripping out the leading zeros.
     * 
     * @param {String} numberString
     * @returns {Number}
     */
    parseNumberWithLeadingZeros: function (numberString) {
        while (numberString.substr(0, 1) === '0') {
            numberString = numberString.substr(1, numberString.length - 1);
        }
        
        if (!numberString) {
            return 0;
        }
        
        return parseInt(numberString, 10);
    },
    /**
     * Verifies if a date conforms to the ISO format YYY-MM-DD and returns
     * an object that contains the result for the validation.
     * 
     * http://en.wikipedia.org/wiki/ISO_8601
     * 
     * @param {String} dateString
     * @returns {Object}
     */
    verifyISODateString: function(dateString) {
        var parts,
            year,
            isLeapYear,
            month,
            daysInMonth = 0,
            day,
            result = {
            message: '',
            isValid: true
        };
        
        if (!dateString || typeof dateString !== 'string') {
            result.message = 'Please enter a date.';
            result.isValid = false;
            return result;
        }
        
        if (!Data.validate.Date.ISO_DATE_REGEXP.test(dateString)) {
            result.message = 'Please use the YYYY-MM-DD format for entering dates.';
            result.isValid = false;
            return result;
        }
        
        /*
         * If we made it so far, we know that our date string has a correct 
         * format so we could safely parse it.
         */ 
        
        parts = dateString.split('-');
        
        year = Data.validate.Date.parseNumberWithLeadingZeros(parts[0]);
        month = Data.validate.Date.parseNumberWithLeadingZeros(parts[1]);
        day = Data.validate.Date.parseNumberWithLeadingZeros(parts[2]);
        
        isLeapYear = (((year % 4) === 0) && ((year % 100) !== 0) || ((year % 400) === 0));
        
        if (month < 1 || month > 12) {
            result.message = 'Please enter a valid date.';
            result.isValid = false;
            return result;
        }
        
        if (day < 1) {
            result.message = 'Please enter a valid date.';
            result.isValid = false;
            return result;
        }
        
        if (month === 2) {
            daysInMonth = isLeapYear ? 29 : 28;
        } else {
            if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
                daysInMonth = 30;
            }
            else {
                daysInMonth = 31;
            }
        }
        
        if (day > daysInMonth) {
            result.message = 'Please enter a valid date.';
            result.isValid = false;
            return result;
        }
        
        return result;
    }
};