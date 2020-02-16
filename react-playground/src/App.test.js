import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import UsersList from "./UsersList";

it("renders without crashing", () => {
  shallow(<App />);
});

it("includes input", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<input />)).toEqual(true);
});

it("includes UsersList", () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<UsersList />)).toEqual(true);
});
