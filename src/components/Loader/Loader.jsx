import PropTypes from 'prop-types';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Loader = props => {
  return <>{props.loading ? Loading.dots('Loading') : Loading.remove()}</>;
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader;
