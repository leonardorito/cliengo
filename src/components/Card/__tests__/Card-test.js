import React from "react";
import cardData from "../../../constants/cards-data";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "../Card";

it("Card should render with data", () => {
	const answersList = cardData;
	const handleActive = jest.fn(() => {});
  const tree = mount(
    <Card data={answersList[0]} changedActive={handleActive} />
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it("Card should render correct title", () => {
	const answersList = cardData;
	const handleActive = jest.fn(() => {});
  const tree = mount(
    <Card data={answersList[0]} changedActive={handleActive} />
	);
	const title = tree.find('h5');
  expect(title.text()).toBe(answersList[0].title);
});

it("Card should render correct description", () => {
	const answersList = cardData;
	const handleActive = jest.fn(() => {});
  const tree = mount(
    <Card data={answersList[0]} changedActive={handleActive} />
	);
	const description = tree.find('p');
  expect(description.text()).toBe(answersList[0].description);
});
