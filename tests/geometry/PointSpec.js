describe("Data.geometry.Point", function() {

    it("should reject invalid types", function() {
        expect(function () { new Data.geometry.Point(); }).toThrow();
        expect(function () { new Data.geometry.Point('', ''); }).toThrow();
        expect(function () { new Data.geometry.Point({}, {}); }).toThrow();
        expect(function () { new Data.geometry.Point(false, false); }).toThrow();
        expect(function () { new Data.geometry.Point([], []); }).toThrow();
        expect(function () { new Data.geometry.Point(NaN, NaN); }).toThrow();
        expect(function () { new Data.geometry.Point(1, NaN); }).toThrow();
    });

    it("getters should return the correct values", function() {
        var point = new Data.geometry.Point(1, 2);

        expect(point.getX()).toBe(1);
        expect(point.getY()).toBe(2);

        point = new Data.geometry.Point(51.498714933833, -0.16011779913771);

        expect(point.getX()).toBe(51.498714933833);
        expect(point.getY()).toBe(-0.16011779913771);
    });

    it("should be able to determine if two points are equal", function() {
        expect((new Data.geometry.Point(1, 2)).isEqual(new Data.geometry.Point(1, 2))).toBe(true);
        expect((new Data.geometry.Point(1, 2)).isEqual(new Data.geometry.Point(1, 4))).toBe(false);
    });

    it("should compute the correct distances", function() {
        var a = new Data.geometry.Point(1, 2),
            b = new Data.geometry.Point(1, 2),
            c = new Data.geometry.Point(2, 2),
            d = new Data.geometry.Point(2, 3);

        expect(a.getDistance(b)).toBe(0);
        expect(a.getDistance(c)).toBe(1);
        expect(a.getDistance(d)).toBe(1.4142135623730951);
        expect(c.getDistance(d)).toBe(1);
    });

});
