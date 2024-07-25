import React from 'react';
import { List, Avatar, Button } from 'antd';
import { EllipsisOutlined, ArrowLeftOutlined, LeftOutlined } from '@ant-design/icons';

const data = [
  {
    title: 'New followers',
    time: '15h',
  },
  {
    title: 'New followers',
    time: '15h',
  }
];

const Notifications = () => (
  <div className="h-screen">
    <div>
      <nav className='p-4 flex items-center justify-between' style={{ backgroundColor: '#FFE6E6' }}>
        <Button type="text" icon={<LeftOutlined className="text-gray-600" />} />
        <div className="flex justify-center">
          <span className="text-gray-600">Notification</span>
        </div>
        <div className="w-10"></div>
      </nav>
    </div>

    <div className="bg-white shadow rounded-lg p-4 mt-4">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[<EllipsisOutlined keyห="ellipsis" />]}
            className="bg-white mb-4 rounded-lg p-4 shadow"
          >
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#ea9daa' }}>NM</Avatar>}
              title={<span>{item.title}</span>}
              description={item.time}
            />
          </List.Item>
        )}
      />
    </div>
  </div>
);

export default Notifications;
