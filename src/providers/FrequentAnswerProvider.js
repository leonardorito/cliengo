import React, { createContext, useState, useEffect } from "react";
import cardData from "../constants/cards-data";
import { ANSWERS } from "../constants/local-storage";

export const FrequentAnswerProvider = createContext();

export const FrequentAnswerContext = ({ children }) => {
  const cards = cardData;

  const [answersList, setAnswersList] = useState(cards);

  const changeActive = (answer) => {
    const list = answersList;
    const answerIndex = list.findIndex((el) => el.id === answer.id);
    list[answerIndex] = {
      ...list[answerIndex],
			active: !answer.active,
			description: answer.description
    };
    setAnswersList(list);
    localStorage.setItem(ANSWERS, JSON.stringify(list));
  };

  useEffect(() => {
    if (!localStorage.getItem(ANSWERS)) {
      const answers = JSON.stringify(answersList);
      localStorage.setItem(ANSWERS, answers);
      return;
    }
    const answers = localStorage.getItem(ANSWERS);
    setAnswersList(JSON.parse(answers));
  }, []);
  return (
    <FrequentAnswerProvider.Provider value={{ answersList, changeActive }}>
      {children}
    </FrequentAnswerProvider.Provider>
  );
};
