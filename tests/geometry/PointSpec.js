describe("Data.geometry.Point", function() {

    it("should reject invalid types", function() {
        expect(function () { new Data.geometry.Point(); }).toThrow();
        expect(function () { new Data.geometry.Point('', ''); }).toThrow();
        expect(function () { new Data.geometry.Point({}, {}); }).toThrow();
        expect(function () { new Data.geometry.Point(false, false); }).toThrow();
        expect(function () { new Data.geometry.Point([], []); }).toThrow();
        expect(function () { new Data.geometry.Point(NaN, NaN); }).toThrow();
    });
    
    it("getters should return the correct values", function() {
        var point = new Data.geometry.Point(1, 2);
        
        expect(point.getX()).toEqual(1);
        expect(point.getY()).toEqual(2);
        
        point = new Data.geometry.Point(51.498714933833, -0.16011779913771);
        
        expect(point.getX()).toEqual(51.498714933833);
        expect(point.getY()).toEqual(-0.16011779913771);
    });
    
    it("should compute the correct distances", function() {
    });
    
});