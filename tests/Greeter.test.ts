import { Greeter } from "../src/Greeter";

describe("Greeter", () => {
  it("should greet the person", () => {
    const greeter = new Greeter();
    const to = "John";

    const consoleSpy = jest.spyOn(console, "log");
    greeter.greet(to);

    expect(consoleSpy).toHaveBeenCalledWith(`Hello ${to}`);

    consoleSpy.mockRestore();
  });
});
