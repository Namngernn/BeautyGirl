import React, { useState } from 'react';
import { PlusOutlined, LeftOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Input, Flex, Tag} from 'antd';

// tag category
const tagsData = ['Beauty', 'Fashion', 'Skincare', 'Dining', 'Health'];

// add picture
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
    <div style={{backgroundColor: '#fdf3f3'}} className='h-screen'>
      {/* nav ด้านบน */}
      <div>
        <nav className='p-4 shadow-sm shadow-black-100' style={{ backgroundColor: '#FFE6E6' }}>
          <Button type="text" icon={<LeftOutlined className="text-gray-600" />} /> 
          <span className="m-20 text-gray-600" >Post</span>
        </nav>
      </div> 

      {/* โพสต์ เพิ่มรูป*/}
      <div className='m-10 flex items-center justify-between'>
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
      <div className='m-7 flex justify-between'>
        <Flex align="flex-start" vertical gap={15} style={{width:'340px'}}>
          <Input size='large' placeholder="Add a catchy heading to get views" variant="borderless" />
          <Input placeholder="Tap to add captions (try some ready ideas)" variant="borderless" />
        </Flex>
      </div>
        
      {/*    category */}
      <div className='pt-7 flex items-center justify-center'>
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
      <div className='pt-10 flex items-center justify-center'>
        <button className="item-center bg-pink300 text-white py-2 px-20 rounded">POST</button>
      </div>

    </div>
  ) 
}

export default Post
