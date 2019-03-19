import React from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';


const VoterId = () => {
  function handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
      <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
      <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
      Dropdown
    </Dropdown.Button>
  )
}

export default VoterId;