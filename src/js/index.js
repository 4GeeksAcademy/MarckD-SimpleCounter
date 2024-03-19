//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import './stylesheet/index.css';


function Cronometro(props){
	return(
		<div className="Cajitas">
			<div className="icono"><i class="bi bi-clock"></i></div>
			<div className="sexto">{props.digitalSix % 10}</div>
			<div className="cinco">{props.digitalFive % 10}</div>
			<div className="cuarto">{props.digitalFour % 10}</div>
			<div className="tercero">{props.digitalThree % 10}</div>
			<div className="segundo">{props.digitalTwo % 10}</div>
			<div className="primero">{props.digitalOne % 10}</div>
		</div>
	);
}

let counter = 0;
setInterval(function(){
	const sexto = Math.floor(counter / 100000)
	const cinco = Math.floor(counter / 10000)
	const cuarto = Math.floor(counter / 1000)
	const tercero = Math.floor(counter / 100)
	const segundo = Math.floor(counter / 10)
	const primero = Math.floor(counter / 1)

	
    ReactDOM.render(<Cronometro digitalOne={primero} digitalTwo={segundo} digitalThree={tercero} digitalFour={cuarto} digitalFive={cinco} digitalSix={sexto} />, document.querySelector("#app"));

	counter++;
},1000);

