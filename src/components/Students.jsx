import React from "react";

const Students = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center text-center p-10">
      <div className="w-full h-auto flex flex-col items-center text-center">
        <p className="text-indigo-800 font-bold text-2xl md:text-4xl text-center">
          "Pure Hardwork, No Shortcut"
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      </div>
      <div className="w-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-evenly">
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 rounded-2xl "
            src="https://www.svgrepo.com/show/395907/books.svg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">200+</p>
          <p className="text-2xl font-bold text-gray-500">Different Courses</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 rounded-2xl "
            src="https://www.svgrepo.com/show/382182/book-courses-education-learning-school-study.svg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">5,000+</p>
          <p className="text-2xl font-bold text-gray-500">Students Enrolled</p>
        </div>
        <div className="w-46 flex flex-col items-center mb-12">
          <img
            className="w-44 h-44 rounded-2xl "
            src="https://www.svgrepo.com/show/513295/credit-card.svg"
            alt=""
          />
          <p className="text-3xl font-bold text-white">10,000+</p>
          <p className="text-2xl font-bold text-gray-500 ">
            Successful Transitions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
