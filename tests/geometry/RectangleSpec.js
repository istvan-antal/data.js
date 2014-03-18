describe("Data.geometry.Rectangle", function() {
    /* jshint maxlen: 144440 */
    it("should reject invalid types", function() {
        expect(function () { new Data.geometry.Rectangle(); }).toThrow();
        expect(function () { new Data.geometry.Rectangle('', '', '', ''); }).toThrow();
        expect(function () { new Data.geometry.Rectangle({}, {}, {}, {}); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(false, false, false, false); }).toThrow();
        expect(function () { new Data.geometry.Rectangle([], [], [], []); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(NaN, NaN, NaN, NaN); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(1, NaN, NaN, NaN); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(1, 1, NaN, NaN); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(1, 1, 1, NaN); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(1, 1, -1, 1); }).toThrow();
        expect(function () { new Data.geometry.Rectangle(1, 1, 1, -1); }).toThrow();
    });

    it("getters should return the correct values", function() {
        var rectangle = new Data.geometry.Rectangle(1, 2, 1, 2);

        expect(rectangle.getX()).toBe(1);
        expect(rectangle.getY()).toBe(2);

        rectangle = new Data.geometry.Rectangle(51.498714933833, -0.16011779913771, 0.5, 0.1);

        expect(rectangle.getX()).toBe(51.498714933833);
        expect(rectangle.getY()).toBe(-0.16011779913771);
    });

    it("should tell if rectangles are equal", function() {
        expect((new Data.geometry.Rectangle(0, 0, 0, 0).isEqual(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(true);
        expect((new Data.geometry.Rectangle(0, 0, 1, 0).isEqual(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(false);
    });

    it("should tell if rectangles intersect", function() {
        expect((new Data.geometry.Rectangle(0, 0, 0, 0).isIntersectingWithRectangle(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(true);
        expect((new Data.geometry.Rectangle(1, 2, 3, 4).isIntersectingWithRectangle(new Data.geometry.Rectangle(1, 2, 3, 4)))).toBe(true);
        expect((new Data.geometry.Rectangle(0, 0, 0, 0).isIntersectingWithRectangle(new Data.geometry.Rectangle(1, 0, 0, 0)))).toBe(false);
        expect((new Data.geometry.Rectangle(0, 1, 0, 0).isIntersectingWithRectangle(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(false);
        expect((new Data.geometry.Rectangle(0, 0, 0, 0).isIntersectingWithRectangle(new Data.geometry.Rectangle(-1, -1, 1, 1)))).toBe(true);
    });

    it("should tell if a rectangle contains the other", function() {
        expect((new Data.geometry.Rectangle(0, 0, 0, 0).isContainingRectangle(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(true);
        expect((new Data.geometry.Rectangle(0, 0, 1, 1).isContainingRectangle(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(true);
        expect((new Data.geometry.Rectangle(-1, -1, 2, 2).isContainingRectangle(new Data.geometry.Rectangle(0, 0, 0, 0)))).toBe(true);
        expect((new Data.geometry.Rectangle(-1, -1, 1, 1).isContainingRectangle(new Data.geometry.Rectangle(0, 0, 1, 1)))).toBe(false);
    });
});
