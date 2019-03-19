import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';
import "antd/dist/antd.css";
import { Router, Link } from "@reach/router"

const { SubMenu } = Menu;
const { Meta } = Card;
const {
  Header, Footer, Sider, Content,
} = Layout;
const { Title } = Typography;
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

let VoterInfoDetail = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[ '2' ]}
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
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="inline" style={{ height: '100%' }}>
            <Menu.Item key="1">
              <Link to='/polling-station'>
                Polling Stations
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='state-laws'>
                State Laws
            </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to='how-and-where'>
                Where and How to Vote
            </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to='am-i-registered'>
                Am I Registered?
            </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ background: '#fff' }}>
          <Router>
            <HomeRoute path="/" />
            <Poll path="/polling-station" />
            <Laws path="/state-laws" />
            <HowAndWhere path="/how-and-where" />
            <Register path="/am-i-registered" />
          </Router>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout >
  )
}

let HomeRoute = () => {
  return (
    <>
      <Row gutter={8}>
        <Link to="/polling-station">
          <Col span={12}>
            <PollCard bordered={false} />
          </Col>
        </Link>
        <Link to="/state-laws">
          <Col span={12}>
            <LawsCard bordered={false} />
          </Col>
        </Link>
        <Link to="/how-and-where">
          <Col span={12}>
            <HowAndWhereCard bordered={false} />
          </Col>
        </Link>
        <Link to="/am-i-registered">
          <Col span={12}>
            <RegisterCard bordered={false} />
          </Col>
        </Link>
      </Row>
    </>
  )
}

const PollCard = () => {
  return (
    <>
      <Card hoverable
        display='block'
        style={{ width: "50%", height: "75%" }}
        cover={<img width="100%" height="120" alt="example" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopzDLn-Gb0lxe9lxRXUcIL2c8u1ER8t-ccsHEy9udwMDBslBv" />}>
        <Meta
          description="Find Polling stations near you"
        />
      </Card>
    </>
  )
}

const LawsCard = () => {
  return (
    <>
      <Card hoverable
        style={{ width: "50%", height: "75%" }}
        cover={<img width="100%" height="80" alt="example" src="https://s3.amazonaws.com/systemimage/40882332_Subscription_S.jpg" />}>
        <Meta
          description="Find out your State Laws"
        />
      </Card>
    </>
  )
}

const HowAndWhereCard = () => {
  return (
    <>
      <Card hoverable
        style={{ width: "50%", height: "75%" }}
        cover={<img width="100%" height="80" alt="example" src="http://mediad.publicbroadcasting.net/p/wlrn/files/styles/medium/public/201810/gettyimages-610601528_slide-55133f9e64ea0eb0242c5478c7afb30d03f46a47-s800-c85_0.jpg" />}>
        <Meta
          description="How and Where to vote"
        />
      </Card>
    </>
  )
}

const RegisterCard = () => {
  return (
    <>
      <Card hoverable
        style={{ width: "50%", height: "75%" }}
        cover={<img width="100%" height="80" alt="example" src="http://p1cdn4static.civiclive.com/UserFiles/Servers/Server_178285/Image/Am%20I%20registered%20to%20vote-.jpg" />}>
        <Meta
          description="Register to Vote"
        />
      </Card>
    </>
  )
}


const Poll = () => {
  return (
    <Content>
      <div id="polling-placeholder">
        <h3>Polling Station Placeholder</h3>
      </div>
    </Content>
  )
}

const Laws = () => {
  return (
    <Content>
      <div id="laws-placeholder">
        <h3>Laws Placeholder</h3>
      </div>
    </Content>
  )
}

const HowAndWhere = () => {
  return (
    <Content>
      <div id="how-and-where-placeholder">
        <h3>How And Where Placeholder</h3>
      </div>
    </Content>
  )
}

const Register = () => {
  return (
    <Content>
      <div id="register-placeholder">
        <h3>Register Placeholder</h3>
      </div>
    </Content>
  )
}

export default VoterInfoDetail