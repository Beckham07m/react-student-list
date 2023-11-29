
import StudentItem from "./studentitem"


function StudentList( { studentList } ) {
    
    return(
        <div className='student-list'>
        {studentList.map((student) => (
          <StudentItem key={student.name} name={student.name} surname={student.surname} age={student.age} />
        ))}
      </div>  
    )
}

export default StudentList