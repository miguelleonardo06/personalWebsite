import menubar from "../icons/menubar.svg";
const Header = () => {
  const ShowDropDown = () => {
    const dropdown = document.querySelector("#dropdown");
    if (dropdown.classList.contains("sm:hidden")) {
      dropdown.classList.remove("sm:hidden");
    } else {
      dropdown.classList.add("sm:hidden");
    }
  };
  return (
    <nav>
      <ul className="relative flex justify-between items-center px-32 py-2 bg-slate-50">
        <div>
          <h3 className="font-bold font-medium bg-gradient-to-r from-purple-600 via-blue-600 bg-clip-text text-transparent text-[28px]">
            MyWebsite
          </h3>
        </div>
        <div
          id="dropdown"
          className="flex sm:hidden gap-9 text-sm text-gray-600 cursor-pointer relative md:relative md:flex sm:absolute md:w-auto sm:w-full sm:block md:top-0 sm:top-14 left-0 md:bg-transparent sm:bg-slate-50 sm:text-center md:text-sm sm:text-xl md:p-0 sm:p-3 *:md:mt-0 *:sm:mt-3 *:sm:text-slate-500"
        >
          <li>Home</li>
          <li>Introduction</li>
          <li>Gallery</li>
          <li>About</li>
        </div>

        <img
          src={menubar}
          className="size-6 hidden md:hidden sm:block cursor-pointer"
          onClick={() => {
            ShowDropDown();
          }}
        ></img>
      </ul>
    </nav>
  );
};

export default Header;
