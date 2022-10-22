export class main {
  private GREETING = "Hi";

  constructor(private readonly name: string) {}

  predictor(): string {
    return `${this.GREETING} ${this.name} from Codely TypeScript Basic Skeleton!`;
  }
}
