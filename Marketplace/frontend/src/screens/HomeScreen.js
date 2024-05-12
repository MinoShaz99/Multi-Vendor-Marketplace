import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const wallpapers = [
    {
      id: 1,
      url: '/images/wallpaper1.jpg',
      title: 'Artistic Creation',
      description: 'Explore unique pieces from emerging artists',
    },
    {
      id: 2,
      url: '/images/wallpaper2.jpg',
      title: 'Contemporary Art',
      description: 'Discover modern art trends',
    },
    {
      id: 3,
      url: '/images/wallpaper3.jpg',
      title: 'Classic Pieces',
      description: 'Dive into the world of classic art',
    },
  ];
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0);
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWallpaperIndex((currentIndex) =>
        currentIndex === wallpapers.length - 1 ? 0 : currentIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <Helmet>
        <title>Ceylon Art Club</title>
      </Helmet>
      <div className="wallpaper-carousel">
        {wallpapers.map((wallpaper, index) => (
          <div
            key={wallpaper.id}
            className={`wallpaper-item ${
              index === currentWallpaperIndex ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${wallpaper.url})` }}
          >
            <div className="wallpaper-info">
              <h1>{wallpaper.title}</h1>
              <p>{wallpaper.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Card className="product-card">
                  <Product product={product} className="product-card-body" />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default HomeScreen;
