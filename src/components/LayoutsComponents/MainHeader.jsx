import { Button, Image, Layout, theme } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
const { Header } = Layout;
import avater from "../../assets/avater.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const MainHeader = ({ setCollapsed, collapsed }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: "white",
          height: "100px",
        }}
      >
        <div className=" flex justify-between pr-4 bg-white text-black">
          <div className="flex flex-row items-center gap-2">
            <Button
              type="text"
              icon={
                collapsed ? (
                  <RxHamburgerMenu className=" text-black -ml-8 w-8 h-8 " />
                ) : (
                  <RxHamburgerMenu className=" text-black -ml-8 w-8 h-8 " />
                )
              }
              onClick={() => setCollapsed(!collapsed)}
              className=" text-white "
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div>
              <h1 className=" text-[36px]  font-semibold text-[#000000]">
                Dashboard Overview
              </h1>
              {/* <span className=" text-[16px] text-[#000000]">

                You can see all of the overview of your site and app from here.
              </span> */}
            </div>
          </div>

          <div className="flex flex-row items-center  gap-2">
            <div className="mt-6">
              <Link to="/notifications">
                <button>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="50" height="50" rx="25" fill="#0063E5" />
                    <path
                      d="M21.645 33.4437C21.861 34.1824 22.3042 34.8302 22.9086 35.2907C23.513 35.7513 24.2464 36 25 36C25.7536 36 26.487 35.7513 27.0914 35.2907C27.6958 34.8302 28.139 34.1824 28.355 33.4437H21.645ZM16 32.4203H34V29.3503L32 26.2802V21.1635C32 20.2227 31.8189 19.2912 31.4672 18.4221C31.1154 17.553 30.5998 16.7633 29.9497 16.0981C29.2997 15.4329 28.5281 14.9053 27.6788 14.5453C26.8295 14.1853 25.9193 14 25 14C24.0807 14 23.1705 14.1853 22.3212 14.5453C21.4719 14.9053 20.7003 15.4329 20.0503 16.0981C19.4002 16.7633 18.8846 17.553 18.5328 18.4221C18.1811 19.2912 18 20.2227 18 21.1635V26.2802L16 29.3503V32.4203Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Link to="/my-account">
                <button className="flex flex-row items-center gap-2">
                  <Image src={avater} preview={false} />
                  <p className=" text-[16px] font-bold">John Doe</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default MainHeader;
