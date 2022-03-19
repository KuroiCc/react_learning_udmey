import React from 'react'
import { Typography, Input, Layout } from 'antd'

import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <div className={styles['app-header']}>
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
