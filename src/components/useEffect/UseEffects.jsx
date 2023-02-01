import React, { useEffect, useState } from 'react';

function UseEffects() {
	const [number, setNumber] = useState(0);

	useEffect(() => {
  console.log('useEffect runs')
	document.title = `${number} clicked  times`
	} )

	console.count('hero mani')

	return <div> {number} 
	<button onClick={()=>setNumber(prev => prev  + 1)} >increase</button>
	</div>
	 
}
export default UseEffects; 