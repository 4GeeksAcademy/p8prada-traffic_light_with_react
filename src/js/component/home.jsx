import React, { useState } from "react";

var colorLights = ["red","yellow","green"];
var position = 0;
var cycle = "off";
var intervalId;


const Home = () => {
	// Set the color of the light
	const [selectedLight, setSelectedLight] = useState("red");
	// Set if purple light is visible or not
	const [visible, setVisible] = useState(false);

	// Show or Hide the purple light and change the "add purple" button behavior
	function purpleLight(){
		var purpleLightButtonBehavior = document.getElementById("btn_purpleLight");

		if(visible === true){
			setVisible(false);
			purpleLightButtonBehavior.innerHTML = "Add Purple";
			purpleLightButtonBehavior.classList.replace("btn-outline-danger", "btn-outline-success");
			colorLights.pop();
		}else{
			setVisible(true);
			purpleLightButtonBehavior.innerHTML = "Remove Purple";
			purpleLightButtonBehavior.classList.replace("btn-outline-success", "btn-outline-danger");
			colorLights.push("purple");
		}
	}

	// Change the color of the light cycle
	function lightsCyle(){
		if(position <= (colorLights.length - 1)){
			setSelectedLight(colorLights[position]);
			position++;
			if(position === (colorLights.length)){position = 0;}
		}
	}

	// Start and stop the light cycle
	function startStopCycle(){
		if(cycle === "off"){
			cycle = "on";
			document.getElementById("btn_startCycle").classList.replace("btn-outline-primary", "btn-outline-danger");
			document.getElementById("btn_startCycle").innerHTML = "Stop Cycle";
			intervalId = setInterval(lightsCyle, 1000);
			lightsCyle();
		}else{
			clearInterval(intervalId);
			cycle = "off";
			position--;
			document.getElementById("btn_startCycle").innerHTML = "Start Cycle";
			document.getElementById("btn_startCycle").classList.replace("btn-outline-danger", "btn-outline-primary");
		}
	}

	return (
		<div className="container-fluid">
            
			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<div className="stick"></div>
				</div>
			</div>	

			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<div className="trafficLightBox">
						<div onClick={() =>setSelectedLight(colorLights[0])} className={"light red" + ((selectedLight === "red") ? " glowRed" : "")}></div>
						<div onClick={() =>setSelectedLight(colorLights[1])} className={"light yellow" + ((selectedLight === "yellow") ? " glowYellow" : "")}></div>
						<div onClick={() =>setSelectedLight(colorLights[2])} className={"light green" + ((selectedLight === "green") ? " glowGreen" : "")}></div>
						{visible && <div onClick={() =>setSelectedLight(colorLights[3])} className={"light purple" + ((selectedLight === "purple") ? " glowPurple" : "")}></div>}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<button typer="button" id="btn_startCycle" className="button btn btn-outline-primary mt-4 mx-2" onClick={() => startStopCycle()}>Start Cycle</button>
					<button typer="button" id="btn_purpleLight" className="button btn btn-outline-success mt-4 mx-2" onClick={() => purpleLight()}>Add Purple</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
