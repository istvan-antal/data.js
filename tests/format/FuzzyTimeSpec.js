/* global Data.format.FuzzyTime,describe,it,expect */
describe("Data.format.FuzzyTime", function() {
    /* jshint maxlen: 180 */
    var minute = 60,
        hour = 3600,
        day = 86400,
        week = 604800;

    it("should throw exceptions for invalid inputs", function() {
        expect(function () { Data.format.FuzzyTime.getTimeString(''); }).toThrow();
        expect(function () { Data.format.FuzzyTime.getTimeString({}); }).toThrow();
        expect(function () { Data.format.FuzzyTime.getTimeString(false); }).toThrow();
        expect(function () { Data.format.FuzzyTime.getTimeString(null); }).toThrow();
        expect(function () { Data.format.FuzzyTime.getTimeString(NaN); }).toThrow();
        expect(function () { Data.format.FuzzyTime.getTimeString([]); }).toThrow();
    });

    it("should handle 0", function() {
        expect(Data.format.FuzzyTime.getTimeString(0)).toBe('now');
    });

    it("should pluralize properly", function() {
        expect(Data.format.FuzzyTime.getTimeString(1)).toBe('1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(2)).toBe('2 seconds ago');
    });

    it("should work for negative values", function() {
        expect(Data.format.FuzzyTime.getTimeString(-1)).toBe('1 second before');
        expect(Data.format.FuzzyTime.getTimeString(-10 * 60)).toBe('10 minutes before');
    });

    it("should work properly when it needs to use combined metrics", function() {
        expect(Data.format.FuzzyTime.getTimeString(minute + 1)).toBe('1 minute 1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(2 * minute + 1)).toBe('2 minutes 1 second ago');
    });

    it("should handle weeks", function() {
        expect(Data.format.FuzzyTime.getTimeString(week + minute + 1)).toBe('1 week 1 minute 1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(week + 2 * minute + 1)).toBe('1 week 2 minutes 1 second ago');
    });

    it("should handle cases with 5 metrics", function() {
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + day + hour + minute + 1)).toBe('2 weeks 1 day 1 hour 1 minute 1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 3 * day + 8 * hour + 2 * minute + 1)).toBe('2 weeks 3 days 8 hours 2 minutes 1 second ago');
    });

    it("should support limiting the maxLevels", function() {
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + day + hour + minute + 1, { maxLevels: 5 })).toBe('2 weeks 1 day 1 hour 1 minute 1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 3 * day + 8 * hour + 2 * minute + 1, { maxLevels: 5 })).toBe('2 weeks 3 days 8 hours 2 minutes 1 second ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + day + hour + minute + 1, { maxLevels: 2 })).toBe('2 weeks 1 day ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 3 * day + 8 * hour + 2 * minute + 1, { maxLevels: 2 })).toBe('2 weeks 3 days ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + hour + minute + 1, { maxLevels: 2 })).toBe('2 weeks ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 8 * hour + 2 * minute + 1, { maxLevels: 2 })).toBe('2 weeks ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + hour + minute + 1, { maxLevels: 3 })).toBe('2 weeks ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 8 * hour + 2 * minute + 1, { maxLevels: 3 })).toBe('2 weeks ago');
    });

    it("should support limiting the maxUnits", function() {
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + day + hour + minute + 1, { maxUnits: 5 })).toBe('2 weeks 1 day 1 hour 1 minute 1 second ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 3 * day + 8 * hour + 2 * minute + 1, { maxUnits: 5 })).toBe('2 weeks 3 days 8 hours 2 minutes 1 second ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + day + hour + minute + 1, { maxUnits: 2 })).toBe('2 weeks 1 day ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 3 * day + 8 * hour + 2 * minute + 1, { maxUnits: 2 })).toBe('2 weeks 3 days ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + hour + minute + 1, { maxUnits: 2 })).toBe('2 weeks 1 hour ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 8 * hour + 2 * minute + 1, { maxUnits: 2 })).toBe('2 weeks 8 hours ago');

        expect(Data.format.FuzzyTime.getTimeString(week * 2 + hour + minute + 1, { maxUnits: 3 })).toBe('2 weeks 1 hour 1 minute ago');
        expect(Data.format.FuzzyTime.getTimeString(week * 2 + 8 * hour + 2 * minute + 1, { maxUnits: 3 })).toBe('2 weeks 8 hours 2 minutes ago');
    });
});
