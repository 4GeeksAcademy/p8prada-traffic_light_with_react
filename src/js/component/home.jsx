import React, { useState } from "react";

var colorLights = ["red","yellow","green"];
var position = 0;
var cycle = "off";
var intervalId;

// Show or Hide the purple light and change the "add purple" button behavior
function purpleLight(){
	var btn_PurpleLight = document.getElementById("btn_purpleLight");

	document.getElementById("purpleLight").classList.toggle("d-none");
	
	if(document.getElementById("purpleLight").classList.contains("d-none")){
		btn_PurpleLight.innerHTML = "Add Purple";
		btn_PurpleLight.classList.replace("btn-outline-danger", "btn-outline-success");
		colorLights.pop();
	}else{
		btn_PurpleLight.innerHTML = "Remove Purple";
		btn_PurpleLight.classList.replace("btn-outline-success", "btn-outline-danger");
		colorLights.push("purple");
	}
}




const Home = () => {
	const [selectedLight, setSelectedLight] = useState("red");

	function cycleColor(){
		
		if(position <= (colorLights.length - 1)){
			setSelectedLight(colorLights[position]);
			position++;
		}
	}

	function lightsCycle(){
		if(cycle === "off"){
			cycle = "on";
			while(cycle === "on"){
				intervalId = setInterval(cycleColor,1000);
				position++;
			}

		}else{
			clearInterval(intervalId);
			cycle = "off";
			position = 0;
		}
		
		setTimeout(() => setSelectedLight(colorLights[1]), 1000);
		setTimeout(() => setSelectedLight(colorLights[2]), 2000);
		setTimeout(() => setSelectedLight(colorLights[0]), 4000);
		
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
							<div id="purpleLight" onClick={() =>setSelectedLight(colorLights[3])} className={"light purple d-none" + ((selectedLight === "purple") ? " glowPurple" : "")}></div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12 d-flex justify-content-center">
						<button typer="button" id="btn_startCycle" className="button btn btn-outline-primary mt-4 mx-2" onClick={() => lightsCycle()}>Start Cycle</button>
						<button typer="button" id="btn_purpleLight" className="button btn btn-outline-success mt-4 mx-2" onClick={() => purpleLight()}>Add Purple</button>
					</div>
				</div>
		</div>
	
	);
};



export default Home;
