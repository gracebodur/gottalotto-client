import React from "react";
import toJson from "enzyme-to-json";
import Winner from "./Winner";

describe(`Winner component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a Winner by default", () => {
		const wrapper = <Winner />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the Winner given props", () => {
		const wrapper = <Winner {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
