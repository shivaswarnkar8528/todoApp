import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TaskTable from "./components/TaskTable";



// Custom hook to handle localStorage
function useLocalStorage(key, initialValue) {
  // Get the stored value from localStorage or use the initialValue
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state to store the current value
  const [value, setValue] = useState(initial);

  // Function to update the stored value and the state
  const updateValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, updateValue];
}


function App() {
  const [formData, setFormdata] = useLocalStorage('formData', []);
  return (
    <div className="App">
      <TodoInput formData={formData} setFormdata={setFormdata} />
      <div className="tasktable" >
        <TaskTable formData={formData} setFormdata={setFormdata} />
      </div>
    </div>
  );
}

export default App;
