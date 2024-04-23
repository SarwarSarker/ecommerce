import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-[#393939] px-5 pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12 ">
                <div className="w-full mb-10">
                  <p className="text-base text-body-color dark:text-dark-6 mb-7">
                    Sed ut perspiciatis undmnis is iste natus error sit amet
                    voluptatem totam rem aperiam.
                  </p>
                  <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                    <span>+012 (345) 678 99</span>
                  </p>
                </div>
              </div>
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        SaaS Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Our Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        User Flow
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        User Strategy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        About TailGrids
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Contact & Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Success History
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Setting & Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                <div className="w-full mb-10">
                  <h4 className="text-lg font-semibold text-dark dark:text-white mb-9">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Premium Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Know Our Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0)"
                        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
                      >
                        Download App
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="px-5 bg-[#161616] py-5">
        <div className="container mx-auto">
          <p className="text-white text-lg">
            © 2021 Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
