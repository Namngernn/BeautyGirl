import React from 'react'
import { Link } from 'react-router-dom'
import { PlusOutlined, LeftOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Input, Flex, Tag} from 'antd';

const Settings = () => {
  return (
    <div style={{backgroundColor: '#fdf3f3'}} className='h-screen'>
      {/* ด้านบน */}
      <div>
        <nav className='p-4 flex items-center justify-between' style={{ backgroundColor: '#FFE6E6' }}>
          <Button type="text" icon={<LeftOutlined className="text-gray-600" />} />
          <div className="flex justify-center">
            <span className="text-gray-600">Settings and Privacy</span>
          </div>
          <div className="w-10"></div>
        </nav>
      </div>

        <div className="divide-y divide-gray-200">
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">person</span>
                    <span>Account</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">lock</span>
                    <span>Privacy</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">notifications</span>
                    <span>Push notifications</span>
                </a>
            </div>

            {/* เก็บไว้ก่อน ไว้อทำเพิ่มเติมถ้าต้องใช้ เช่นแชร์โปรไฟล์, tiktok */}
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">share</span>
                    <span>Share profile</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">visibility</span>
                    <span>Content permission</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">tiktok</span>
                    <span>Show content on TikTok</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">help</span>
                    <span>Help Center</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">shield</span>
                    <span>Safety Center</span>
                </a>
            </div>
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">info</span>
                    <span>About Lemon8</span>
                </a>
            </div>

            {/* logout */}
            <div className="p-6">
                <a href="#" className="flex items-center space-x-4">
                    <span className="material-icons">logout</span>
                    <span>Log out</span>
                </a>
            </div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

    </div>
    </div>
  )
}

export default Settings