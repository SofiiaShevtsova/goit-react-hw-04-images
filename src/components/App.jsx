import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import EmptyList from './EmptyList/EmptyList';
import Button from './Button/Button';
import { getImage } from 'service/Api';

export const App = props => {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [imageList, setImageList] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const getImagesAPI = async () => {
    try {
      if (query === '') {
      return
    }
        setLoading(true);
      const data = await getImage(query, page);
        setImageList([...imageList, ...data]);
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
  }

    getImagesAPI()
  }, [query, page])
  
  const querryForFind = newQuery => {
    setQuery(newQuery);
  setPage(1)
  setImageList([])
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
}
  



// import { useEffect, useReducer, useRef } from 'react'

// interface State<T> {
//   data?: T
//   error?: Error
// }

// type Cache<T> = { [url: string]: T }

// // discriminated union type
// type Action<T> =
//   | { type: 'loading' }
//   | { type: 'fetched'; payload: T }
//   | { type: 'error'; payload: Error }

// function useFetch (url?: string, options?: RequestInit): State<T> {
//   const cache = useRef<Cache<T>>({})

//   // Used to prevent state update if the component is unmounted
//   const cancelRequest = useRef<boolean>(false)

//   const initialState: State<T> = {
//     error: undefined,
//     data: undefined,
//   }

//   // Keep state logic separated
//   const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
//     switch (action.type) {
//       case 'loading':
//         return { ...initialState }
//       case 'fetched':
//         return { ...initialState, data: action.payload }
//       case 'error':
//         return { ...initialState, error: action.payload }
//       default:
//         return state
//     }
//   }

//   const [state, dispatch] = useReducer(fetchReducer, initialState)

//   useEffect(() => {
//     // Do nothing if the url is not given
//     if (!url) return

//     cancelRequest.current = false

//     const fetchData = async () => {
//       dispatch({ type: 'loading' })

//       // If a cache exists for this url, return it
//       if (cache.current[url]) {
//         dispatch({ type: 'fetched', payload: cache.current[url] })
//         return
//       }

//       try {
//         const response = await fetch(url, options)
//         if (!response.ok) {
//           throw new Error(response.statusText)
//         }

//         const data = (await response.json()) as T
//         cache.current[url] = data
//         if (cancelRequest.current) return

//         dispatch({ type: 'fetched', payload: data })
//       } catch (error) {
//         if (cancelRequest.current) return

//         dispatch({ type: 'error', payload: error as Error })
//       }
//     }

//     void fetchData()

//     // Use the cleanup function for avoiding a possibly...
//     // ...state update after the component was unmounted
//     return () => {
//       cancelRequest.current = true
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [url])

//   return state
// }

// export default useFetch