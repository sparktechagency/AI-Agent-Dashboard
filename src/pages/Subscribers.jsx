import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Pagination,
  Space,
  Image,
  Modal,
  notification,
  Select,
  Divider,
  Avatar,
} from "antd";
import {
  SearchOutlined,
  EyeOutlined,
  DeleteOutlined,
  FilterOutlined,
  CarOutlined,
  CalendarFilled,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  DownloadOutlined,
  ArrowLeftOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import avater from "../assets/profile.png";
import carOne from "../assets/car1.png";
import postimg from "../assets/postimg.png";
const { Option } = Select;

const sampleData = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  key: i,
  user: "Md. Abid Hasan",
  email: "example@gmail.com",
  phone: "+1256354789",
  time: "Thursday, March 27, 2025",
  hour: "10:00 PM",
  serviceType: ["SUV", "Compact", "Extra Large", "Truck", "Sports Car"][i % 5],
  serviceDetail: "Exterior",
  carBrand: "BMW",
  carModel: "M5 CS",
  avatar: avater,
  carImage: carOne,
  businessName: "Abid Car Shop",
}));

const Subscribers = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [postmodalVisible, setPostModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [serviceFilter, setServiceFilter] = useState(null);

  const handleSearch = () => {
    const filtered = sampleData.filter(
      (item) =>
        item.user.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (value) => {
    setServiceFilter(value);
    if (value) {
      const filtered = sampleData.filter((item) => item.serviceType === value);
      setFilteredData(filtered);
    } else {
      setFilteredData(sampleData);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEyeClick = (record) => {
    setModalData(record);
    setIsModalVisible(true);
  };

  const handleclosemodal = () => {
    setIsModalVisible(false);
  };

  const handlePostClick = () => {
    setIsModalVisible(false);
    setPostModalVisible(true);
  };

  const handleDeleteClick = () => {
    notification.open({
      message: "Are you sure?",
      description: "Do you really want to delete this booking?",
      type: "warning",
      btn: (
        <Space>
          <Button onClick={() => notification.destroy()} type="text">
            Cancel
          </Button>
          <Button type="primary" danger onClick={() => notification.destroy()}>
            Delete
          </Button>
        </Space>
      ),
    });
  };

  const columns = [
    {
      title: "Sl. No",
      dataIndex: "id",
      render: (_, record) => (
        <Space>
          <svg
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 15L0 1.25L6.875 7.5L11.25 0L15.625 7.5L22.5 1.25L20 15H2.5ZM20 18.75C20 19.5 19.5 20 18.75 20H3.75C3 20 2.5 19.5 2.5 18.75V17.5H20V18.75Z"
              fill="#007BFF"
            />
          </svg>

          <span className="text-[16px] font-medium">{record.id}</span>
        </Space>
      ),
    },
    {
      title: "Name",
      dataIndex: "user",
      render: (_, record) => (
        <Space>
          <Image
            preview={false}
            src={record.avatar}
            alt="avatar"
            width={35}
            height={35}
            className="rounded-full"
          />
          <span className="text-[16px] font-medium">{record.user}</span>
        </Space>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone number",
      dataIndex: "phone",
    },

    {
      title: "Business name",
      dataIndex: "businessName",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            shape="circle"
            icon={
              <svg
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                <path
                  d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z"
                  fill="#F96D10"
                />
              </svg>
            }
            onClick={() => handleEyeClick(record)}
          />
          <Button
            danger
            shape="circle"
            icon={
              <svg
                width="34"
                height="38"
                viewBox="0 0 34 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                <path
                  d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z"
                  fill="#FF5353"
                />
              </svg>
            }
            onClick={handleDeleteClick}
          />
        </Space>
      ),
    },
  ];

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const mockPosts = [
    {
      id: 1,
      authorName: "Md. Abul Hasam",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc placerat feugiat elit quis enim ultrices. Egestas eget pretium ut sagittis nunc. Sapien scelerisque ut tristique ut leo tincidunt. Faucibus ultrices semper faucibus a felis quis dolor lorem. Ultrices dolor quis vehicula quis amet consequat ut nullam mauris elementum elit rhoncus elit consectetur vulputate. Viverra molestie ut augue nec a leo lacus netus elit.",
    },
    {
      id: 2,
      authorName: "Md. Abul Hasam",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc placerat feugiat elit quis enim ultrices. Egestas eget pretium ut sagittis nunc. Sapien scelerisque ut tristique ut leo tincidunt. Faucibus ultrices semper faucibus a felis quis dolor lorem. Ultrices dolor quis vehicula quis amet consequat ut nullam mauris elementum elit rhoncus elit consectetur vulputate. Viverra molestie ut augue nec a leo lacus netus elit.",
    },
    {
      id: 3,
      authorName: "Md. Abul Hasam",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      content:
        "Lorem ipsum dolor sit amet consectetur. Nunc placerat feugiat elit quis enim ultrices. Egestas eget pretium ut sagittis nunc. Sapien scelerisque ut tristique ut leo tincidunt. Faucibus ultrices semper faucibus a felis quis dolor lorem. Ultrices dolor quis vehicula quis amet consequat ut nullam mauris elementum elit rhoncus elit consectetur vulputate. Viverra molestie ut augue nec a leo lacus netus elit.",
    },
  ];
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDownload = (postId) => {
    console.log(`Downloading post ${postId}`);
    // Add your download logic here
  };
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 items-center">
          <Input
            prefix={<SearchOutlined onPressEnter={handleSearch} />}
            placeholder="Search Subscriber"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-72 h-[44px] rounded-full border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary outline-none px-4 py-2"
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        className="bg-white rounded-md"
      />

      <div className="mt-4 flex justify-end">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredData.length}
          onChange={handlePageChange}
        />
      </div>

      {/* Modal for viewing booking details */}
      <Modal
        style={{
          top: 5,
        }}
        title={
          <div className="text-lg font-semibold  bg-primary text-white w-full text-center p-2 absolute top-0 left-0 rounded-t-md">
            User details
          </div>
        }
        visible={isModalVisible}
        onCancel={handleclosemodal}
        footer={null}
        width={800}
      >
        <div className="flex flex-col gap-6">
          {/* User Info Section */}
          <div className="flex flex-col gap-2 mt-8 border border-[#0000001e] rounded-md p-2">
            <div className="flex flex-row items-center justify-center text-center">
              <Image
                src={avater}
                alt="avater"
                className="w-[150px] h-[150px] rounded-full bg-gray-600"
              />
            </div>
            <h2 className="text-2xl font-bold text-center">ML-ARd-Hssan</h2>
            <div className="flex items-center gap-2 justify-center">
              <span>+1584895823</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span>exemple@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center text-[#888888]">
              <span>Member since Q1-Q1-2025</span>
            </div>
          </div>

          {/* Payment Section */}
          <div className="   border border-[#0000001c] rounded-md p-4">
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-medium text-[#000000]">Paid:</h3>
              <strong className="text-[30px] text-[#000000] font-semibold">
                $199.00
              </strong>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-medium text-[#000000]">
                Last payment:
              </h3>
              <strong className="text-[20px] font-normal text-[#000000]">
                05-04-2025
              </strong>
            </div>
            <div className="flex flex-row items-center justify-between">
              <h3 className="text-lg font-medium text-[#000000]">
                Next payment:
              </h3>
              <strong className="text-[20px] font-normal text-[#000000]">
                05-05-2025
              </strong>
            </div>
          </div>

          {/* Business Details Section */}
          <h2 className="text-xl font-medium  ">Business details</h2>

          <div className="border border-[#0000001c] rounded-md p-4">
            <div className="">
              <div className="flex flex-row items-center justify-between">
                <h3 className="font-semibold">Name:</h3>
                <p>Coaching</p>
              </div>
            </div>

            <div className="mt-4 flex flex-row items-center justify-between ">
              <h3 className="font-semibold">Description:</h3>
              <p className=" max-w-sm text-[18px] text-normal text-[#000000]">
                Lorem ipsa m dolor sit amet consecutiu. Ett fringilla
                peleritesque non eget utiamcorper sed. Uitholes feugiat atmurc
                habitant lectius. Mauris egestae et sitnunc turpis dolor
                egestas. Nales,uada ancu orci sed eu massa.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between mt-4">
              <h3 className="font-semibold">Industry:</h3>
              <p>Industry.1</p>
            </div>

            <div className="flex flex-row items-center justify-between">
              <h3 className="font-semibold">Location:</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Footer Button */}
          <Button
            onClick={handlePostClick}
            type="primary"
            icon={
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.843521 10.2425L9.03606 2.05001L2.6721 2.05001L2.6721 0.0503132H12.45L12.45 9.82818L10.4503 9.82818L10.4503 3.46422L2.25773 11.6568L0.843521 10.2425Z"
                  fill="white"
                />
              </svg>
            }
            className="max-w-lg mx-auto h-[47px] w-[163px] text-[20px] text-white rounded-full"
          >
            See posts
          </Button>
        </div>
      </Modal>

      {/* Post modal */}
      <Modal
        open={postmodalVisible}
        onCancel={() => setPostModalVisible(false)}
        footer={null}
        width={900}
        className="posts-modal"
        styles={{
          header: { display: "none" },
          body: { padding: 0 },
        }}
        closeIcon={null}
      >
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Custom Header */}
          <div className="bg-blue-500 text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ArrowLeftOutlined className="text-white cursor-pointer hover:bg-blue-600 p-1 rounded" />
              <span className="text-lg font-medium">
                {"Md. Abul Hasam's posts"}
              </span>
            </div>
            <CloseOutlined
              className="text-white cursor-pointer hover:bg-blue-600 p-1 rounded"
              onClick={
                () => setPostModalVisible(false)
                // handlePostClick
              }
            />
          </div>

          {/* Posts Content */}
          <div className="max-h-96 overflow-y-auto p-2">
            {mockPosts.map((post, index) => (
              <div
                key={post.id}
                className="p-4 border border-gray-100 last:border-b-0 mb-4 rounded-lg"
              >
                <div className="flex gap-3">
                  {/* Profile Avatar */}
                  <div className="flex-shrink-0">
                    <img src={postimg} alt="Profile" />
                  </div>

                  {/* Post Content */}
                  <div className="flex-1 min-w-0 relative">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {post.content}
                    </p>
                    <button className=" flex flex-row items-center gap-2 justify-center absolute right-0 bottom-0 bg-primary text-white h-[48px] w-[143px] rounded-full text-lg font-semibold">
                      <span>
                        <svg
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10494 6.98132L4.02566 7.14196C3.44709 7.18668 2.93179 7.48991 2.61183 7.9739L0.213854 11.6007C-0.0288163 11.9677 -0.0673942 12.427 0.110589 12.8294C0.28862 13.2318 0.654477 13.5122 1.08924 13.5796L2.99306 13.8744C3.43842 11.511 4.50454 9.15336 6.10494 6.98132Z"
                            fill="white"
                          />
                          <path
                            d="M10.6256 21.507L10.9205 23.4108C10.9878 23.8455 11.2682 24.2114 11.6706 24.3894C11.838 24.4634 12.0151 24.5 12.1914 24.5C12.4391 24.5 12.685 24.4279 12.8993 24.2861L16.5262 21.8882C17.0102 21.5682 17.3134 21.0528 17.3581 20.4743L17.5187 18.3951C15.3466 19.9955 12.9891 21.0616 10.6256 21.507Z"
                            fill="white"
                          />
                          <path
                            d="M9.90967 20.1874C9.97577 20.1874 10.0422 20.182 10.1086 20.1709C11.0987 20.0054 12.0531 19.7264 12.9635 19.3614L5.13871 11.5366C4.77365 12.4469 4.49474 13.4013 4.32918 14.3915C4.26393 14.7819 4.39485 15.1795 4.67465 15.4593L9.04075 19.8254C9.27307 20.0577 9.58661 20.1874 9.90967 20.1874Z"
                            fill="white"
                          />
                          <path
                            d="M22.0863 11.1407C24.0011 7.43882 24.072 3.52684 23.9719 1.69217C23.9377 1.06353 23.4365 0.562343 22.8078 0.528078C22.5091 0.511766 22.155 0.5 21.756 0.5C19.7045 0.5 16.4583 0.810733 13.3593 2.41371C10.8964 3.68762 7.66682 6.49266 5.76146 10.179C5.78396 10.1966 5.80594 10.2152 5.82666 10.2359L14.2641 18.6734C14.2848 18.6941 14.3034 18.716 14.321 18.7385C18.0074 16.8331 20.8124 13.6036 22.0863 11.1407ZM13.9545 5.57372C15.3251 4.20306 17.5555 4.20292 18.9262 5.57372C19.5903 6.2377 19.9559 7.12059 19.9559 8.05963C19.9559 8.99867 19.5903 9.88156 18.9262 10.5455C18.241 11.2308 17.3405 11.5735 16.4404 11.5736C15.54 11.5736 14.6399 11.231 13.9545 10.5455C13.2904 9.88156 12.9247 8.99867 12.9247 8.05963C12.9247 7.12059 13.2904 6.2377 13.9545 5.57372Z"
                            fill="white"
                          />
                          <path
                            d="M14.9489 9.55116C15.7713 10.3736 17.1096 10.3736 17.932 9.55116C18.3304 9.15272 18.5498 8.62303 18.5498 8.05959C18.5498 7.49615 18.3304 6.96646 17.932 6.56807C17.5208 6.15684 16.9806 5.95124 16.4405 5.95124C15.9003 5.95124 15.3601 6.15684 14.9489 6.56807C14.5505 6.96646 14.3311 7.49615 14.3311 8.05959C14.3311 8.62303 14.5505 9.15277 14.9489 9.55116Z"
                            fill="white"
                          />
                          <path
                            d="M0.717381 20.2782C0.897334 20.2782 1.07729 20.2096 1.21454 20.0723L3.51016 17.7766C3.78475 17.502 3.78475 17.0569 3.51016 16.7823C3.23561 16.5077 2.79039 16.5077 2.51579 16.7823L0.220176 19.0779C-0.0544187 19.3525 -0.0544187 19.7977 0.220176 20.0723C0.357473 20.2095 0.537427 20.2782 0.717381 20.2782Z"
                            fill="white"
                          />
                          <path
                            d="M5.614 18.8861C5.33946 18.6115 4.89424 18.6115 4.61964 18.8861L0.206113 23.2997C-0.0684812 23.5742 -0.0684812 24.0194 0.206113 24.294C0.343411 24.4313 0.523364 24.4999 0.703318 24.4999C0.883272 24.4999 1.06323 24.4313 1.20048 24.294L5.61396 19.8805C5.8886 19.6059 5.8886 19.1607 5.614 18.8861Z"
                            fill="white"
                          />
                          <path
                            d="M6.72329 20.9898L4.42772 23.2854C4.15313 23.56 4.15313 24.0052 4.42772 24.2798C4.56502 24.4171 4.74497 24.4858 4.92488 24.4858C5.10479 24.4858 5.28479 24.4171 5.42204 24.2798L7.71766 21.9842C7.99225 21.7096 7.99225 21.2644 7.71766 20.9898C7.44311 20.7152 6.99789 20.7152 6.72329 20.9898Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <span>Boost</span>
                    </button>
                  </div>

                  {/* Download Button */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Subscribers;
