const LeftNav = () => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="p-2 rounded hover:bg-gray-700 cursor-pointer">Logout</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default LeftNav;
  