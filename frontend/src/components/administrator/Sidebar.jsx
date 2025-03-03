import { FaHospital, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="h-screen w-64 shadow-lg hidden md:block">
      <div className="flex items-center justify-center py-6 text-purple-600">
        <h1 className="text-2xl font-bold">Administrador</h1>
      </div>
      <nav className="mt-10">
        <Link
          to="/admin"
          className="flex items-center mt-4 py-2 px-6 bg-gray-200 text-gray-800"
        >
          <FaHospital className="mr-3" />
          Lista empleados
        </Link>
        <Link
          to="/admin/rol"
          className="flex items-center mt-4 py-2 px-6 bg-purple-600 text-white"
        >
          <FaUserPlus className="mr-3" />
          Agregar Rol
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
