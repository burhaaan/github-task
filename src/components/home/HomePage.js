import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row, Col, Card, Typography } from 'antd';
import {
  getRepositories,
  clearState,
  persistCategory,
  persistQuery,
} from '../../redux/actions/Repository/repositoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import lodash from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';

const options = ['users', 'repositories'];
const { Text } = Typography;

const HomePage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [align, setAlign] = useState('middle');
  const { repositories } = useSelector((state) => state.repositories);
  const queryy = useSelector((state) => state.repositories.query);
  const categoryy = useSelector((state) => state.repositories.category);
  const [category, setCategory] = useState(categoryy);
  const [query, setQuery] = useState(queryy);

  useSelector((state) => console.log(state));

  const handleInput = (e) => {
    const { value } = e.target;
    if (value.length > 0) setAlign('top');
    if (value.length === 0) setAlign('middle');

    setQuery(value);
    if (category.length === 0) {
      alert('Choose an Entity Type first');
    }
    if (value.length >= 3) {
      console.log('persist');
      dispatch(getRepositories(value, category, page));
    }
    if (value.length < 3) {
      dispatch(clearState());
    }
  };

  const fetchMoreData = () => {
    console.log('fetching more');
    const pagee = page + 1;
    setPage(pagee);
    setLoading(true);
    dispatch(getRepositories(query, category, pagee));
  };

  return (
    <Row align={align} style={{ height: '100vh' }}>
      <Row align={align} justify="start" style={{ width: '100%' }}>
        <Col span={24} align={align}>
          <Text
            style={{
              marginTop: '3rem',
              fontWeight: 'lighter',
            }}
          >
            <img
              src={'https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg'}
              width={100}
              height={50}
            ></img>
            Github Searcher
          </Text>
        </Col>
        <Col span={24} align={align}>
          <Text
            style={{
              fontWeight: 'lighter',
            }}
          >
            Search users or repositories below
          </Text>
        </Col>
        <Col span={24} align={align}>
          <Input
            defaultValue={query}
            onChange={lodash.debounce(handleInput, 1000)}
            style={{ width: '40%', marginRight: '1rem', marginTop: '2rem' }}
            placeholder="Search here"
            maxLength={10}
            allowClear
          ></Input>
          <Select
            defaultValue={category}
            onChange={(value) => {
              setCategory(value);
              if (query.length > 0)
                dispatch(getRepositories(query, value, page));
            }}
            placeholder="Choose Entity Type"
            style={{ width: '25%' }}
          >
            {options.map((option, index) => {
              return (
                <Select.Option value={option} key={index}>
                  {option}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        <Col align="middle">
          <InfiniteScroll
            dataLength={page * 20}
            next={fetchMoreData}
            hasMore={true}
            loader={loading ? <h6>Loading...</h6> : <></>}
          >
            <Row style={{ marginLeft: '3rem' }}>
              {repositories?.length > 0 ? (
                repositories?.map((repository, key) => {
                  return category === 'repositories' ? (
                    <Col md={8} sm={12}>
                      <Card
                        style={{
                          marginTop: '2rem',
                          marginRight: '1rem',
                          width: 400,
                        }}
                        key={key}
                        title={repository.html_url}
                      >
                        <p>Id: {repository.id}</p>
                        <p>Avatar: {repository.avatar_url}</p>
                      </Card>
                    </Col>
                  ) : (
                    <Col md={8} sm={12}>
                      <Card
                        style={{
                          marginTop: '2rem',
                          marginRight: '1rem',
                          width: 400,
                        }}
                        key={key}
                        title={repository.login}
                      >
                        <p>Profile url: {repository.url}</p>
                        <img
                          src={repository.avatar_url}
                          width={200}
                          height={200}
                        ></img>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <></>
              )}
            </Row>
          </InfiniteScroll>
        </Col>
      </Row>
    </Row>
  );
};

export default HomePage;
