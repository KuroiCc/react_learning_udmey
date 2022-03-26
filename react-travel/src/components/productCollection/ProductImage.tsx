import React from 'react'
import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface PropsType {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: number | string
  title: string
}

export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
  const { t } = useTranslation()
  return (
    <Link to={`detail/${id}`}>
      {
        // prettier-ignore
        size === 'large'
          ? (<Image src={imageSrc} alt={title} height={285} width={490} preview={false} />)
          : (<Image src={imageSrc} alt={title} height={120} width={240} preview={false} />)
      }
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger">¥ {price} {t('home_page.start_from')}</Typography.Text>
      </div>
    </Link>
  )
}
