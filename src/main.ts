export class Main {
  private MESSAGE = "Esta placa";

  constructor(private readonly placa: string) {}

  predictor(): string {
    return `${this.MESSAGE} ${this.placa} Si circula!`
  }
}
