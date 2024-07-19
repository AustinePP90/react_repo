export const Grading = (props) => {
  if (props.score >= 60) {
    return <p>합격입니다.</p>;
  } else {
    return <p>불합격입니다.</p>;
  }
};
