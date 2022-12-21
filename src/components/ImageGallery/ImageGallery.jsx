import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import StyleList from 'styles/styles';

const { ListOfImagesStyle } = StyleList;

const ImageGallery = props => {
  const [modalImage, setModalImage] = useState(null)

  const onImageClick = ImageBig =>
    setModalImage(ImageBig);

 const closeModal = event => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      setModalImage(null);
    }
  };

    return (
      <>
        {modalImage && (
          <Modal image={modalImage} closeModal={closeModal} />
        )}
        <ListOfImagesStyle>
          {props.imageList.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onClick={onImageClick}
            />
          ))}
        </ListOfImagesStyle>
      </>
    );
  }


ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
