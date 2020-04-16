import React from "react";
import toJson from "enzyme-to-json";
import GuessListPage from "./GuessListPage";

describe(`GuessListPage component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a GuessListPage by default", () => {
		const wrapper = <GuessListPage />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the GuessListPage given props", () => {
		const wrapper = <GuessListPage {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});