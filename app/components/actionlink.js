import React from 'react'

function ActionLink(props) {
   function handleClick(e) {	   
	 alert(props.txt);
     e.preventDefault();    
   }
 
   return (
		<div className="borderBottom ptb20">
			<a href="#" onClick={handleClick}>
				{props.txt}
			</a>
		</div>
   );
}

export default ActionLink;