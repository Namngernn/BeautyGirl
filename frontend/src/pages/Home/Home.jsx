import React from 'react'
// import { Outlet } from 'react-router-dom'

import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Card, Menu, Col, Row, Statistic } from 'antd';

const { Meta } = Card;


const Home = () => {
  return (
  <div>
    {/* <Row>
      <Col xs={12}>
        <Row start="xs">
          <Col xs={6} />
        </Row>
      </Col>
    </Row> */}


{/* following + for you */}
    {/* <div className="bg-white shadow-md">
      <Menu mode="horizontal" className="alincenter">
        <Menu.Item className="px-1" level={2}>Following</Menu.Item>
        <Menu.Item className="px-1" level={2}>For you</Menu.Item>
        <Menu.Item actions={[<SearchOutlined key="search" />]}></Menu.Item>
      </Menu>
    </div> */}

{/* ประเภทต่างๆ */}
    {/* <div className="bg-white shadow-md">
      <Menu mode="horizontal" className="flex-flow: row-reverse nowrap">
        <Menu.Item className="px-1">All</Menu.Item>
        <Menu.Item className="px-1">Beauty</Menu.Item>
        <Menu.Item className="px-1">Fasion</Menu.Item>
        <Menu.Item className="px-1">Dining</Menu.Item>
        <Menu.Item className="px-1">Skincare</Menu.Item>
        <Menu.Item className="px-1">Recipes</Menu.Item>
      </Menu>
    </div> */}




{/* โพสต์แต่ละอัน */}
{/* <div>
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
</div> */}

{/* Navigation */}
    <div className="max-w-md mx-auto bg-white shadow-md">
        <div className="flex justify-between items-center p-4 border-b">
            <button className="text-gray-600">
                <span className="material-icons">qr_code_scanner</span>
            </button>
            <div className="flex space-x-4">
                <button className="text-gray-600 font-semibold">Following</button>
                <button className="text-black font-semibold border-b-2 border-black">For You</button>
            </div>
            <button className="text-gray-600">
                <span className="material-icons">search</span>
            </button>
        </div>
        {/* <!-- Categories --> */}
        <div className="flex overflow-x-auto space-x-4 p-2 border-b">
            <button className="text-black font-semibold">All</button>
            <button className="text-gray-600">Beauty</button>
            <button className="text-gray-600">Fashion</button>
            <button className="text-gray-600">Dining</button>
            <button className="text-gray-600">Skincare</button>
            <button className="text-gray-600">Recipes</button>
        </div>
    </div>

    {/* <!-- Content --> */}
    <div className="max-w-md mx-auto p-4 grid grid-cols-2 gap-4">
        {/* <!-- Post 1 --> */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Post Image" className="w-full h-32 object-cover"/>
            <div className="p-2">
                <h2 className="text-sm font-semibold">how to - ออมทอง 💰✨</h2>
                <p className="text-xs text-gray-500">by yunnitta</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1">
                        <span className="material-icons text-gray-400">favorite</span>
                        <span className="text-xs text-gray-400">558</span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Post 2 --> */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Post Image" className="w-full h-32 object-cover"/>
            <div className="p-2">
                <h2 className="text-sm font-semibold">Babythree V2</h2>
                <p className="text-xs text-gray-500">by earnny</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1">
                        <span className="material-icons text-gray-400">favorite</span>
                        <span className="text-xs text-gray-400">135</span>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Post 3 --> */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Post Image" className="w-full h-32 object-cover"/>
            <div className="p-2">
                <h2 className="text-sm font-semibold">Keen Newport H2 ทำดี ทำถึง ✅</h2>
                <p className="text-xs text-gray-500">by user</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1">
                        <span className="material-icons text-gray-400">favorite</span>
                        <span className="text-xs text-gray-400">0</span>
                    </div>
                </div>
            </div>
        </div>
        {/* Post 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://via.placeholder.com/150" alt="Post Image" className="w-full h-32 object-cover"/>
            <div className="p-2">
                <h2 className="text-sm font-semibold">PandoraลดแรงตอนรับSummer!!</h2>
                <p className="text-xs text-gray-500">by user</p>
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1">
                        <span className="material-icons text-gray-400">favorite</span>
                        <span className="text-xs text-gray-400">0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Bottom Navigation */}
    <div className="fixed bottom-0 inset-x-0 bg-white shadow-md">
        <div className="max-w-md mx-auto flex justify-between items-center p-4">
            <button className="text-gray-600">
                <span className="material-icons">home</span>
            </button>
            <button className="text-gray-600">
                <span className="material-icons">search</span>
            </button>
            <button className="text-yellow-500">
                <span className="material-icons text-3xl">add_circle</span>
            </button>
            <button className="text-gray-600">
                <span className="material-icons">notifications</span>
            </button>
            <button className="text-gray-600">
                <span className="material-icons">person</span>
            </button>
        </div>
    </div>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  </div>
  )
}

export default Home;