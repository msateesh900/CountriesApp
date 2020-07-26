import React, { useState, useEffect } from "react";
import { useSortData } from "./sortTable";
import Modal from "./Modal";

const CountryTable = (props) => {
	const { items, requestSort } = useSortData(props.Countries);

	const [show, setShow] = useState(false);
	const [clickedModalItem, setClickedModalItem] = useState(0);
	const [modalData, setModalData] = useState({});
	const [lang, setLang] = useState([]);
	const [currency, setCurrency] = useState([]);
	const showModal = (id) => {
		setShow(true);
		setClickedModalItem(id);
	};
	const closeModal = () => {
		setShow(false);
	};

	useEffect(() => {
		const index = clickedModalItem;
		let modalData;
		let languageData;
		let currencyData;
		if (items.length === 0) {
			modalData = [];
			languageData = [];
			currencyData = [];
		} else {
			modalData = items[index];
			languageData = modalData.languages;
			currencyData = modalData.currencies;
			console.log(languageData);
		}
		setLang(languageData);
		setCurrency(currencyData);
		setModalData(modalData);
	}, [clickedModalItem, items]);

	return (
		<div className="country-table">
			<div className="header">List of Countries</div>
			<table cellSpacing="0" className="table">
				<thead>
					<tr className="tr">
						<th className="th">
							<div>
								<button className="btn" onClick={() => requestSort("name")}>
									Country
								</button>
							</div>
						</th>
						<th className="th">
							<div>
								<button
									className="btn"
									onClick={() => requestSort("population")}
								>
									Population
								</button>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{items.length === 0 ? (
						<tr style={{ color: "blue" }}>
							<td>
								<h4>NO Country Found...</h4>
							</td>
						</tr>
					) : (
						items.map((item, id) => (
							<tr key={id} className="tr">
								<td className="td tdh">
									<div>
										<img
											src={`${item.flag}`}
											height="20px"
											alt="flag"
											width="20px"
										/>{" "}
										<span onClick={() => showModal(id)}>{item.name}</span>
									</div>
								</td>
								<td className="td">{item.population}</td>
							</tr>
						))
					)}
				</tbody>
			</table>
			{items.length === 0 ? (
				""
			) : (
				<Modal
					handleClose={closeModal}
					show={show}
					currency={currency}
					languages={lang}
					modalData={modalData}
				/>
			)}
		</div>
	);
};
export default CountryTable;
