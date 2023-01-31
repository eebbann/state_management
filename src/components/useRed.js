import React from 'react';
import { useReducer } from 'react';
const initialState = {
	loading: false,
	post: {},
	error: false
}; 
const reducer = (state, action) => {
	switch (action.type) {
		case 'start':
			return {
				loading: true,
				post: {},
				error: false
			};
		case 'working':
			return {
				loading: true,
				post: action.payload,
				error: false
			};
			case 'error':
			return {
				error: true,
				loading: false,
				post: {},
				
			};
		default:
			return state;

	}
};
function useRed() {
	const [state , dispatch] = useReducer(reducer, initialState);
   
	useEffect(()=>{
	dispatch({type: 'start'})
	axios.get('').then(response=>{
		dispatch({type: 'working', payload: response?.data})
	}).catch(error=>{
	dispatch({type: 'error', payload: error})
	})
	})
	return (
		<div>{state.loading ? "wait.." : "state.post?.title "}</div>
	);
}

export default useRed;