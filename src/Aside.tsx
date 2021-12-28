import React from "react";
import { useIntl } from "react-intl";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {
  FaSatellite,
  FaList,
  FaHeart,
  FaInfo,
  FaCartPlus,
  FaUser,
  FaSignout
} from "react-icons/fa";
import { GoSignOut } from "react-icons/go";
import { GrDocumentPerformance } from "react-icons/gr";

import { ReactComponent as Notification } from "./assets/notification.svg";

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange
}) => {
  const intl = useIntl();
  return (
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          className="block"
          style={{ marginTop: "10px", justifyContent: "center" }}
        >
          {collapsed === false ? (
            <span
              className="fa fa-angle-left"
              style={{ marginLeft: "0px", color: "white" }}
              onClick={() => handleCollapsedChange(true)}
            >
              Collapse
            </span>
          ) : (
            <span
              className="fa fa-angle-right"
              style={{
                alignItems: "center",
                marginLeft: "0px",
                color: "white"
              }}
              onClick={() => handleCollapsedChange(false)}
            />
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={
              <Notification
                className="menuIcons"
                onClick={(e: any) => {
                  console.log(e);
                }}
              />
            }
            suffix={<span className="badge red">0</span>}
          >
            {intl.formatMessage({ id: "notification" })}
          </MenuItem>
          <MenuItem
            icon={
              <img
                className="menuIcons"
                alt="notification"
                src={"./assets/satellite.svg"}
                width="30px"
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "weather" })}
          </MenuItem>
          <MenuItem
            icon={<img alt="weather" src={"./assets/Cloud.svg"} width="30px" />}
          >
            {" "}
            {intl.formatMessage({ id: "weather" })}
          </MenuItem>
          <MenuItem color="white" icon={<GrDocumentPerformance />}>
            {" "}
            {intl.formatMessage({ id: "weather" })}
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: "withSuffix" })}
            icon={<FaSatellite />}
          >
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: "withPrefix" })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem>
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "multiLevel" })}
            icon={<FaList />}
          >
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3`}>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3.3`}>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.1{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.2{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.3{" "}
                </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <div
          style={{
            padding: "24px 20px"
          }}
        >
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  height: "35px",
                  width: "35px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "block"
                }}
              >
                <FaCartPlus
                  style={{ width: "100%", height: "100%", padding: "10px" }}
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "notification" })}</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  height: "35px",
                  width: "35px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "block"
                }}
              >
                <FaInfo
                  style={{ width: "100%", height: "100%", padding: "10px" }}
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "notification" })}</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  height: "35px",
                  width: "35px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "block"
                }}
              >
                <FaUser
                  style={{ width: "100%", height: "100%", padding: "10px" }}
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "notification" })}</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  height: "35px",
                  width: "35px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "block"
                }}
              >
                <GoSignOut
                  style={{ width: "100%", height: "100%", padding: "10px" }}
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "notification" })}</span>
            )}
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
