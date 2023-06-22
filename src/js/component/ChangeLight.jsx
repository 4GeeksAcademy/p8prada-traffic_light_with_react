import React, { useState } from "react";

const Home = () => {
	const [selectedLight, setSelectedLight] = useState("red");
	return (
		<div className="stick">
			<div className="trafficLightBox">
				<div onClick={() =>setSelectedLight("red")} className={"light red" + ((selectedLight === "red") ? " glowRed" : "")}></div>
				<div onClick={() =>setSelectedLight("yellow")} className={"light yellow" + ((selectedLight === "yellow") ? " glowYellow" : "")}></div>
				<div onClick={() =>setSelectedLight("green")} className={"light green" + ((selectedLight === "green") ? " glowGreen" : "")}></div>
			</div>
		</div>
	);
};

export default Home;