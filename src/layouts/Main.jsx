import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from "../components/LayoutsComponents/Sidebar";
import MainHeader from "../components/LayoutsComponents/MainHeader";

const { Content } = Layout;


const Main = () => {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <div className=" !bg-white" style={{ backgroundColor: "white" }}>
            <Layout className=" !bg-white" style={{ backgroundColor: "white" }}>

                <Sidebar collapsed={collapsed} ></Sidebar>
                <Layout
                    style={{
                        marginLeft: collapsed ? 80 : 250,
                        transition: 'margin-left 0.2s ease',
                    }}
                    className={``}>
                    {/* my header */}
                    <MainHeader setCollapsed={setCollapsed} collapsed={collapsed}></MainHeader>
                    <Content
                        className="p-5 pt-8"
                        style={{}}
                    >
                        {/* my content */}
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default Main;