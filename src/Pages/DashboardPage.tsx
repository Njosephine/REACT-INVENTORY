import AdminDashboard from "../components/Dashboard/AdminDashboard";
import SalesPersonDashboard from "../components/Dashboard/SalesPersonDashboard";
import SupplierDashboard from "../components/Dashboard/SupplierDashboard";

function Dashboard() {
    // Retrieve user role from localStorage
    const userRole = localStorage.getItem("role") || "user"; // Default to employee

  
        const renderDashboard = () => {
            switch (userRole) {
                case 'admin':
                    return <AdminDashboard />;
                case 'SalesPerson':
                    return <SalesPersonDashboard />;
                case 'Supplier':
                    return <SupplierDashboard />;
                default:
                    return <div>Role not recognized. Please contact admin.</div>;
            }
        }

        return(
            <div>
            <h2>Welcome to the Dashboard</h2>
            {renderDashboard()}
        </div>
    );
};

export default Dashboard;