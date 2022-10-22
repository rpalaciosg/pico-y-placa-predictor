import { Main } from "../src/main";

describe("Predictor should", () => {
  it("can be instantiated without throwing errors", () => {
    const randomInstantiator = () => {
      new Main("AAA-001");
    };

    expect(randomInstantiator).not.toThrow(TypeError);
  });

    it("return a string message", () => {
    const randomIntastantiator = new Main("AAA-001");
    const expectedMessage = "Esta placa AAA-001 Si circula!";
    expect(randomIntastantiator.predictor()).toEqual(expectedMessage);
  });
});
