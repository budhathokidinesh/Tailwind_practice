import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 px-4 text-white pt-8 items-center text-center">
      <div className="flex flex-col md:flex-row flex-wrap justify-between md:px-12">
        <div className="items-center flex flex-col">
          <img
            className="h-12 w-12 rounded-2xl"
            src="https://static.vecteezy.com/system/resources/previews/014/861/969/non_2x/db-logo-design-initial-db-letter-logo-design-monogram-design-pro-vector.jpg"
            alt=""
          />
          <p className="my-4">Email Us: abc@abc.com</p>
          <img
            className="h-24 w-24"
            src="https://www.svgrepo.com/show/303573/iso-2-1-logo.svg"
            alt=""
          />
        </div>
        <div className="items-center flex flex-col">
          <h2 className="font-bold text-xl mt-4">DB Skills</h2>
          <div className="w-20 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="items-center flex flex-col">
          <h2 className="font-bold text-xl mt-4">Products</h2>
          <div className="w-22 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>DB Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>Become an Affiliate</p>
            <p>Hall of Fame</p>
          </div>
        </div>
        <div className="items-center flex flex-col">
          <h2 className="font-bold text-xl mt-4">Links</h2>
          <div className="w-12 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>GitHub</p>
            <p>Linkedin</p>
            <p>X</p>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <p className="mt-4 mb-4">
        &copy; 2025 Dinesh Budhathoki. All rights reserved.🚀
      </p>
    </div>
  );
};

export default Footer;
