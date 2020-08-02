import React from "react";
import cardData from "../../../constants/cards-data";
import { FrequentAnswerProvider } from "../../../providers/FrequentAnswerProvider";
import FrequentAnswer from "../FrequentAnswer";
import { mount } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "../../../components/Card/Card";

it("Frequent answer should render with data", () => {
  const answersList = cardData;
  const tree = mount(
    <FrequentAnswerProvider.Provider value={{ answersList }}>
      <FrequentAnswer />
    </FrequentAnswerProvider.Provider>
  );
  expect(toJson(tree)).toMatchSnapshot();
});

it("Frequent Answer cards number should match answers", () => {
	const answersList = cardData;
  const wrapper = mount(
    <FrequentAnswerProvider.Provider value={{ answersList }}>
      <FrequentAnswer />
    </FrequentAnswerProvider.Provider>
  );
  expect(wrapper.find(Card)).toHaveLength(answersList.length);
})

it("Frequent answer should render with no data", () => {
  const answersList = [];
  const tree = mount(
    <FrequentAnswerProvider.Provider value={{ answersList }}>
      <FrequentAnswer />
    </FrequentAnswerProvider.Provider>
  );
  expect(toJson(tree)).toMatchSnapshot();
});
