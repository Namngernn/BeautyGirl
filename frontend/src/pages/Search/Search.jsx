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
    <div style={{display: 'flex',justifyContent: 'space-between',}} variant="borderless">
      {title}
      <span variant="borderless">
        <UserOutlined /> {count}
      </span>
    </div>
  ),
});

// optionในช่องเสิร์ช
const options = [
  { options: [renderItem('Beauty', 10000), 
              renderItem('Fashion', 10600), 
              renderItem('Skincare', 10600), 
              renderItem('Dining', 10600), 
              renderItem('Health', 10600)],
  },
];

const Search = () => {  
  return(
    <div style={{backgroundColor: '#fdf3f3'}} className='h-screen'>
      {/* nav ด้านบน */}
      <div>
        <nav className='p-4 flex items-center justify-between' style={{ backgroundColor: '#FFE6E6' }}>
          <Button type="text" icon={<LeftOutlined className="text-gray-600" />} />
          <div className="flex justify-center">
            <span className="text-gray-600">Search</span>
          </div>
          <div className="w-10"></div>
        </nav>
      </div>

      <AutoComplete     
        popupClassName="certain-category-search-dropdown"
        popupMatchSelectWidth={500}
        style={{backgroundColor: '#f6d5da',width: 350,}}
        options={options}
        size="large"
      >
        <Input.Search size="large" placeholder="input here" variant="borderless"/>
      </AutoComplete>


    </div>
  )
   
}
export default Search