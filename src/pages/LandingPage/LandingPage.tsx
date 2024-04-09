import React from 'react';

import Home from '../../sections/Home/Home';
import About from '../../sections/About/About';
import AboutApp from '../../sections/AboutApp/AboutApp';
import Services from '../../sections/Services/Services';
import Footer from '../../sections/Footer/Footer';

const LandingPage: React.FC = () => (
	<>
		<Home /> 
		<About />
		<Services />
		<AboutApp />
		<Footer />
	</>
);

export default LandingPage;