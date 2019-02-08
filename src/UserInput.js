import React from 'react'

const UserInput=(props)=>{
	return(
		<div className="UserInput">
			<input type="text" 
			onChange={props.changed}
			value={props.currentvalue}
			/>





</div>
		)


};

export default UserInput