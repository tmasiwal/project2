import LayoutBodyWrapper from "../../components/common/LayoutBodyWrapper";
import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import DashboardHeader from "../../components/header/DashboardHeader";
import DashboardSidebar from "../../components/sidebar/DashboardSidebar" // --------------------------------------------

// --------------------------------------------
const DashboardLayout = ({
  children
}) => {
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);

  const handleCompactToggle = () => setSidebarCompact(!sidebarCompact);

  const handleMobileDrawerToggle = () => setShowMobileSideBar(state => !state); // dashboard body wrapper custom style


  const customStyle = {
    width: `calc(100% - ${sidebarCompact ? "86px" : "280px"})`,
    marginLeft: sidebarCompact ? "86px" : "280px"
  };
  return <Fragment>
      <DashboardSidebar sidebarCompact={sidebarCompact} showMobileSideBar={showMobileSideBar} setSidebarCompact={handleCompactToggle} setShowMobileSideBar={handleMobileDrawerToggle} />

      <LayoutBodyWrapper sx={customStyle}>
        <DashboardHeader setShowSideBar={handleCompactToggle} setShowMobileSideBar={handleMobileDrawerToggle} />

        {children || <Outlet />}
      </LayoutBodyWrapper>
    </Fragment>;
};

export default DashboardLayout;