import React, { useState } from 'react';
import Table1 from '../../components/table/Table'
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, } from '@ant-design/icons';
import { Button, Layout, Menu, Table, theme } from 'antd';
import { useGetBlogsQuery, useGetProfileQuery } from '../../context/api/blogs';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from 'antd/es/locale';

const { Header, Sider, Content } = Layout;

const App = () => {

  const [collapsed, setCollapsed] = useState(false);
  const { data: profile } = useGetProfileQuery()
  console.log(profile);

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { data, isSuccess } = useGetBlogsQuery()

  const handleChangeMenu = (key) => {
    if (key === "manageblog") {
      navigate("/dashboard/manageblog")
      console.log("ok");
    }
    if (key === "manageusers") {
      navigate("/dashboard/manageusers")
    }
  }

  return (
    <Layout className='h-screen'>
      <Sider width={300} trigger={null} collapsible collapsed={collapsed}>
        {/* <div className="demo-logo-vertical">
          <h1>Hero</h1>
        </div> */}
        <Menu
          theme="dark"
          mode="inline"
          autoFocus
          onClick={({ key }) => handleChangeMenu(key)}
          defaultSelectedKeys={['manageblog']}
          selectedKeys={pathname.split("/").slice(-1)[0]}
          items={[
            {
              key: 'manageblog',
              icon: <VideoCameraOutlined />,
              label: 'Blogs',
            },
            profile?.payload.role === "owner"
              ?
              {
                key: 'manageusers',
                icon: <UserOutlined />,
                label: 'Users',
              }
              :
              {}
          ]}
        />
        <Button onClick={()=> {
          localStorage.removeItem("x-auth-token")
          navigate("/login")
          }}>Log out</Button>

      </Sider>
      <Layout>
        <Header

          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className='flex flex-col gap-3'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;