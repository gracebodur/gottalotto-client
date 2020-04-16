import React from "react";
import toJson from "enzyme-to-json";
import WinnersList from "./WinnersList";

describe(`WinnersList component`, () => {
	const props = {
		id: "a",
		name: "test-class-name"
	};

	it("renders a WinnersList by default", () => {
		const wrapper = <WinnersList />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it("renders the WinnersList given props", () => {
		const wrapper = <WinnersList {...props} />;
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
