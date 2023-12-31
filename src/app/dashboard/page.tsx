"use client";

import { DashboardLayout } from "../../../public/components/dashboard/layout";
import { Lora } from "../../../public/fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  TenancyCard,
  TenancyBox,
} from "../../../public/components/tenancy-card";
import { CgPlayListAdd } from "react-icons/cg";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className={`${Lora.className} flex items-center justify-start`}>
        <p className="text-textBlack2 font-light text-[15px] py-4">
          You are Here {`>>`}
        </p>
        <h5 className="font-medium text-textBlack2 text-[16px] ml-2">Home</h5>
      </div>
      <div className="border border-[rgba(0, 65, 160, 0.1)] h-[166px] px-4 pb-4">
        <Carousel>
          <div>
            <div className="flex items-center">
              <div className="w-[160px] h-[160px]">
                <img
                  src="/assets/3811384.jpg"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color mr-28 mt-[-2rem] leading-[2.2rem]`}
                >
                  Verify Your Email
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className} font-extralight text-justify text-text_color leading-[1.5rem] text-[14px] w-[81%]`}
                  >
                    Welcome to props manager app! to get started, please verify
                    your email address to unlock all the features and benefits
                    awaiting you.Thank you for joining us!{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                    >
                      Click to verify
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-[160px] h-[160px]">
                <img
                  src="/assets/add-tenancy-image.png"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color mr-28 mt-[-2rem] leading-[2.2rem]`}
                >
                  Add Tenancy Details
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className} font-extralight text-justify text-text_color leading-[1.5rem] text-[14px] w-[77%]`}
                  >
                    Welcome to props manager app! to get started, please verify
                    your email address to unlock all the features and benefits
                    awaiting you.Thank you for joining us!{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                    >
                      Click to Add Details
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="w-[160px] h-[160px]">
                <img
                  src="/assets/invite-others-social.png"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <div className="flex flex-col">
                <h6
                  className={`${Lora.className} text-text_color mr-28 mt-[-2rem] leading-[2.2rem]`}
                >
                  Invite Others
                </h6>
                <span className="flex items-center justify-center">
                  <p
                    className={`${Lora.className} font-extralight text-justify text-text_color leading-[1.5rem] text-[14px] w-[79%]`}
                  >
                    Hello! You can invite your Landlord, tenants or neighbours
                    and make it even more fun! 🌟 Simply tap on the “Invite
                    Others” to share the app with them.{" "}
                    <span
                      className={`${Lora.className} font-normal underline text-text_color`}
                    >
                      Click to Invite Others
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="w-full h-[140px] rounded-[1rem] px-4 mt-6 shadow-sm flex flex-col justify-center">
        <div className="flex items-center mb-2 justify-between">
          <p className={`${Lora.className} font-light text-textBlack2 text-[15px]`}>Listed Properties</p>
          <div className="flex items-center">
            <CgPlayListAdd className="text-address text-[14px]" />
            <p
              className={`${Lora.className} text-address text-[12px] font-extralight`}
            >
              Add
            </p>
          </div>
        </div>
        <div className="flex gap-[1.1rem]">
          <div className="w-[25%]">
            <TenancyCard />
          </div>
          <div className="w-[15%]">
            <TenancyBox
              name="Active Tenancy"
              subtext="0"
              add={
                <div className="flex mt-4 items-center">
                  <CgPlayListAdd className="text-address text-[12px]" />
                  <p
                    className={`${Lora.className} text-address text-[10px] font-extralight`}
                  >
                    Add
                  </p>
                </div>
              }
            />
          </div>
          <div className="w-[15%]">
            <TenancyBox name="Next Rent Due Date" subtext="DD/MM/YYYY" />
          </div>
          <div className="w-[15%]">
            <TenancyBox name="Tenancy Duration" subtext="12 months" />
          </div>
          <div className="w-[15%]">
            <TenancyBox name="Next Rent Amount" subtext="₦ 0.00" />
          </div>
          <div className="w-[15%]">
            <TenancyBox name="Landlord’s Name" subtext="Nil" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
export default Dashboard;
