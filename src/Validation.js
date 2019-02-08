
import React from 'react'

const validation= (props)=>  {
	let ValidationMesagge='text too long';
	if (props.inputLength<=5){
		ValidationMesagge='text too short';
	}


	return (
		<div >
		   <p>{ValidationMesagge}<p>
		</div>
		);
	
};

export default Validation;