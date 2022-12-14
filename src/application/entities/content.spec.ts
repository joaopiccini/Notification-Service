import { Content } from "./content";

describe("Notification content", () => {
  it("should be able to create a notification content", () => {
    expect(() => new Content("Você recebeu uma soliticação de amizade.")).toBeTruthy();
  });

  it("should not be able to create a notification content less than 5 characters", () => {
    expect(() => new Content("Test")).toThrow();
  });

  it("should not be able to create a notification content more than 240 characters", () => {
    expect(() => new Content("T".repeat(241))).toThrow();
  });
});
