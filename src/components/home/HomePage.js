import React from 'react';
import 'antd/dist/antd.css';
import { Input, Select, Row, Col, Card } from 'antd';
import { getRepositories } from '../../redux/actions/Repository/repositoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

const options = ['users', 'repositories'];

const HomePage = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('');
  const { repositories } = useSelector((state) => state);
  console.log(repositories.data);

  const handleInput = (e) => {
    const { value } = e.target;
    if (category.length === 0) alert('Choose an Entity Type first');
    if (value.length >= 3) dispatch(getRepositories(value, category));
  };

  return (
    <div>
      <h1
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
      </h1>
      <p
        style={{
          marginTop: '-1rem',
          marginLeft: '0.8rem',
          fontWeight: 'lighter',
        }}
      >
        Search users or repositories below
      </p>
      <Input
        onChange={handleInput}
        style={{ width: '40%', marginRight: '1rem', marginTop: '2rem' }}
        placeholder="Search here"
        maxLength={10}
        allowClear
      ></Input>
      <Select
        onChange={(value) => {
          setCategory(value);
        }}
        placeholder="Choose Entity Type"
        style={{ width: '15%' }}
      >
        {options.map((option, index) => {
          return (
            <Select.Option value={option} key={index}>
              {option}
            </Select.Option>
          );
        })}
      </Select>
      <Row style={{ marginLeft: '3rem' }}>
        {repositories?.data?.length > 0 ? (
          repositories?.data?.map((repository, key) => {
            return category === 'repositories' ? (
              <Col span={8}>
                <Card
                  style={{
                    marginTop: '2rem',
                    marginRight: '1rem',
                    width: 400,
                  }}
                  key={key}
                  title={repository.full_name}
                >
                  <p>Author: {repository.owner.login}</p>
                  <p>Stars: {repository.stargazers_count}</p>
                </Card>
              </Col>
            ) : (
              <Col span={8}>
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
    </div>
  );
};

export default HomePage;
