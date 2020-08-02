import React from "react";
import cardData from "../../../constants/cards-data";
import { mount, shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ModalAnswerContent from "../ModalAnswerContent";
import Button from "../../Button/Button";

it("ModalAnswerContent should render correctly", () => {
  const data = cardData;
  const save = jest.fn();
  const close = jest.fn();
  const wrapper = mount(
    <ModalAnswerContent data={data[0]} save={save} close={close} />
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("Textarea should have description text", () => {
  const data = cardData;
  const save = jest.fn();
  const close = jest.fn();
  const wrapper = mount(
    <ModalAnswerContent data={data[0]} save={save} close={close} />
  );
  expect(wrapper.find("textarea").props().value).toBe(data[0].description);
});

it("Button onClick works", () => {
  const mockCallBack = jest.fn();

  const button = shallow(<Button text="Guardar" onClick={mockCallBack} />);
  button.find("button").simulate("click");
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
