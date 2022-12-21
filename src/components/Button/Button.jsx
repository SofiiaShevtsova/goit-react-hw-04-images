import PropTypes from 'prop-types';
import StyleList from 'styles/styles';

const { BtnLoadMoreStyle } = StyleList;

const Button = props => {
  return (
    <div>
      <BtnLoadMoreStyle type="button" onClick={props.onClick}>
        Load more
      </BtnLoadMoreStyle>
    </div>
  );
};

Button.propTypes = {
  onClick:PropTypes.func.isRequired,
}

export default Button;
