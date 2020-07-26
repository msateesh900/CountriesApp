import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import CountryTable from "./CountryTable/countryTable";

let data = [];

data = [
	{
		name: "china",
		population: 320000000,
		region: "asia"
	},
	{
		name: "india",
		population: 31000000,
		region: "asia"
	}
];
const filterKey = ["name", "region"];
const filterByKey = (inputArr = data, searchTerm) => {
	return inputArr.filter((e) =>
		Object.keys(e).some((key) =>
			filterKey.includes(key) ? e[key].match(searchTerm) : false
		)
	);
};

// it("renders without crashing", () => {
// 	expect(shallow(<App />)).toMatchSnapshot();
// });

// it("Renders Country Table ELement WithOut Crashing", () => {
// 	expect(shallow(<CountryTable Countries={data} />)).toMatchSnapshot();
// });
// it("Testing Filter Input ", () => {
// 	render(<input />);
// 	userEvent.type(screen.getByRole("textbox"), "china");
// 	expect(screen.getByRole("textbox")).toHaveValue("china");
// });
describe("testing for Filtering Countries", () => {
	it("filtering Countries By Name", () => {
		const output = [
			{
				name: "china",
				population: 320000000,
				region: "asia"
			}
		];
		// render(<input />);
		// userEvent.type(screen.getByRole("textbox"), "china");

		expect(filterByKey(data, "china")).toEqual(output);
	});

	it("Empty Search Bar", () => {
		expect(filterByKey(data, "")).toEqual(data);
	});
});
