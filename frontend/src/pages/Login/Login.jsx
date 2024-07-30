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


const Register = () => (
  <div className=" min-h-screen p-4 " style={{ backgroundColor: "#fdf3f3" }}>

     {/* ปุ่มBack */}
     <Button
      type="text"
      icon={<LeftOutlined className="text-gray-600" />}
      className="self-start"
    />

    {/* icon social */}
    <div>
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-black">Welcome Back!</h2>
        <div className="text-gray-500 mb-4">Beautygirl</div>
        <div className="flex justify-center space-x-4 mb-4">
          <Button shape="circle" icon={<FaFacebookF fill="#F2CAAE" />} />
          <Button shape="circle" icon={<FaGoogle fill="#F2CAAE" />} />
          <Button shape="circle" icon={<FaLinkedinIn fill="#F2CAAE" />} />
        </div>
      </div>
      {/* <div className="text-left text-gray-500 mb-4">Create Account</div>  */}
      <div>
        <Form style={{ paddingTop: '20px' }}
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

         

          {/* ปุ่ม Sign In*/}
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
              <div className="flex justify-center mt-6">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="rounded-full h-12 w-64"
                >
                  Sign In
                </Button>
              </div>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);

export default Register;
