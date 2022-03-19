import React from 'react'
import { Typography, Input, Layout, Dropdown, Menu, Button } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'

import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>注册</Button>
            <Button>登陆</Button>
          </Button.Group>
        </div>
      </div>

      {/* main-header */}
      <div>
        <Layout.Header className={styles['main-header']}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            React 旅游网
          </Typography.Title>
          <Input.Search
            className={styles['search-input']}
            placeholder="请输入旅游目的地、主题、或关键字"
          />
        </Layout.Header>
      </div>
    </div>
  )
}
