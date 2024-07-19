export const ColoredMessage = (props) => {
  const contentStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    fontSize: "20px",
    paddingLeft: props.paddingLeft,
  };
  return <p style={contentStyle}>{props.message}</p>;
};
