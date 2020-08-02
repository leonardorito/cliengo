import React from "react";
import cardData from "../../../constants/cards-data";
import { FrequentAnswerProvider } from "../../../providers/FrequentAnswerProvider";
import FrequentAnswer from "../FrequentAnswer";
import renderer from 'react-test-renderer';

it('Frequent answer should render', () => {
  const tree = renderer
    .create(
			<FrequentAnswerProvider.Provider value={{cardData}}>
				<FrequentAnswer />
			</FrequentAnswerProvider.Provider>
		)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
