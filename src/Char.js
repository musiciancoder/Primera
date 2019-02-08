import React from 'react'

const char= (props)=>  {
	const style={
		display:"inlineBlock",
		textAlign:"center"



	}
	


	return (
		<div style={style} {props.id} onClick={props.clicked}>
		  <p>{props.character}</p>
		  <p>{props.id}</p>
		</div>
		);
	
};

export default char;