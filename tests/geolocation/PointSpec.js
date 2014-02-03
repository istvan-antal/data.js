describe("Data.geolocation.Point", function() {

    it("should reject invalid types", function() {
        expect(function () { new Data.geolocation.Point(); }).toThrow();
        expect(function () { new Data.geolocation.Point('', ''); }).toThrow();
        expect(function () { new Data.geolocation.Point({}, {}); }).toThrow();
        expect(function () { new Data.geolocation.Point(false, false); }).toThrow();
        expect(function () { new Data.geolocation.Point([], []); }).toThrow();
        expect(function () { new Data.geolocation.Point(NaN, NaN); }).toThrow();
    });

    it("getters should return the correct values", function() {
        var point = new Data.geolocation.Point(1, 2);

        expect(point.getLatitude()).toEqual(1);
        expect(point.getLongitude()).toEqual(2);

        point = new Data.geolocation.Point(51.498714933833, -0.16011779913771);

        expect(point.getLatitude()).toEqual(51.498714933833);
        expect(point.getLongitude()).toEqual(-0.16011779913771);
    });

    it("should compute the correct distances", function() {
        var a,b;

        a = new Data.geolocation.Point(51.498714933833, -0.16011779913771);
        b = new Data.geolocation.Point(51.529758576628, -0.11556121143262);

        expect(a.getDistanceFrom(b)).toEqual(4.628401522190121);

        a = new Data.geolocation.Point(51.528376683829, -0.12758298126883);
        b = new Data.geolocation.Point(51.529901246664, -0.12442987349065);

        expect(Math.floor(a.getDistanceFrom(b) * 10000) / 10000).toEqual(0.2762);
    });
});
