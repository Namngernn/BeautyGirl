import React from 'react';
import { Button, Form, Input, ConfigProvider } from 'antd';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { LeftOutlined } from '@ant-design/icons';
import { TinyColor } from '@ctrl/tinycolor';

const colors1 = ['#F3D2C3', '#F2BFCB'];

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const Login = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50">
    <div className="flex justify-start">
      <Button
        icon={<LeftOutlined className="text-gray-700" />}
        className="border-none"
      />
    </div>
    <div className="relative bg-white p-8 rounded-lg shadow-md w-80">
      <h2 className="absolute inset-0 flex justify-center items-center text-center">Welcome Back!</h2>
      <div className="text-center mb-6">
        <div className="text-gray-500">Beautygirl</div>
        <div className="flex justify-center space-x-4 mt-2">
          <Button
            shape="circle"
            icon={<FaFacebookF fill="#F2CAAE" />}
          />
          <Button
            shape="circle"
            icon={<FaGoogle fill="#F2CAAE" />}
          />
          <Button
            shape="circle"
            icon={<FaLinkedinIn fill="#F2CAAE" />}
          />
        </div>
      </div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="space-y-4"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input placeholder="UserName" className=" py-2 px-4 border border-gray-300 rounded" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password placeholder="Password" className="py-2 px-4 border border-gray-300 rounded" />
        </Form.Item>

        <Form.Item>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                  colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                  colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                  lineWidth: 0,
                },
              },
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-gradient-to-r from-pink-400 to-orange-300 border-none rounded"
            >
              Sign In
            </Button>
          </ConfigProvider>
        </Form.Item>
      </Form>
    </div>
  </div>
);

export default Login;
