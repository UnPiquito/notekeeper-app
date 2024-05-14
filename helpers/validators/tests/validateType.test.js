import { describe, expect, test } from "vitest";
import validateType from "../validateType.js";

describe("validateType", () => {
  test("Should return true if all properties have correct types", () => {
    const validNote = {
      id: "vmz45-1715621567899",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateType(validNote)).toBe(true);
  });

  test("Should return false if any property has incorrect type", () => {
    const invalidNote = {
      id: "vmz45-1715621567899",
      name: "Walk the dog",
      description: "Go to the park",
      important: "false",
      status: "pending",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateType(invalidNote)).toBe(false);
  });
});
