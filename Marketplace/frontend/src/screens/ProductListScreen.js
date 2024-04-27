import React, { useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Store } from '../Store';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Button, FormControl, Table, Form, Pagination } from 'react-bootstrap';
import styles from './CSS/ProductListScreen.module.css'; // Import your CSS module here

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
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductListScreen() {
  const [{ loading, error, products, pages }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  const { search, pathname } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get('page') || 1;
  const [query, setQuery] = useState('');

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/admin?page=${page}&query=${query}`,
          {
            headers: { Authorization: `Bearer ${userInfo.token}` },
          }
        );

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: 'Failed to fetch products' });
      }
    };
    fetchData();
  }, [page, query, userInfo]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <Form inline className={styles.searchForm}>
        <FormControl
          type="text"
          placeholder="Search products"
          className="mr-sm-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className={styles.pagination}>
            {[...Array(pages).keys()].map((x) => (
              <Pagination.Item
                key={x + 1}
                active={x + 1 === Number(page)}
                onClick={() => sp.set('page', x + 1)}
                className={styles.paginationItem}
              >
                {x + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </>
      )}
    </div>
  );
}
