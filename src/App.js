import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable/countryTable";
import "./app.css";

function App() {
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(result);
	const [searchText, setSearchText] = React.useState("");

	useEffect(() => {
		setLoading(true);
		fetch("https://restcountries.eu/rest/v2/all")
			.then((res) => res.json())
			.then((res) => {
				setResult(res);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		const value = searchText;
		const filterProperty = ["name", "region", "alpha2Code", "alpha3Code"];
		const lowerCaseValue = value.toLowerCase().trim();
		if (lowerCaseValue === "") {
			setData(result);
			console.log(result);
		} else {
			const filteredData = result.filter((item) => {
				return Object.keys(item).some((key) =>
					filterProperty.includes(key)
						? item[key]
								.toString()
								.toLowerCase()
								.includes(lowerCaseValue)
						: false
				);
			});

			setData(filteredData);

			console.log(filteredData);
		}
	}, [searchText, result]);

	if (loading) {
		return <div className="loader"></div>;
	}

	return (
		<div>
			<div className="filter-div">
				<input
					className="input"
					type="text"
					value={searchText}
					placeholder="Search"
					onChange={(e) => setSearchText(e.target.value)}
					name="search-filter"
				/>
			</div>
			<CountryTable Countries={data} />
		</div>
	);
}

export default App;
