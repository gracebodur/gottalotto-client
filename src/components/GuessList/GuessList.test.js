import React from "react";
import toJson from "enzyme-to-json";
import GuessList from "./GuessList";

describe(`GuessList component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a GuessList by default", () => {
		const wrapper = <GuessList />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the GuessList given props", () => {
		const wrapper = <GuessList {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});