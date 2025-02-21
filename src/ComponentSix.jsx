import PropTypes from "prop-types";

export function ComponentSix({ title, subTitle }) {
  ComponentSix.PropTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  };
  return (
    <>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </>
  );
}

export default ComponentSix;
