import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { image, onClick } = props;
  return (
    <li onClick={() => onClick(image.largeImageURL)}>
      <img src={image.webformatURL} alt={image.tags} width="300px" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
