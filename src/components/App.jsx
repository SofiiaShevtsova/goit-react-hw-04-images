import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import EmptyList from './EmptyList/EmptyList';
import Button from './Button/Button';
import { getImage } from 'service/Api';

export const App = props => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getImagesAPI = async () => {
      try {
        if (query === '') {
          return;
        }
        setLoading(true);
        const data = await getImage(query, page);
        setImageList(prev => [...prev, ...data]);
      } catch (error) {
        Notify.failure(
          `Sorry, there are no images matching your search query. Please try again.`,
          {
            width: '500px',
            distance: '50px',
            fontSize: '24px',
          }
        );
      } finally {
        setLoading(false);
      }
    };

    getImagesAPI();
  }, [query, page]);

  const querryForFind = newQuery => {
    setQuery(newQuery);
    setPage(1);
    setImageList([]);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div
      style={{
        display: 'block',
        alignItems: `center`,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={querryForFind} />
      <>
        <Loader loading={loading} />
        {imageList && imageList.length > 0 ? (
          <>
            <ImageGallery imageList={imageList} />
            <Button onClick={loadMore} />
          </>
        ) : (
          <EmptyList />
        )}
      </>
    </div>
  );
};
