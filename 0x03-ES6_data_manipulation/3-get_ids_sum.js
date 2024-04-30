export default function getStudentIdsSum(array) {
  return array.reduce((accum, curr) => accum + curr.id, 0);
}
