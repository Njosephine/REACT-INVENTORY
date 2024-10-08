
import { Menu } from "antd";

interface SidebarProps {
    onMenuSelect: (menuKey: string) => void; // Function type that takes a string
}

// Use the props interface in the Sidebar component
const Sidebar: React.FC<SidebarProps> = (props) => {
    // Function to handle menu item clicks
    const handleMenuClick = (menuKey: string) => { // Explicitly defining menuKey as a string
        props.onMenuSelect(menuKey); // Call the passed function to set the selected menu
    };


    return (
        <div style={{ width: 256 }}>
            <Menu
                mode="inline"
                defaultSelectedKeys={['dashboard']}
                style={{ height: '100%', borderRight: 0 }}
            >
                 <Menu.Item key="Dashboard" onClick={() => handleMenuClick('dashboard')}>
                   Dashboard
                </Menu.Item>
                <Menu.Item key="manage-users" onClick={() => handleMenuClick('manage-users')}>
                    Manage Users
                </Menu.Item>
                <Menu.Item key="view-reports" onClick={() => handleMenuClick('view-reports')}>
                    View Reports
                </Menu.Item>
                <Menu.Item key="confirm-orders" onClick={() => handleMenuClick('confirm-orders')}>
                    Confirm Orders
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default Sidebar;
