describe("Validate.parseNumberWithLeadingZeros", function() {

    it("should work for valid inputs", function() {
        expect(Data.validate.Date.parseNumberWithLeadingZeros('01')).toBe(1);
        expect(Data.validate.Date.parseNumberWithLeadingZeros('000')).toBe(0);
        expect(Data.validate.Date.parseNumberWithLeadingZeros('00213')).toBe(213);
    });

    it("should work for invalid inputs", function() {
        expect(isNaN(Data.validate.Date.parseNumberWithLeadingZeros('0x'))).toBe(true);
    });
});

describe("Date validator", function() {

    it("should reject undefined", function() {
        expect(Data.validate.Date.verifyISODateString().isValid).toBe(false);
    });

    it("should reject non-strings", function() {
        expect(Data.validate.Date.verifyISODateString({}).isValid).toBe(false);
    });

    it("should reject empty-strings", function() {
        expect(Data.validate.Date.verifyISODateString().isValid).toBe(false);
    });

    it("should reject invalid-formats", function() {
        expect(Data.validate.Date.verifyISODateString('1st of june').isValid).toBe(false);
        expect(Data.validate.Date.verifyISODateString('10-10-10').isValid).toBe(false);
        expect(Data.validate.Date.verifyISODateString('10-10-2013').isValid).toBe(false);
    });

    it("should approve proper formats", function() {
        expect(Data.validate.Date.verifyISODateString('2001-01-01').isValid).toBe(true);
    });

    it("should reject proper formats but invalid dates", function() {
        expect(Data.validate.Date.verifyISODateString('2001-00-01').isValid).toBe(false);
        expect(Data.validate.Date.verifyISODateString('2001-02-30').isValid).toBe(false);
        expect(Data.validate.Date.verifyISODateString('2001-04-31').isValid).toBe(false);
    });
});
