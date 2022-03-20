import React from 'react'
import { Divider, Typography, Row, Col } from 'antd'

import styles from './BusinessPartners.module.css'
import image1 from '../../assets/images/microsoft-80658_640.png'
import image2 from '../../assets/images/icon-720944_640.png'
import image3 from '../../assets/images/follow-826033_640.png'
import image4 from '../../assets/images/facebook-807588_640.png'

const companies = [
  { name: 'Microsoft', image: image1 },
  { name: 'YouTube', image: image2 },
  { name: 'Instagram', image: image3 },
  { name: 'Facebook', image: image4 }
]

export const BusinessPartners: React.FC = () => {
  return (
    <div className={styles['business-partners-container']}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作伙伴</Typography.Title>
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {companies.map((company) => (
          <Col span={6} key={company.name}>
            <img
              src={company.image}
              alt={company.name}
              className={styles['business-partners-img']}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
