import React from 'react';

import Login from '../../sections/Login/Login';

const Auth: React.FC = () => (
	<>
        <Login imgUrl={'/happy-woman.svg'} bgColor={'var(--color-violet-50)'} imgAlt={'Login'}></Login>
	</>
);

export default Auth;