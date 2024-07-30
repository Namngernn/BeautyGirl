
import React from 'react';
import { Avatar, Button } from 'antd';
import { SettingOutlined, AppstoreOutlined, BookOutlined, HeartOutlined, LeftOutlined } from '@ant-design/icons';

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4 h-screen" style={{ backgroundColor: "#fdf3f3" }}>
      <div className="w-full max-w-sm bg-white shadow-md p-6 relative">

        <div className="flex justify-between items-center">
          <Button
            type="text"
            icon={<LeftOutlined className="text-gray-600" />}
          />
           <p className="text-sm text-gray-500">antonia.berger</p>
          <Button
            type="text"
            icon={<SettingOutlined className="text-gray-500" />}
          />
        </div>

        <div className="flex items-center mt-4">
          <Avatar size={64} icon={<img src="https://via.placeholder.com/64" alt="avatar" />} />
          <div className="ml-4">
            <h2 className="text-xl font-semibold text-left text-gray-800">Antonia Berger</h2>
            <p className="text-gray-500 text-left">Fashion model & photographer</p>
            <a href="http://antonia.com" className="text-blue-500 text-left">antonia.com</a>
          </div>
        </div>

        <div className="flex justify-around w-full mt-8 shadow-md p-6 bg-[#FFE1E1] rounded-lg">
          <div className="text-center">
            <p className="text-lg font-bold">0</p>
            <p className="text-gray-500">Post</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">0</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">0</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>

        <Button className="mt-8 w-56 bg-white border-[#FFC1A4] text-black" type="primary">
          Edit Profile
        </Button>

        <div className="flex justify-around w-full mt-4 border-t border-b border-gray-300 py-2">
          <Button
            type="text"
            icon={<AppstoreOutlined style={{ fontSize: '24px', color: '#472421' }} />}
          />
          <Button
            type="text"
            icon={<BookOutlined style={{ fontSize: '24px', color: '#472421' }} />}
          />
          <Button
            type="text"
            icon={<HeartOutlined style={{ fontSize: '24px', color: '#472421' }} />}
          />

        <Button className="mt-4 w-full" type="primary">Edit Profile</Button>
        <div className="flex justify-around w-full mt-4">
          <AppstoreOutlined className="text-2xl text-gray-500" />
          {/* <BookmarkOutlined className="text-2xl text-gray-500" /> */}
          <HeartOutlined className="text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  </div>  
  );
};

export default Profile;
