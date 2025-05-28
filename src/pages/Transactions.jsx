import React, { useState } from "react";
import { Table, Input, Pagination, Space, Image, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import avater from "../assets/profile.png";
import carOne from "../assets/car1.png";

const { Option } = Select;

const sampleData = Array.from({ length: 45 }, (_, i) => ({
  id: i + 1,
  key: i,
  user: "Md. Abid Hasan",
  email: "example@gmail.com",
  Cardnumber: "**** **** **** 2568",
  time: "Thursday, March 27, 2025",
  amount: 2000,
  hour: "10:00 PM",
  serviceType: ["SUV", "Compact", "Extra Large", "Truck", "Sports Car"][i % 5],
  serviceDetail: "Exterior",
  carBrand: "BMW",
  carModel: "M5 CS",
  avatar: avater,
  carImage: carOne,
  businessName: "Abid Car Shop",
}));

const Transactions = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(sampleData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);

  const handleSearch = () => {
    const filtered = sampleData.filter(
      (item) =>
        item.user.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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

      render: (_, record) => (
        <Space>
          <span className="text-[16px] font-medium">{record.email}</span>
        </Space>
      ),
    },
    {
      title: "Card number",
      render: (_, record) => (
        <Space>
          <span className="text-[16px] font-medium">{record.Cardnumber}</span>
        </Space>
      ),
    },

    {
      title: "Time",

      render: (_, record) => (
        <Space>
          <span className="text-[16px] font-medium">{record.time}</span>
        </Space>
      ),
    },
    {
      title: "Amount",

      render: (_, record) => (
        <Space>
          <span className="text-[20px] font-medium">${record.amount}</span>
        </Space>
      ),
    },
  ];

  const paginatedData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 items-center">
          <Input
            prefix={<SearchOutlined onPressEnter={handleSearch} />}
            placeholder="Search Users"
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
    </div>
  );
};

export default Transactions;
