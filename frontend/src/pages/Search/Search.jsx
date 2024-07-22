import React from 'react';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Button } from 'antd';

const renderTitle = (title) => (
  <span>
    {title}
    <a
      style={{
        float: 'right',
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

const Search = () => {  
  return(
    <div>
      {/* nav ด้านบน */}
      <div>
        <nav className='p-4 shadow-sm shadow-black-100' style={{ backgroundColor: '#FFE6E6' }}>
          <Button type="text" icon={<LeftOutlined className="text-gray-600" />} /> 
          <span className="m-20 text-gray-600" >Search</span>
        </nav>
      </div>

      <AutoComplete
        className='flex items-center'
        popupClassName="certain-category-search-dropdown"
        popupMatchSelectWidth={500}
        style={{width: 350,}}
        options={options}
        size="large"
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>


    </div>
  )
   
}
export default Search