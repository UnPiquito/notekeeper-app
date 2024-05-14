import { describe, expect, test } from "vitest";
import validateEnum from "../validateEnum.js";

describe("validateEnum", () => {
  test("Should return true if properties with enum values have correct values", () => {
    const validNote = {
      id: "vmz45-1715621567899",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateEnum(validNote)).toBe(true);
  });

  test("Should return false if properties with enum values have incorrect values", () => {
    const invalidNote = {
      id: "vmz45-1715621567899",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "in_review",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateEnum(invalidNote)).toBe(false);
  });
});
