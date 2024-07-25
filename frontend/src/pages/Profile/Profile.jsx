import React from 'react';
import { Avatar, Button } from 'antd';
import { SettingOutlined, AppstoreOutlined, BookmarkOutlined, HeartOutlined } from '@ant-design/icons';

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6 relative">
        <div className="absolute top-4 right-4">
          <SettingOutlined className="text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <Avatar size={64} icon={<img src="https://via.placeholder.com/64" alt="avatar" />} />
          <h2 className="text-xl font-semibold mt-2">Antonia Berger</h2>
          <p className="text-gray-500">Fashion model & photographer</p>
          <a href="http://antonia.com" className="text-blue-500">antonia.com</a>
        </div>
        <div className="flex justify-around w-full mt-4">
          <div className="text-center">
            <p className="text-lg font-bold">489</p>
            <p className="text-gray-500">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">95.2k</p>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-bold">763</p>
            <p className="text-gray-500">Following</p>
          </div>
        </div>
        <Button className="mt-4 w-full" type="primary">Edit Profile</Button>
        <div className="flex justify-around w-full mt-4">
          <AppstoreOutlined className="text-2xl text-gray-500" />
          <BookmarkOutlined className="text-2xl text-gray-500" />
          <HeartOutlined className="text-2xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
