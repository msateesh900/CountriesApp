import React from "react";
const Modal = (props) => {
	const showHideClassName = props.show
		? "modal display-block"
		: "modal display-none";
	return (
		<div className={showHideClassName}>
			<section className="modal-main">
				<div style={{ alignItems: "center" }}>
					<img
						src={`${props.modalData.flag}`}
						alt="flag"
						height="200px"
						width="200px"
					/>
				</div>

				<h1> Country :- {props.modalData.name}</h1>
				<h1>Capital :- {props.modalData.capital}</h1>

				<div>
					<h1>Language Used</h1>
					<ul>
						{props.languages.map((p, id) => (
							<li key={id}>
								{p.name} <span>{"(" + p.nativeName + ")"}</span>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h1>Currency</h1>
					{props.currency.map((c, key) => (
						<p key={key}>
							{c.name} , ({c.symbol})
						</p>
					))}
				</div>
				<button className="btn" onClick={props.handleClose}>
					Close
				</button>
			</section>
		</div>
	);
};
export default Modal;
