import React, { createContext, useState } from 'react';
import cardData from '../constants/cards-data';

export const FrequentAnswerProvider = createContext();

export const FrequentAnswerContext = ({children}) => {
	const cards = cardData;

	const [answersList, setAnswersList] = useState(cards);
	return (
		<FrequentAnswerProvider.Provider value={{answersList}}>
			{children}
		</FrequentAnswerProvider.Provider>
	)
}
