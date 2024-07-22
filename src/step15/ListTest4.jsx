const students = [
  { id: 1, name: "길자", job: "무직" },
  { id: 2, name: "미자", job: "휴직" },
  { id: 3, name: "순자", job: "군인" },
];

export const ListTest4 = () => {
  return (
    <div>
      <ul>
        {students.map((student, index) => {
          return (
            <li key={student.id}>
              {student.id}. {student.name}({student.job})
            </li>
          );
        })}
        {students[0]}
      </ul>
    </div>
  );
};
