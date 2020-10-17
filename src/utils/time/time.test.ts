import { Time } from "./time";

describe("Time should", () => {
  describe("retrieve time with decimals", () => {
    it("in seconds", () => {
      expect(new Time(5500).toPrecisionSeconds()).toBe(5.5);
    });

    it("in minutes", () => {
      expect(new Time(1000 * 60 * 4.5).toPrecisionMinutes()).toBe(4.5);
    });

    it("in hours", () => {
      expect(new Time(1000 * 60 * 60 * 1.2).toPrecisionHours()).toBe(1.2);
    });
  });

  describe("retrieve time ignoring decimals", () => {
    it("in seconds", () => {
      expect(new Time(5500).toSeconds()).toBe(5);
    });

    it("in minutes", () => {
      expect(new Time(1000 * 60 * 4.5).toMinutes()).toBe(4);
    });

    it("in hours", () => {
      expect(new Time(1000 * 60 * 60 * 1.2).toHours()).toBe(1);
    });
  });

  it("retrieve time in hh:mm:ss format", () => {
    expect(new Time(0).toString()).toBe("00:00:00");
    expect(new Time(1000 * 60 * 60 * 48.78).toString()).toBe("48:46:48");
  });
});
