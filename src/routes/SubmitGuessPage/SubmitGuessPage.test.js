import React from "react";
import toJson from "enzyme-to-json";
import SubmitGuessPage from "./SubmitGuessPage";

describe(`SubmitGuessPage component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a SubmitGuessPage by default", () => {
		const wrapper = <SubmitGuessPage />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the SubmitGuessPage given props", () => {
		const wrapper = <SubmitGuessPage {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
