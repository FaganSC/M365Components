//Button/__test__/Tags.test.tsx
import React from "react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Tags from "../Tags";

describe("Tags component", () => {
  it("Tags should render correctly", () => {
    render(
      <Tags
        Tags={[
          { Value: 1, Title: "Tag 1" },
          { Value: 2, Title: "Tag 2" },
        ]}
        onClick={(value: string | number): void => {
          alert(value);
        }}
      />,
    );
    const tags = screen.getByTestId("tags");
    expect(tags).toBeInTheDocument();
  });
});
