// import logo from './logo.svg';
// import './App.css';

// function App() {
  // return (
// import React, { useState } from "react";
// // import "./styles.css";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [tasks, setTasks] = useState([]);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue) {
//       setTasks([...tasks, inputValue]);
//       setInputValue("");
//     }
//   };

//   return (
//     <div className="container">
//       <h1>To-Do List</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Enter a task"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button className="add-btn" onClick={handleAddTask}>
//           Add
//         </button>
//       </div>
//       <ul className="task-list">
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>

          
        ))}
      </ul>
      <h2>Do some work out!!</h2>
      <h2>Talk to sahil !!</h2>
    </div>
  );
}

