import React from 'react'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu key={`side-menu-${index}`} icon={<GifOutlined />} title={m.title}>
          {m.subMenu.map((sm, index) => (
            <Menu.SubMenu key={`sub-menu-${index}`} title={sm.title}>
              {sm.subMenu.map((sms, index) => (
                <Menu.Item key={`sub-menu-item-${index}`}>{sms}</Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}
