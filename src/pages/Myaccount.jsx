import { useState } from "react";
import { Tabs, Form, Input, Button, Avatar, Upload, message } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function Myaccount() {
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=120&width=120"
  );
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();

  const handleImageUpload = (options) => {
    const { file } = options;
    if (file instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result);
          message.success("Profile image updated successfully!");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleProfileSave = (values) => {
    console.log("Profile data:", values);
    message.success("Profile updated successfully!");
  };

  const handlePasswordSave = (values) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error("New password and confirm password do not match!");
      return;
    }
    console.log("Password change data:", values);
    message.success("Password changed successfully!");
    passwordForm.resetFields();
  };

  return (
    <div className="min-h-screen bg-[#F6F6F6] py-8">
      <div className="max-w-4xl mx-auto bg-[#F6F6F6] rounded-lg shadow-sm p-8">
        {/* Profile Header */}
        <div className="text-center mb-4 p-4 rounded-lg bg-[#FFFFFF] text-white">
          <div className="relative inline-block">
            <Avatar
              size={120}
              src={profileImage}
              className="border-4 border-white shadow-lg"
            />
            <Upload
              customRequest={handleImageUpload}
              beforeUpload={beforeUpload}
              showUploadList={false}
              accept="image/*"
            >
              <Button
                icon={
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_199_8301)">
                      <circle cx="19" cy="16" r="15.5" fill="white" />
                    </g>
                    <path
                      d="M18.9092 9.40552C19.0867 9.40555 19.2573 9.47533 19.3828 9.60083L19.4658 9.70337C19.5386 9.81251 19.5791 9.94134 19.5791 10.0745C19.5791 10.252 19.5083 10.4225 19.3828 10.5481C19.2573 10.6736 19.0867 10.7444 18.9092 10.7444H13.3135V21.9358H24.5049V16.3401C24.5049 16.1625 24.5756 15.992 24.7012 15.8665C24.8267 15.741 24.9973 15.6702 25.1748 15.6702C25.3521 15.6703 25.522 15.7411 25.6475 15.8665C25.773 15.992 25.8438 16.1625 25.8438 16.3401V22.6057C25.8436 22.7831 25.7729 22.9529 25.6475 23.0784C25.522 23.2038 25.3522 23.2745 25.1748 23.2747H12.6436C12.5105 23.2746 12.3816 23.2351 12.2725 23.1624L12.1699 23.0784C12.0447 22.9529 11.9747 22.783 11.9746 22.6057V10.0745L11.9873 9.9436C12.013 9.81486 12.0757 9.69504 12.1699 9.60083L12.2725 9.51782C12.3816 9.44506 12.5105 9.40556 12.6436 9.40552H18.9092Z"
                      fill="#B7A481"
                      stroke="#B7A481"
                      stroke-width="0.2"
                    />
                    <path
                      d="M24.4707 8.97485C24.8745 8.97485 25.2635 9.11068 25.5791 9.35571V9.33228L25.75 9.50317C25.9179 9.67107 26.0507 9.87073 26.1416 10.0901C26.2325 10.3096 26.2793 10.5449 26.2793 10.7825C26.2793 11.02 26.2325 11.2554 26.1416 11.4749C26.0734 11.6394 25.9817 11.7928 25.8691 11.9299L25.75 12.0618L19.8428 17.967L19.8438 17.968C19.7669 18.0452 19.6722 18.1017 19.5693 18.134L19.4639 18.1584L17.585 18.427C17.5078 18.4381 17.4294 18.4349 17.3535 18.4192L17.2783 18.3997C17.2043 18.375 17.1351 18.3374 17.0742 18.2893L17.0156 18.2375C16.9606 18.1825 16.9157 18.1183 16.8828 18.0481L16.8545 17.9758C16.8217 17.8772 16.8124 17.7721 16.8271 17.6692L17.0957 15.7893L17.1191 15.6838C17.1511 15.5813 17.2076 15.4872 17.2842 15.4104L23.1924 9.50415L23.3252 9.38403C23.647 9.12056 24.0512 8.97488 24.4707 8.97485ZM24.3809 10.3167L24.292 10.344C24.2348 10.3686 24.1829 10.4047 24.1396 10.4495L24.1387 10.4504L18.3877 16.1985L18.2773 16.9739L19.0527 16.8625L24.8027 11.1145L24.8037 11.1135L24.8643 11.0422C24.8818 11.0168 24.8969 10.9897 24.9092 10.9612C24.9338 10.9039 24.9467 10.8419 24.9473 10.7795L24.9385 10.6868L24.9121 10.5979C24.9004 10.5692 24.8862 10.5416 24.8691 10.5159L24.8096 10.4436C24.7877 10.4218 24.7639 10.4021 24.7383 10.385L24.6553 10.3411C24.5977 10.3175 24.5359 10.3054 24.4736 10.3059L24.3809 10.3167Z"
                      fill="#B7A481"
                      stroke="#B7A481"
                      stroke-width="0.2"
                    />
                    <defs>
                      <filter
                        id="filter0_d_199_8301"
                        x="0.3"
                        y="0.3"
                        width="37.4"
                        height="37.4"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="1.6" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_199_8301"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_199_8301"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                }
                size="small"
                className="absolute bottom-0 right-0 rounded-full w-8 h-8 flex items-center justify-center bg-white border border-gray-300 hover:bg-gray-50"
              />
            </Upload>
          </div>
          <h2 className="text-[30px] font-semibold text-[#000000] mt-4">
            Jhon Doe
          </h2>
          <p className="text-[#B1A8A8] text-[20px]">example@gmail.com</p>
        </div>

        {/* Tabs */}
        <Tabs defaultActiveKey="1" centered className="custom-tabs">
          <TabPane tab="Edit profile" key="1">
            <Form
              form={form}
              layout="vertical"
              onFinish={handleProfileSave}
              initialValues={{
                name: "Jhon Doe",
                email: "example@gmail.com",
              }}
              className=""
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  size="large"
                  className="rounded-md"
                  placeholder="Enter your name"
                />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  size="large"
                  className="rounded-md"
                  placeholder="Enter your email"
                />
              </Form.Item>

              <Form.Item className="text-center mt-8">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 px-8 rounded-md"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </TabPane>

          <TabPane tab="Change Password" key="2">
            <Form
              form={passwordForm}
              layout="vertical"
              onFinish={handlePasswordSave}
              className=""
            >
              <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  className="rounded-md"
                  placeholder="Enter current password"
                />
              </Form.Item>

              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  className="rounded-md"
                  placeholder="Enter new password"
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  size="large"
                  className="rounded-md"
                  placeholder="Confirm new password"
                />
              </Form.Item>

              <Form.Item className="text-center mt-8">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  className="bg-[#0063E5] hover:bg-blue-700 border-blue-600 hover:border-blue-700 px-8 rounded-md"
                >
                  Save
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>

      <style jsx global>{`
        .custom-tabs .ant-tabs-tab {
          font-weight: 500;
          color: #000000;
        }

        .custom-tabs .ant-tabs-tab-active {
          color: #043249;
        }

        .custom-tabs .ant-tabs-ink-bar {
          background: #2563eb;
        }

        .ant-form-item-label > label {
          font-weight: 500;
          color: #374151;
        }

        .ant-input,
        .ant-input-password {
          border-radius: 6px;
        }

        .ant-input:focus,
        .ant-input-password:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </div>
  );
}
