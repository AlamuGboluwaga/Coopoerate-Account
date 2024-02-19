import React, { useState } from "react";

const Verification = () => {
  const [data, setData] = useState({
    fisrtName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    bvn: "",
    address: "",
    tin: "",
  });

  // console.log(data);

  return (
    <div className="h-screen w-screen p-4 flex flex-col justify-center items-center">
      <div className="mb-4">
        <h1 className="text-center">Cooporate Account</h1>
      </div>
      <div className=" flex flex-row  justify-center gap-40 mb-10 border border-t-0 border-r-0 border-l-0 w-[90%] text-gray-400 pb-4">
        <span>INTRODUCTION</span>
        <span>STEP 1</span>
        <span>STEP 2</span>
        <span>STEP 3</span>
        <span>REVIEW</span>
        <hr />
      </div>
      <form className="border h-[90%] w-[60%] flex flex-col">
        <div className="bg-gray-400 h-10 flex justify-center items-center">
          <p className="text-center text-white">BUSINESS INFORMATION</p>
        </div>
        <div className="bg-green-40  p-4 flex justify-around flex-row flex-wrap gap-16">
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            First Name *
            <input
              type="text"
              placeholder="Enter your First Name "
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, fisrtName: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Middle Name *
            <input
              type="text"
              placeholder="Enter your Middle Name"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, middleName: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Last Name *
            <input
              type="text"
              placeholder="Enter your  Last Name"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Email Address *
            <input
              type="text"
              placeholder="Enter your Email Address"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Date of Birth *
            <input
              type="date"
              placeholder="Enter your Date of Birth"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, dob: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            BVN *
            <input
              type="text"
              placeholder="Enter your BVN"
              className="border w-full pl-4 pt-2 pb-2 outline-none "
              onChange={(e) => setData({ ...data, bvn: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Residential Address *
            <input
              type="text"
              placeholder="Enter your Residential Address"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, address: e.target.value })}
              required
            />
          </label>
          <label className="flex flex-col justify-center items-left gap-2 text-sm w-[45%]">
            Tax Identification Number*
            <input
              type="text"
              placeholder="Enter your Tax Identification Number"
              className="border w-full pl-4 pt-2 pb-2 outline-none focus:bg-gray-50"
              onChange={(e) => setData({ ...data, tin: e.target.value })}
              required
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Verification;
