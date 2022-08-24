import { PropTypes } from "prop-types";

// export default function Button({color, text}) {
//     console.log(props);
//     return <button className={color}>{text}</button>;
//   }

export default function Button(props) {
  //   console.log(props);
  return (
    <button onClick={props.onClick} className={props.color}>
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// Button.defaultProps = {
//   text: "btn",
// };
