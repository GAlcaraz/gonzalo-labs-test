import { render, screen } from "@testing-library/react";
import NumbersTest from "pages/test/[[...number]]";
import "@testing-library/jest-dom";
import React from "react";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Numbers Test Page", () => {
  it("number input has value as passed on serverSideProps", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { number: "5" },
      route: "/test/5",
      pathname: "",
      asPath: "",
    }));

    const component = render(<NumbersTest x="5" words="Five" number="5" />);
    const numInput = component.getByPlaceholderText("");
    expect(numInput).toHaveAttribute("value", "5");
  });
});
