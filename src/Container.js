function Container(props) {
  return (
    <div
      className={props.className}
      onClick={() => {
        if (props.text === "+" || props.text === "-" || props.text === "*" || props.text === "/") {
          props.handleClick(props.text);
        } else if (props.text === "AC" || props.text === "Del" || props.text === "=") {
          props.handleClick(props.text);
        } else {
          props.handleClick(parseInt(props.text));
        }
      }}
    >
      {props.text}
    </div>
  );
}

export default Container;
