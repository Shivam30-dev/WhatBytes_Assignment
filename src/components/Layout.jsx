import Sidebar from "./Sidebar"; // Sidebar component for navigation
import Header from "./Header"; // Header component for top navigation

/**
 * Layout Component
 * This component serves as the main layout wrapper for the application,
 * providing a consistent header and sidebar structure.
 *
 * @param {Object} props - React props
 * @param {React.ReactNode} props.children - Content to be rendered inside the layout
 * @returns {JSX.Element} Layout structure with header and main content area
 */
const Layout = ({ children }) => {
  return (
    <div className="flex h-full bg-white"> {/* Main layout wrapper */}
      <div className="flex-1 flex flex-col"> {/* Content area wrapper */}
        <Header /> {/* Header section */}
        <main className="flex-1">{children}</main> {/* Main content area */}
      </div>
    </div>
  );
};

export default Layout;

