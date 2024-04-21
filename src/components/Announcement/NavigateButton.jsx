import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavigateButtonWrapper = styled.button`
  color: inherit;
  text-decoration: none;
  border: none;
  background-color: inherit;
  font: inherit;
  padding: 0;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const NavigateButton = ({ route, text }) => {
  const navigate = useNavigate();

  return (
    <NavigateButtonWrapper type="button" onClick={() => { navigate(route)} }>
      {text}
    </NavigateButtonWrapper>
  );
};

NavigateButton.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavigateButton;
