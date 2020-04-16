import React from "react";
import toJson from "enzyme-to-json";
import Guess from "./Guess";

describe(`Guess component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a Guess by default", () => {
		const wrapper = <Guess />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the Guess given props", () => {
		const wrapper = <Guess {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});