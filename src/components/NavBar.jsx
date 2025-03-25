const NavBar = () => {
  return (
    <nav className="w-full h-14 bg-indigo-200 flex justify-between  items-center px-4 md:px-6">
      <div className="text-2xl text-indigo-700 font-bold">DB skills</div>
      <ul className="md:flex hidden gap-4 font-semibold ">
        <li className="cursor-pointer hover:text-blue-400">Home</li>
        <li className="cursor-pointer hover:text-blue-400">About Us</li>
        <li className="cursor-pointer hover:text-blue-400">Contact Us</li>
      </ul>
      <div className="hidden md:block px-2 py-2 bg-indigo-700 rounded-xl text-white cursor-pointer font-bold">
        Login/Signup
      </div>
      <div className="md:hidden">
        <a className="text-4xl" href="#">
          &#8801;
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
