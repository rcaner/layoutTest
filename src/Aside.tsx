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
// import LanguageSwitcher from "./language/LanguageSwitcher";
import { ReactComponent as Notification } from "./assets/notification.svg";
import { ReactComponent as Satellite } from "./assets/satellite.svg";
import { ReactComponent as IT } from "./assets/it.svg";
import { ReactComponent as TR } from "./assets/tr.svg";
import { ReactComponent as UK } from "./assets/uk.svg";
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
        <div>
          <Menu iconShape="circle">
            <SubMenu
              title={intl.formatMessage({ id: "Language" })}
              icon={
                intl.locale === "tr" ? (
                  <TR className="menuIcons" />
                ) : intl.locale === "en" ? (
                  <UK className="menuIcons" />
                ) : (
                  <IT className="menuIcons" />
                )
              }
            >
              {languages.map((l) => {
                return (
                  <MenuItem
                    key={l.code}
                    onClick={(e: any) => {
                      handleLanguageChange(l.code);
                    }}
                  >
                    {l.name}
                  </MenuItem>
                );
              })}
            </SubMenu>
            <MenuItem
              icon={
                <FiInfo
                  className={
                    selectedTab === "User Guide"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                  onClick={(e: any) => {
                    setSelectedTab("User Guide");
                  }}
                />
              }
            >
              {" "}
              {intl.formatMessage({ id: "User Guide" })}
            </MenuItem>
            <MenuItem
              icon={
                <BsCartPlus
                  className={
                    selectedTab === "Agrovisio Store"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                  onClick={(e: any) => {
                    setSelectedTab("Agrovisio Store");
                  }}
                />
              }
            >
              {" "}
              {intl.formatMessage({ id: "Agrovisio Store" })}
            </MenuItem>
            <MenuItem
              icon={
                <FiUser
                  className={
                    selectedTab === "User" ? "menuIcons selected" : "menuIcons"
                  }
                  onClick={(e: any) => {
                    setSelectedTab("User");
                  }}
                />
              }
            >
              {" "}
              {intl.formatMessage({ id: "User" })}
            </MenuItem>
            <MenuItem
              icon={
                <FiLogOut
                  className={
                    selectedTab === "Log Out"
                      ? "menuIcons selected"
                      : "menuIcons"
                  }
                  onClick={(e: any) => {
                    setSelectedTab("Log Out");
                  }}
                />
              }
            >
              {" "}
              {intl.formatMessage({ id: "Log Out" })}
            </MenuItem>
          </Menu>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
