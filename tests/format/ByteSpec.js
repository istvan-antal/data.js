describe("Data.format.Byte", function() {
    var kb = 1024,
        mb = kb * 1024,
        gb = mb * 1024;

    it("should throw exceptions for invalid inputs", function() {
        expect(function () { Data.format.Byte.getByteString(''); }).toThrow();
        expect(function () { Data.format.Byte.getByteString({}); }).toThrow();
        expect(function () { Data.format.Byte.getByteString(false); }).toThrow();
        expect(function () { Data.format.Byte.getByteString(null); }).toThrow();
        expect(function () { Data.format.Byte.getByteString(NaN); }).toThrow();
        expect(function () { Data.format.Byte.getByteString([]); }).toThrow();
    });

    it("should handle 0", function() {
        expect(Data.format.Byte.getByteString(0)).toBe('0B');
    });

    it("should handle gigabytes", function() {
        expect(Data.format.Byte.getByteString(1 * gb)).toBe('1GB');
        expect(Data.format.Byte.getByteString(10 * gb)).toBe('10GB');
    });

    it("should handle megabytes", function() {
        expect(Data.format.Byte.getByteString(1 * mb)).toBe('1MB');
        expect(Data.format.Byte.getByteString(1.5 * mb)).toBe('1.5MB');
    });

    it("should handle gigabytes", function() {
        expect(Data.format.Byte.getByteString(1 * gb)).toBe('1GB');
        expect(Data.format.Byte.getByteString(10 * gb)).toBe('10GB');
    });

    it("should work for negative values", function() {
        expect(Data.format.Byte.getByteString(-1)).toBe('-1B');
        expect(Data.format.Byte.getByteString(-10 * 60)).toBe('-600B');
    });
});
