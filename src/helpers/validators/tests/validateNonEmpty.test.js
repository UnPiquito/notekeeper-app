import { describe, expect, test } from "vitest";
import validateNonEmpty from "../validateNonEmpty.js";

describe("validateNonEmpty", () => {
  test("Should return true if string properties are not empty", () => {
    const validNote = {
      id: "vmz45-1715621567899",
      name: "Walk the dog",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateNonEmpty(validNote)).toBe(true);
  });

  test("Should return false if any string property is empty", () => {
    const invalidNote = {
      id: "vmz45-1715621567899",
      name: "",
      description: "Go to the park",
      important: false,
      status: "pending",
      due_date: "5/13/2024",
      created_at: 1715621568041,
    };
    expect(validateNonEmpty(invalidNote)).toBe(false);
  });
});
