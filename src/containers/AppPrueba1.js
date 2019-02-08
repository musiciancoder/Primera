import React, { Component } from 'react';
import UserOutput from './UserOutput';
import UserIntput from './UserIntput';

class AppPrueba1 extends Component{
	state= {username:"Andres"}

  


usernameChangeHandler=(event)=>{
	this.setState(
  {username:event.target.value}
  

    )
}





render(){

return(
<UserOutput
userName={this.state.username}/>

<UserIntput
changed={this.usernameChangeHandler}
currentvalue={this.state.username}
/>


	)



}

}


export default AppPrueba1 