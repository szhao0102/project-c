import { Layout, Menu } from 'antd';
import SY_Layout from './SY_layout.module.css'
import Link from 'next/Link'
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu

export default function SY_layout({children}){
  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider className={SY_Layout.sySider}>
            <Menu 
              style={SY_layout.syMenu}
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="dark"
            >
            <SubMenu key="sub4" title="Navigation Three">
              <Menu.Item key="1"><Link href= "/config?sid=1&feature=item_config">Option 1</Link></Menu.Item>
            </SubMenu>
            </Menu>
          </Sider>
          <Content className = {SY_Layout.syContent}>{children}</Content>
        </Layout>
      </Layout>
    </>
  )
}