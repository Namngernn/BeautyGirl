// import React from 'react'
// import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { PlusOutlined, LeftOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Input, Flex, Tag} from 'antd';

// import { ArrowLeftIcon } from '@heroicons/react/solid'

// tag category
const tagsData = ['Beauty', 'Fashion', 'Skincare', 'Dining', 'Health'];

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    // reader.onerror = (error) => reject(error);
  });

const Post = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
  ]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

// tag category
  const [selectedTags, setSelectedTags] = React.useState(['Movies']);
  const categoryChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
};

  return (
    <div>
      {/* bar ด้านบน */}
      <div>
        <nav className='text-center w-full h-50 fixed top-0 left-0 flex items-center justify-center' style={{backgroundColor: "#f6d5da"}}>Post</nav>
      
        <Button icon={<LeftOutlined />} style={{ position: 'absolute', left: 20 }}/> 
      </div>

      {/* โพสต์*/}
      <div className='mt-10'>
        <Upload
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
          {previewImage && (
            <Image
            wrapperStyle={{
              display: 'none',
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(''),
            }}
            src={previewImage}
            />
          )}
      </div>

      {/*    ใส่แคปชั่น */}
      <div>
        <Flex vertical gap={10}>
          <Input size='large' placeholder="Add a catchy heading to get views" variant="borderless" />
          <Input placeholder="Tap to add captions (try some ready ideas)" variant="borderless" />
        </Flex>
      </div>
        
      {/*    category */}
      <div>
        <Flex gap={10} wrap align="center">
          {/* <span>Categories:</span> */}
          {tagsData.map((tag) => (
            <Tag.CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => categoryChange(tag, checked)}
            >
              {tag}
            </Tag.CheckableTag>
          ))}
        </Flex>
      </div>

      {/* ปุ่มโพสต์ */}
      <div>
        <button className="item-center bg-pink300 text-white py-2 px-4 rounded">POST</button>
      </div>

    </div>
  )
}

export default Post