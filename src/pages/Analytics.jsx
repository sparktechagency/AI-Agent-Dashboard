import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Area,
  AreaChart,
} from "recharts";

const bookingData = [
  { day: "Sat", value: 20 },
  { day: "Sun", value: 90 },
  { day: "Mon", value: 30 },
  { day: "Tue", value: 10 },
  { day: "Wed", value: 80 },
  { day: "Thu", value: 60 },
  { day: "Fri", value: 75 },
];

const earningData = [
  { name: "Sat", value: 1343.3, color: "#8e70ff" },
  { name: "Sun", value: 740.1, color: "#ff9f9f" },
  { name: "Mon", value: 1201.8, color: "#64d3db" },
  { name: "Tue", value: 954.6, color: "#ffb74d" },
  { name: "Wed", value: 1110.7, color: "#4f8bff" },
  { name: "Thu", value: 1308.7, color: "#66cc99" },
  { name: "Fri", value: 1264.2, color: "#9a6fff" },
];

const Analytics = () => {
  const total = useMemo(
    () => earningData.reduce((acc, cur) => acc + cur.value, 0).toFixed(1),
    []
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Users Card */}
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center h-[149px]">
          <div>
            <p className="text-[24px] text-[#000000] font-normal">Users</p>
            <p className="text-4xl font-semibold text-[#000000]">1200</p>
          </div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#E0EEFF" />
            <path
              d="M35.8 38.0667V41H15.5V38.0667C15.5 38.0667 15.5 32.2 25.65 32.2C35.8 32.2 35.8 38.0667 35.8 38.0667ZM30.725 24.1334C30.725 23.1181 30.4274 22.1256 29.8697 21.2815C29.3121 20.4373 28.5195 19.7793 27.5921 19.3908C26.6648 19.0023 25.6444 18.9006 24.6599 19.0987C23.6755 19.2968 22.7712 19.7857 22.0614 20.5036C21.3517 21.2215 20.8683 22.1361 20.6725 23.1319C20.4767 24.1277 20.5772 25.1598 20.9613 26.0978C21.3454 27.0358 21.9959 27.8375 22.8305 28.4016C23.6651 28.9656 24.6463 29.2667 25.65 29.2667C26.996 29.2667 28.2868 28.7259 29.2386 27.7632C30.1903 26.8005 30.725 25.4948 30.725 24.1334ZM35.713 32.2C36.6044 32.8978 37.3338 33.7847 37.8498 34.7982C38.3659 35.8118 38.6561 36.9275 38.7 38.0667V41H44.5V38.0667C44.5 38.0667 44.5 32.7427 35.713 32.2ZM34.35 19.0001C33.3521 18.9954 32.3762 19.2971 31.5515 19.8654C32.4323 21.1102 32.9059 22.6026 32.9059 24.1334C32.9059 25.6642 32.4323 27.1566 31.5515 28.4014C32.3762 28.9697 33.3521 29.2714 34.35 29.2667C35.696 29.2667 36.9868 28.7259 37.9386 27.7632C38.8903 26.8005 39.425 25.4948 39.425 24.1334C39.425 22.7719 38.8903 21.4663 37.9386 20.5036C36.9868 19.5409 35.696 19.0001 34.35 19.0001Z"
              fill="#007BFF"
            />
          </svg>
        </div>

        {/* Subscribers Card */}
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center h-[149px]">
          <div>
            <p className="text-[24px] text-[#000000] font-normal">
              Subscribers
            </p>
            <p className="text-4xl font-semibold text-[#000000]">600</p>
          </div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#E0EEFF" />
            <path
              d="M24.6799 27.8672H23.9092C22.8574 27.8297 21.8089 28.006 20.829 28.3853C19.8491 28.7646 18.9585 29.3387 18.2126 30.0721L18 30.317V37.5616H21.6146V33.4494L22.1019 32.9069L22.3233 32.6532C23.4768 31.4829 24.9127 30.6218 26.4961 30.1508C25.7036 29.5548 25.0785 28.7687 24.6799 27.8672Z"
              fill="#007BFF"
            />
            <path
              d="M41.814 30.0456C41.0681 29.3122 40.1775 28.7381 39.1976 28.3588C38.2176 27.9795 37.1692 27.8032 36.1174 27.8407C35.7948 27.8424 35.4726 27.8599 35.1517 27.8932C34.7458 28.739 34.1377 29.4747 33.3799 30.0368C35.0704 30.4983 36.6017 31.4057 37.8095 32.6617L38.031 32.9066L38.5094 33.4491V37.5701H42V30.2906L41.814 30.0456Z"
              fill="#007BFF"
            />
            <path
              d="M23.8827 26.1605H24.1574C24.0298 25.0784 24.222 23.983 24.7109 23.0064C25.1998 22.0298 25.9645 21.2139 26.9126 20.6571C26.5689 20.1386 26.0948 19.7171 25.5366 19.4339C24.9784 19.1507 24.3553 19.0155 23.7283 19.0416C23.1014 19.0677 22.492 19.2542 21.9599 19.5827C21.4278 19.9113 20.9913 20.3707 20.693 20.916C20.3947 21.4612 20.2449 22.0736 20.2583 22.6932C20.2716 23.3128 20.4477 23.9184 20.7693 24.4506C21.0908 24.9828 21.5468 25.4234 22.0926 25.7293C22.6383 26.0352 23.2552 26.1958 23.8827 26.1955V26.1605Z"
              fill="#007BFF"
            />
            <path
              d="M35.6921 25.5045C35.7021 25.7056 35.7021 25.9071 35.6921 26.1082C35.8621 26.1351 36.0338 26.1497 36.2059 26.152H36.3742C36.999 26.1191 37.6045 25.927 38.1318 25.5944C38.6591 25.2617 39.0902 24.8 39.3831 24.254C39.676 23.708 39.8208 23.0964 39.8034 22.4787C39.7859 21.8611 39.6068 21.2584 39.2835 20.7294C38.9602 20.2004 38.5037 19.763 37.9585 19.46C37.4133 19.1569 36.7979 18.9985 36.1722 19C35.5465 19.0016 34.9319 19.1631 34.3883 19.4689C33.8446 19.7746 33.3903 20.2142 33.0697 20.7448C33.8716 21.2619 34.5309 21.9674 34.9886 22.7981C35.4463 23.6288 35.688 24.5588 35.6921 25.5045Z"
              fill="#007BFF"
            />
            <path
              d="M29.8803 29.4246C32.0674 29.4246 33.8404 27.6736 33.8404 25.5136C33.8404 23.3536 32.0674 21.6026 29.8803 21.6026C27.6932 21.6026 25.9202 23.3536 25.9202 25.5136C25.9202 27.6736 27.6932 29.4246 29.8803 29.4246Z"
              fill="#007BFF"
            />
            <path
              d="M30.093 31.5066C28.9361 31.461 27.7817 31.6467 26.6993 32.0526C25.6169 32.4586 24.6287 33.0764 23.794 33.8689L23.5725 34.1139V39.6523C23.576 39.8327 23.6154 40.0107 23.6885 40.1761C23.7616 40.3414 23.867 40.4909 23.9987 40.616C24.1303 40.7412 24.2856 40.8395 24.4557 40.9053C24.6258 40.9711 24.8074 41.0032 24.99 40.9997H35.1694C35.3521 41.0032 35.5336 40.9711 35.7037 40.9053C35.8738 40.8395 36.0292 40.7412 36.1608 40.616C36.2924 40.4909 36.3978 40.3414 36.4709 40.1761C36.544 40.0107 36.5834 39.8327 36.5869 39.6523V34.1314L36.3743 33.8689C35.5453 33.0735 34.5606 32.4537 33.4805 32.0475C32.4004 31.6413 31.2477 31.4572 30.093 31.5066Z"
              fill="#007BFF"
            />
          </svg>
        </div>

        {/* Revenue Card */}
        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center h-[149px]">
          <div>
            <p className="text-[24px] text-[#000000] font-normal">Revenue</p>
            <p className="text-4xl font-semibold text-[#000000]">$12,500</p>
          </div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#E0EEFF" />
            <mask
              id="mask0_176_2966"
              maskUnits="userSpaceOnUse"
              x="14"
              y="18"
              width="32"
              height="24"
            >
              <path
                d="M33.0001 18H27.0001C21.3436 18 18.5146 18 16.7581 19.758C15.4921 21.0225 15.1381 22.8435 15.0391 25.875H44.9611C44.8621 22.8435 44.5081 21.0225 43.2421 19.758C41.4856 18 38.6566 18 33.0001 18ZM27.0001 42H33.0001C38.6566 42 41.4856 42 43.2421 40.242C44.9986 38.484 45.0001 35.6565 45.0001 30C45.0001 29.338 44.9991 28.713 44.9971 28.125H15.0031C15.0001 28.713 14.9991 29.338 15.0001 30C15.0001 35.6565 15.0001 38.4855 16.7581 40.242C18.5161 41.9985 21.3436 42 27.0001 42Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8751 36C19.8751 35.7016 19.9936 35.4155 20.2046 35.2045C20.4156 34.9935 20.7018 34.875 21.0001 34.875H27.0001C27.2985 34.875 27.5846 34.9935 27.7956 35.2045C28.0066 35.4155 28.1251 35.7016 28.1251 36C28.1251 36.2984 28.0066 36.5845 27.7956 36.7955C27.5846 37.0065 27.2985 37.125 27.0001 37.125H21.0001C20.7018 37.125 20.4156 37.0065 20.2046 36.7955C19.9936 36.5845 19.8751 36.2984 19.8751 36ZM29.6251 36C29.6251 35.7016 29.7436 35.4155 29.9546 35.2045C30.1656 34.9935 30.4518 34.875 30.7501 34.875H33.0001C33.2985 34.875 33.5846 34.9935 33.7956 35.2045C34.0066 35.4155 34.1251 35.7016 34.1251 36C34.1251 36.2984 34.0066 36.5845 33.7956 36.7955C33.5846 37.0065 33.2985 37.125 33.0001 37.125H30.7501C30.4518 37.125 30.1656 37.0065 29.9546 36.7955C29.7436 36.5845 29.6251 36.2984 29.6251 36Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_176_2966)">
              <path d="M12.0001 12H48.0001V48H12.0001V12Z" fill="#007BFF" />
            </g>
          </svg>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Statistics (Area Chart) */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">User Statistics</h3>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={bookingData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#6b7280" }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007BFF" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#007BFF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#007BFF"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                  strokeWidth={2}
                  activeDot={{
                    r: 6,
                    fill: "#007BFF",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Earning Statistics (Pie Chart) */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-4">Earning Statistics</h3>
          <div className="w-full h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  isAnimationActive={false}
                  data={earningData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={2}
                  label
                >
                  {earningData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>

                <text
                  x="43%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xl font-bold"
                  fill="#4b5563"
                >
                  ${total}
                </text>
                <Tooltip
                  formatter={(value) => [`$${value}`, "Earnings"]}
                  contentStyle={{
                    background: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                  wrapperStyle={{
                    paddingTop: "20px",
                  }}
                  formatter={(value, entry, index) => (
                    <span className="text-gray-600">
                      {earningData[index].name}: ${earningData[index].value}
                    </span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
