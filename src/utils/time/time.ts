export class Time {
  constructor(private valueInMilliseconds: number) {}

  get value(): number {
    return this.valueInMilliseconds;
  }

  toPrecisionSeconds(): number {
    return this.valueInMilliseconds / 1000;
  }

  toSeconds(): number {
    return Time.toInteger(this.toPrecisionSeconds());
  }

  toPrecisionMinutes(): number {
    return this.toPrecisionSeconds() / 60;
  }

  toMinutes(): number {
    return Time.toInteger(this.toPrecisionMinutes());
  }

  toPrecisionHours(): number {
    return this.toPrecisionMinutes() / 60;
  }

  toHours(): number {
    return Time.toInteger(this.toPrecisionHours());
  }

  toString(): string {
    const hours = Time.prependZero(this.toHours());
    const minutes = this.toMinutes() % 60;
    const seconds = this.toSeconds() % 60;

    return `${hours}:${Time.prependZero(minutes)}:${Time.prependZero(seconds)}`;
  }

  private static toInteger(value: number): number {
    return parseInt(String(value));
  }

  private static prependZero(value: number): string {
    return value >= 10 ? `${value}` : `0${value}`;
  }
}
