import React from 'react'
// import { Outlet } from 'react-router-dom'

import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Card, Menu, Col, Row, Statistic } from 'antd';

const { Meta } = Card;


const Home = () => {
  return (
  <>
  <Row>
    <Col xs={12}>
      <Row start="xs">
        <Col xs={6} />
      </Row>
    </Col>
  </Row>


{/* following + for you */}
  <div className="bg-white shadow-md">
      <Menu mode="horizontal" className="alincenter">
        <Menu.Item className="px-1" level={2}>Following</Menu.Item>
        <Menu.Item className="px-1" level={2}>For you</Menu.Item>
        <Menu.Item actions={[<SearchOutlined key="search" />]}></Menu.Item>
      </Menu>
    </div>

{/* ประเภทต่างๆ */}
  <div className="bg-white shadow-md">
      <Menu mode="horizontal" className="flex-flow: row-reverse nowrap">
        <Menu.Item className="px-1">All</Menu.Item>
        <Menu.Item className="px-1">Beauty</Menu.Item>
        <Menu.Item className="px-1">Fasion</Menu.Item>
        <Menu.Item className="px-1">Dining</Menu.Item>
        <Menu.Item className="px-1">Skincare</Menu.Item>
        <Menu.Item className="px-1">Recipes</Menu.Item>

      </Menu>
    </div>




{/* โพสต์แต่ละอัน */}
<div>

  <Card
    style={{
      width: 180,
    }}
    cover={
      <img
      alt="example"
      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    
    actions={[
      <HeartOutlined key="heart" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title="Card title"
      description="This is the description"
      />
      <Row gutter={16}>
        <Col span={24}>
          <Statistic value={1128} prefix={<HeartOutlined />} />
        </Col>
    </Row>
  </Card>

</div>
  </>
  )
}

export default Home