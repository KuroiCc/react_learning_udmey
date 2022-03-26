import React from 'react'
import { Image, Typography } from 'antd'
import { Link } from 'react-router-dom'

interface PropsType {
  id: string | number
  size: 'large' | 'small'
  imageSrc: string
  price: number | string
  title: string
}

export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
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
        <Typography.Text type="danger">¥ {price} 起</Typography.Text>
      </div>
    </Link>
  )
}
