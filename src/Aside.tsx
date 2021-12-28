import React, { useState } from "react";
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
import { FaBars } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri";
import { WiDayCloudyWindy } from "react-icons/wi";
import { BiTask } from "react-icons/bi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FiSearch, FiInfo, FiLogOut, FiUser } from "react-icons/fi";
import { BsCartPlus } from "react-icons/bs";
import { languages } from "./constants";
import LanguageSwitcher from "./language/LanguageSwitcher";
import { ReactComponent as Notification } from "./assets/notification.svg";
import { ReactComponent as Satellite } from "./assets/satellite.svg";

const Aside = ({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
  handleLanguageChange
}) => {
  const intl = useIntl();
  const [selectedTab, setSelectedTab] = useState<string>("Monitoring");
  const notificationCount = 0;
  return (
    <ProSidebar
      image={false}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          className="block"
          style={{
            marginTop: "10px",
            paddingLeft: "25px",
            justifyContent: "left"
          }}
        >
          <FaBars
            style={{ marginLeft: "0px", color: "white" }}
            onClick={() => handleCollapsedChange(!collapsed)}
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={
              <Notification
                className={
                  selectedTab === "Notification"
                    ? "menuIcons selected"
                    : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Notification");
                }}
              />
            }
            suffix={
              <span
                className={`badge ${notificationCount === 0 ? "green" : "red"}`}
              >
                {notificationCount}
              </span>
            }
          >
            {intl.formatMessage({ id: "Notification" })}
          </MenuItem>
          <MenuItem
            icon={
              <Satellite
                className={
                  selectedTab === "Monitoring"
                    ? "menuIcons selected"
                    : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Monitoring");
                }}
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "Monitoring" })}
          </MenuItem>
          <SubMenu
            title={intl.formatMessage({ id: "Weather" })}
            icon={
              <WiDayCloudyWindy
                className={
                  selectedTab === "Weather" ? "menuIcons selected" : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Weather");
                }}
              />
            }
          >
            <MenuItem>{intl.formatMessage({ id: "Forecast" })}</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "Set Alarms" })}</MenuItem>
          </SubMenu>
          <MenuItem
            icon={
              <RiWechatLine
                className={
                  selectedTab === "AskExpert"
                    ? "menuIcons selected"
                    : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("AskExpert");
                }}
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "AskExpert" })}
          </MenuItem>
          <MenuItem
            style={{ display: "none" }}
            icon={
              <BiTask
                className={
                  selectedTab === "Farm Management"
                    ? "menuIcons selected"
                    : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Farm Management");
                }}
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "Farm Management" })}
          </MenuItem>
          <MenuItem
            icon={
              <IoExtensionPuzzleOutline
                className={
                  selectedTab === "Add-ons" ? "menuIcons selected" : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Add-ons");
                }}
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "Add-ons" })}
          </MenuItem>
          <MenuItem
            icon={
              <FiSearch
                className={
                  selectedTab === "Search" ? "menuIcons selected" : "menuIcons"
                }
                onClick={(e: any) => {
                  setSelectedTab("Search");
                }}
              />
            }
          >
            {" "}
            {intl.formatMessage({ id: "Search" })}
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <div
          style={{
            padding: "24px 20px"
          }}
        >
          <LanguageSwitcher
            collapsed={collapsed}
            languages={languages}
            langCode={intl.locale}
            handleChangeLanguage={handleLanguageChange}
          />
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "block"
                }}
              >
                <FiInfo
                  className={
                    selectedTab === "User Guide"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "User Guide" })}</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "block"
                }}
              >
                <BsCartPlus
                  className={
                    selectedTab === "Agrovisio Store"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                  color="white"
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "Agrovisio Store" })}</span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "block"
                }}
              >
                <FiUser
                  className={
                    selectedTab === "User" ? "menuIcons selected" : "menuIcons"
                  }
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "User" })}</span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <span className="footerIconWrapper">
              <span
                style={{
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "block"
                }}
              >
                <FiLogOut
                  className={
                    selectedTab === "Log Out"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                />
              </span>
            </span>
            {collapsed ? null : (
              <span>{intl.formatMessage({ id: "Log Out" })}</span>
            )}
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
