import { Main } from '../src/main';

describe("Predictor should", () => {
  it("can be instantiated without throwing errors", () => {
    const randomInstantiator = () => {
      new Main("AAA-001");
    };

    expect(randomInstantiator).not.toThrow(TypeError);
  });
});
