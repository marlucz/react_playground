import React from "react";
import { shallow } from "enzyme";
import App from "./App";

it("renders without crashing", () => {
  shallow(<App />);
});

it("includes input", () => {
  const app = shallow(<App />);
  expect(app.containsAllMatchingElements(<input />)).toEqual(true);
});

it("includes UsersList", () => {
  const app = shallow(<App />);
  expect(app.containsAllMatchingElements(<UsersList />)).toEqual(true);
});
