import './App.css'

import StudentExample from './components/StudentExamle';
import StudentList from './components/StudentList';

function App() {
  const studentList = [
    {name: "tom", surname: "cruise", age: "35"},
    {name: "tony", surname: "ja", age: "64"},
    {name: "somsak", surname: "siri", age: "65"},
    {name: "tommui", surname: "auiio", age: "26"}
  ]

  return (
      <div className='app'>
         <h1>Vite + React</h1>
         <StudentList studentList={studentList} />
         <StudentExample>Hello World</StudentExample>
      </div>
  );
}

export default App
