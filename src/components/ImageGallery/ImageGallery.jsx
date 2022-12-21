import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import StyleList from 'styles/styles';

const { ListOfImagesStyle } = StyleList;

class ImageGallery extends Component {
  state = {
    imageList: [],
    modalImage: null,
  };
  componentDidMount() {
    this.setState({ imageList: this.props.imageList });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.imageList === this.state.imageList &&
      prevProps.imageList !== this.props.imageList
    ) {
      this.setState({ imageList: this.props.imageList });
      return;
    }
  }

  onImageClick = ImageBig =>
    this.setState({
      modalImage: ImageBig,
    });

  closeModal = event => {
    if (event.target === event.currentTarget || event.key === 'Escape') {
      this.setState({ modalImage: null });
    }
  };

  render() {
    return (
      <>
        {this.state.modalImage && (
          <Modal image={this.state.modalImage} closeModal={this.closeModal} />
        )}
        <ListOfImagesStyle>
          {this.state.imageList.map(image => (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onClick={this.onImageClick}
            />
          ))}
        </ListOfImagesStyle>
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.object),
};

export default ImageGallery;
