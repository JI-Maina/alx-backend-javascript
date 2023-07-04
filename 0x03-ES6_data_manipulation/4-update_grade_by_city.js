export default function updateStudentGradeByCity(students, city, newGrades) {
  const locs = students.filter((student) => student.location === city);

  const newLocs = locs.map((loc) => {
    const newArry = { ...loc };
    newArry.grade = 'N/A';
    for (const newGrade of newGrades) {
      if (newGrade.studentId === loc.id) {
        newArry.grade = newGrade.grade;
      }
    }

    return newArry;
  });

  return newLocs;
}
