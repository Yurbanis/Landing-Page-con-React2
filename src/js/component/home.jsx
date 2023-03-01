import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Nabvar from "./nav.jsx";
import Jumbotrom from "./jumbotrom.jsx";
import Body from "./body.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Nabvar
			title1="Star Boostrap"
   			title2="About"
    		title3="Services"
    		title4="Contact"/>
			<Jumbotrom 
			title="Jumbotron Example" 
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.."
			label="Call to action"/>
			<Body 
			title="Título de la tarjeta"
			description="Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo."
			label="Primary"
			title1="Título de la tarjeta"
			description1="Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo."
			label1="Primary"
			title2="Título de la tarjeta"
			description2="Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura."
			label2="Primary"
			title3="Título de la tarjeta"
			description3="Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura."
			label3="Primary"/>
			<Footer texto="Copyright @ your website 2023 " />
		</div>
	);
};



export default Home;
