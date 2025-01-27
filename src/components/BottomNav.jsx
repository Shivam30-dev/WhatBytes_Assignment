import { FiBarChart2 } from "react-icons/fi"; // Icon for the Dashboard
import { TfiMedallAlt } from "react-icons/tfi"; // Icon for the Skill Test
import { FaRegFile } from "react-icons/fa"; // Icon for the Internship section

const BottomNav = () => {
  return (
    <aside className="w-full bg-white h-20 border-t-2 border-gray-200 fixed bottom-0 left-0 z-10 lg:hidden">
      {/* Bottom navigation bar container */}
      <nav className="flex justify-around items-center h-full">
        {/* Dashboard Link */}
        <a
          href="#"
          className="flex flex-col items-center h-full justify-center w-full text-gray-500 font-bold hover:bg-gray-200 transition-all duration-200"
        >
          <FiBarChart2 className="text-xl mb-1" /> {/* Dashboard icon */}
          Dashboard {/* Label for Dashboard */}
        </a>

        {/* Skill Test Link */}
        <a
          href="#"
          className="flex flex-col items-center h-full justify-center w-full text-blue-600 font-bold bg-gray-100 transition-all duration-200"
        >
          <TfiMedallAlt className="text-xl mb-1" /> {/* Skill Test icon */}
          Skill Test {/* Label for Skill Test */}
        </a>

        {/* Internship Link */}
        <a
          href="#"
          className="flex flex-col items-center h-full justify-center w-full text-gray-500 font-bold hover:bg-gray-200 transition-all duration-200"
        >
          <FaRegFile className="text-xl mb-1" /> {/* Internship icon */}
          Internship {/* Label for Internship */}
        </a>
      </nav>
    </aside>
  );
};

export default BottomNav;
