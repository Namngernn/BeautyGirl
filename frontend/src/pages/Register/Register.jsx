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
  <div style={{padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' }}>
    <Button
      icon={<LeftOutlined />}
      style={{ position: 'absolute', left: 20 }} 
    />

    <div>
      <div style={{ paddingTop: '20px', textAlign: 'center' }}>
        <h2>Welcome Back!</h2>
      </div>
      <div className="text-center mb-6">
        <div style={{ paddingBottom: '10px', color: 'gray' }}>Beautygirl</div>
        <div style={{ paddingbotttom: '20px' }}>
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
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder="Email" className=" py-2 px-4 border border-gray-300 rounded" />
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

          <Form.Item
            name="dob"
            rules={[
              {
                required: true,
                message: 'Please input your date of birth!',
              },
            ]}
          >
            <Input placeholder="Date of Birth" className="py-2 px-4 border border-gray-300 rounded" />
          </Form.Item>

          <Form.Item
            name="age"
            rules={[
              {
                required: true,
                message: 'Please input your age!',
              },
            ]}
          >
            <Input placeholder="Age" className="py-2 px-4 border border-gray-300 rounded" />
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
                style={{ borderRadius: '20px', height: '40px' }}
              >
                Sign Up
              </Button>
            </ConfigProvider>
          </Form.Item>
        </Form>
      </div>
    </div>
  </div>
);

export default Register;
