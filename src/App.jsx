import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function Counter() {
	const [count, setCount] = useState(['nas','jen','mok']);
  const [data, setData] = useState("")
	const addUp = () => {
		 setCount([...count,data])
	};

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>

			</div>
			<h1>State</h1>
			<div className="card">
				<ul>{count.map((c)=> (
				<li>{c}</li>
				))}</ul>
				<input  placeholder="name" value={data} onChange={(e)=> setData(e.target.value)}/>
				<button onClick={(addUp)}>
				add
				</button>

			</div>
		</div>
	);
}

function App() {
	return (
		<div>
			<Counter /> 
		</div>
	);

}

export default App;
