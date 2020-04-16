import React from "react";
import toJson from "enzyme-to-json";
import SubmitGuessForm from "./SubmitGuessForm";

describe(`SubmitGuessForm component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a SubmitGuessForm by default", () => {
		const wrapper = <SubmitGuessForm />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the SubmitGuessForm given props", () => {
		const wrapper = <SubmitGuessForm {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});