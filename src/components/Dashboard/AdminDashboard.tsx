
import React, { useState } from "react";
import { Layout } from "antd";
import AdminSidebar from "./AdminSidebar";
import ManageUsers from "./ManageUsers";
import ViewReports from "./ViewReports";
import ConfirmOrders from "./ConfirmOrders";


const { Header, Content } = Layout;

const AdminDashboard: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState('Dashboard');

    const handleMenuSelect = (menuKey: string) => {
        setSelectedMenu(menuKey);
    };

    const renderContent = () => {
        switch (selectedMenu) {
           
            case 'manage-users':
                return <ManageUsers />;
            case 'view-reports':
                return <ViewReports />;
            case 'confirm-orders':
                return <ConfirmOrders />;
            default:
                return < ManageUsers/>;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ color: 'white', textAlign: 'center' }}>
                <h1>Admin Dashboard</h1>
            </Header>
            <Layout>
                <AdminSidebar onMenuSelect={handleMenuSelect} />
               
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content style={{ margin: 0, minHeight: 280 }}>
                        {renderContent()}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;



// function AdminDashboard (){
//     return(
//         <div>
//               <h2> AdminDashboard</h2>
//         </div>
      
//     );
// };
// export default AdminDashboard;