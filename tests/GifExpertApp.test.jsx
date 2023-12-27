import { useState } from "react";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  const inputValue = "Saitama";

  test("should match the snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  test("Should return the initial state", () => {
    const { result } = renderHook(() => useState([]));
    const [categories] = result.current;
    expect(categories.length).toBe(0);
  });
});
