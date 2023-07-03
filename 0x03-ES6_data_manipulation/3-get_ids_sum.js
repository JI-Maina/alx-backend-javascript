export default function getStudentIdsSum(students) {
  const initialValue = 0;
  const sum = students.reduce((accumulator, curValue) => curValue.id + accumulator, initialValue);

  return sum;
}
