describe("Angle utilities", function() {

    it("should reject invalid types", function() {
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees(); }).toThrow();
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees(''); }).toThrow();
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees({}); }).toThrow();
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees(false); }).toThrow();
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees([]); }).toThrow();
        expect(function () { Data.geometry.Angle.getRadiansFromDegrees(NaN); }).toThrow();
    });
    
    it("should work for known results", function() {
        expect(Data.geometry.Angle.getRadiansFromDegrees(0)).toBe(0);
        expect(Data.geometry.Angle.getRadiansFromDegrees(45)).toBe(1 / 4 * Math.PI);
        expect(Data.geometry.Angle.getRadiansFromDegrees(90)).toBe(1 / 2 * Math.PI);
        expect(Data.geometry.Angle.getRadiansFromDegrees(180)).toBe(1 * Math.PI);
        expect(Data.geometry.Angle.getRadiansFromDegrees(360)).toBe(2 * Math.PI);
    });
});