import React from 'react';
import { Row, Col, Card, Layout, Menu, Anchor } from 'antd';
import "antd/dist/antd.css";
// import { Router, Link } from "@reach/router"

const { Header, Content, Footer } = Layout;

const Head = (props) => (
  <>
    <Header test-id='header' className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">
          Home
          </Menu.Item>
        <Menu.Item key="2">
          Candidates
          </Menu.Item>
        <Menu.Item key="3">
          Voter Info
          </Menu.Item>
      </Menu>
    </Header>
  </>
)

export default Head;