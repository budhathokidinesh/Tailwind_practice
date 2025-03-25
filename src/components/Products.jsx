import React from "react";

const Products = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-col items-center text-center">
        <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
          "Our Products"
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-24 h-24 rounded-2xl "
            src="https://www.svgrepo.com/show/418519/e-ebook-education.svg"
            alt=""
          />
          <p className="text-xl font-bold text-white">DB Skills Lab</p>
          <p className="text-sm  text-gray-500">
            Supercarge yoour projext development with our robust lab
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-24 h-24 rounded-2xl "
            src="https://www.svgrepo.com/show/281766/job-search.svg"
            alt=""
          />
          <p className="text-xl font-bold text-white">Job Portal</p>
          <p className="text-sm  text-gray-500">
            Use exceptional templetes for stand-out resume minus the sign up
            process
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-24 h-24 rounded-2xl "
            src="https://www.svgrepo.com/show/261846/job-search-search.svg"
            alt=""
          />
          <p className="text-xl font-bold text-white">DB Skills Lab</p>
          <p className="text-sm  text-gray-500">
            DB skill's self-paced experience portal prioritises hands-on traning
            with 570+ internship projects.
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-24 h-24 rounded-2xl "
            src="https://www.svgrepo.com/show/62617/affiliate.svg"
            alt=""
          />
          <p className="text-xl font-bold text-white">DB Skills Lab</p>
          <p className="text-sm  text-gray-500">
            Explore affiliate marketing opportunities with DB Skills and attain
            financial freedom.
          </p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-24 h-24 rounded-2xl "
            src="https://www.svgrepo.com/show/424631/award-certificate-education-2.svg"
            alt=""
          />
          <p className="text-xl font-bold text-white">DB Skills Lab</p>
          <p className="text-sm  text-gray-500">
            Our students placements and 100k+ career transitions speak volumes
            about our curses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
