import React from 'react'
import { Typography, Input, Layout, Dropdown, Menu, Button } from 'antd'
import { MenuInfo } from 'rc-menu/lib/interface'
import { GlobalOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import { useSelector } from '../../redux/hooks'
import {
  addLanguageActionCreator,
  changeLanguageActionCreator
} from '../../redux/language/actions'
import { Language } from '../../i18n/configs'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const languageList = useSelector((state) => state.languageList)
  const dispatch = useDispatch()
  console.log(dispatch)

  const handleChangeLanguage = (menuInfo: MenuInfo) => {
    const { key } = menuInfo
    if (key === 'new') {
      dispatch(addLanguageActionCreator('新新的语言', 'new-language'))
    } else {
      dispatch(changeLanguageActionCreator(key as Language))
    }
  }

  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>{t('header.slogan')}</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={handleChangeLanguage}>
                {languageList.map((language) => (
                  <Menu.Item key={language.code}>{language.name}</Menu.Item>
                ))}
                <Menu.Item key={'new'}>{t('header.add_new_language')}</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            language
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={() => navigate('register')}>{t('header.register')}</Button>
            <Button onClick={() => navigate('signIn')}>{t('header.signin')}</Button>
          </Button.Group>
        </div>
      </div>

      {/* main-header */}
      <Layout.Header className={styles['main-header']}>
        <span onClick={() => navigate('/')}>
          <img src={logo} alt="logo" className={styles['App-logo']} />
          <Typography.Title level={3} className={styles.title}>
            {t('header.title')}
          </Typography.Title>
        </span>
        <Input.Search
          className={styles['search-input']}
          placeholder="请输入旅游目的地、主题、或关键字"
        />
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']}>
        <Menu.Item key={1}>{t('header.home_page')}</Menu.Item>
        <Menu.Item key={2}>{t('header.weekend')}</Menu.Item>
        <Menu.Item key={3}>{t('header.group')}</Menu.Item>
        <Menu.Item key={4}>{t('header.backpack')}</Menu.Item>
        <Menu.Item key={5}>{t('header.private')}</Menu.Item>
        <Menu.Item key={6}>{t('header.cruise')}</Menu.Item>
        <Menu.Item key={7}>{t('header.hotel')}</Menu.Item>
        <Menu.Item key={8}>{t('header.local')}</Menu.Item>
        <Menu.Item key={9}>{t('header.theme')}</Menu.Item>
        <Menu.Item key={10}>{t('header.custom')}</Menu.Item>
        <Menu.Item key={11}>{t('header.study')}</Menu.Item>
        <Menu.Item key={12}>{t('header.visa')}</Menu.Item>
        <Menu.Item key={13}>{t('header.enterprise')}</Menu.Item>
        <Menu.Item key={14}>{t('header.high_end')}</Menu.Item>
        <Menu.Item key={15}>{t('header.outdoor')}</Menu.Item>
        <Menu.Item key={16}>{t('header.insurance')}</Menu.Item>
      </Menu>
    </div>
  )
}
