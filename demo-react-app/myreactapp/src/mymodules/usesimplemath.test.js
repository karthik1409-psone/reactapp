let sm = require('./simplemath');

describe("SIMPLE MATH TESTS", () => {
    // test("should find the square of 5", () => {
    //     let result = sm.Square(5);
    //     expect(result).toBe(25);
    // });
    
    // test("should find the cube of 2", () => {
    //     let result = sm.Cube(2);
    //     expect(result).toBe(8);
    // });

    test("should add 10 and 20", () => {
        let result = sm.Add(10, 20);
        expect(result).toBe(30);
    });

    test("should subtract 100 and 100", () => {
        let result = sm.Subtract(100, 100);
        expect(result).toBe(0);
    });
});