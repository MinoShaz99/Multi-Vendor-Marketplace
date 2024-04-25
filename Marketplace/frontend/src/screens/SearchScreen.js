import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Form, Pagination } from 'react-bootstrap';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import './CSS/SearchScreen.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const prices = [
  {
    name: '$500 to $1000',
    value: '500-1000',
  },
  {
    name: '$1001 to $2000',
    value: '1001-2000',
  },
  {
    name: '$2001 to $3000',
    value: '2001-3000',
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search); // /search?category=Shirts
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;

    return {
      pathname: '/search',
      search: new URLSearchParams({
        category: filterCategory,
        query: filterQuery,
        price: filterPrice,
        order: sortOrder,
        page: filterPage,
      }).toString(),
    };
  };
  return (
    <Container fluid className="search-screen">
      <Helmet>
        <title>Search Products</title>
      </Helmet>
      <Row>
        <Col md={3} className="filter-sidebar">
          <Card>
            <Card.Body>
              <h4>Department</h4>
              <ul className="filter-list">
                <li>
                  <Link
                    className={'all' === category ? 'active' : ''}
                    to={getFilterUrl({ category: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {categories.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === category ? 'active' : ''}
                      to={getFilterUrl({ category: c })}
                    >
                      {c}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <h4>Price</h4>
              <ul className="filter-list">
                <li>
                  <Link
                    className={'all' === price ? 'active' : ''}
                    to={getFilterUrl({ price: 'all' })}
                  >
                    Any
                  </Link>
                </li>
                {prices.map((p) => (
                  <li key={p.value}>
                    <Link
                      className={p.value === price ? 'active' : ''}
                      to={getFilterUrl({ price: p.value })}
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={9}>
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <Row className="justify-content-between mb-3 align-items-center">
                <Col md={4}>
                  <div>
                    {countProducts === 0 ? 'No' : countProducts} Results
                    {query !== 'all' && ' : ' + query}
                    {category !== 'all' && ' : ' + category}
                    {price !== 'all' && ' : Price ' + price}
                    {(query !== 'all' ||
                      category !== 'all' ||
                      price !== 'all') && (
                      <Button
                        variant="light"
                        onClick={() => navigate('/search')}
                      >
                        <i className="fas fa-times-circle"></i> Clear Filter
                      </Button>
                    )}
                  </div>
                </Col>
                <Col md={8}>
                  <div className="d-flex justify-content-end">
                    <Form.Label
                      htmlFor="sort-by"
                      className="me-2 align-self-center"
                    >
                      Sort by:
                    </Form.Label>
                    <Form.Select
                      id="sort-by"
                      aria-label="Sort by"
                      className="sort-select"
                      value={order}
                      onChange={(e) => {
                        navigate(getFilterUrl({ order: e.target.value }));
                      }}
                    >
                      <option value="newest">Newest Arrivals</option>
                      <option value="lowest">Price: Low to High</option>
                      <option value="highest">Price: High to Low</option>
                      <option value="toprated">Avg. Customer Reviews</option>
                    </Form.Select>
                  </div>
                </Col>
              </Row>
              <Row>
                {products.map((product) => (
                  <Col sm={6} lg={4} className="mb-3" key={product._id}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Pagination className="justify-content-center">
                {[...Array(pages).keys()].map((x) => (
                  <Pagination.Item
                    key={x + 1}
                    active={Number(page) === x + 1}
                    onClick={() => navigate(getFilterUrl({ page: x + 1 }))}
                  >
                    {x + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
