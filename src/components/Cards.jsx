// import propTypes from "prop-types";

export default function Cards({ children, bg = "bg-gray-100" }) {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
}

// Cards.propTypes = {
//   children: propTypes.string,
//   bg: propTypes.string,
// };
