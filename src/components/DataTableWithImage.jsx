import React, { useState } from "react";

// Sample Data
const users = [
  {
    id: 1,
    name: "Moshfequr Rahman",
    email: "moshfequr@gmail.com",
    role: "Admin",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Noman Hossain",
    email: "noman456@gmail.com",
    role: "Editor",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Sarah Khan",
    email: "sarah.khan@example.com",
    role: "User",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Ayesha Siddiqua",
    email: "ayesha.siddiqua@example.com",
    role: "User",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Editor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Ali Rahman",
    email: "ali.rahman@example.com",
    role: "User",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Fatima Noor",
    email: "fatima.noor@example.com",
    role: "User",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  { "id": 9, "name": "Isabella Wright", "email": "isabella.wright@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/women/9.jpg" },
  { "id": 10, "name": "Jack Turner", "email": "jack.turner@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/10.jpg" },
  { "id": 11, "name": "Kylie Walker", "email": "kylie.walker@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/11.jpg" },
  { "id": 12, "name": "Liam Robinson", "email": "liam.robinson@example.com", "role": "Admin", "image": "https://randomuser.me/api/portraits/men/12.jpg" },
  { "id": 13, "name": "Mia Lewis", "email": "mia.lewis@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/women/13.jpg" },
  { "id": 14, "name": "Noah Hill", "email": "noah.hill@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/14.jpg" },
  { "id": 15, "name": "Olivia Green", "email": "olivia.green@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/15.jpg" },
  { "id": 16, "name": "Paul Adams", "email": "paul.adams@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/16.jpg" },
  { "id": 17, "name": "Quinn Nelson", "email": "quinn.nelson@example.com", "role": "Admin", "image": "https://randomuser.me/api/portraits/women/17.jpg" },
  { "id": 18, "name": "Ryan Carter", "email": "ryan.carter@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/men/18.jpg" },
  { "id": 19, "name": "Sophia Mitchell", "email": "sophia.mitchell@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/19.jpg" },
  { "id": 20, "name": "Thomas Perez", "email": "thomas.perez@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/20.jpg" },
  { "id": 21, "name": "Uma Gray", "email": "uma.gray@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/women/21.jpg" },
  { "id": 22, "name": "Victor Ward", "email": "victor.ward@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/22.jpg" },
  { "id": 23, "name": "Wendy Cox", "email": "wendy.cox@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/23.jpg" },
  { "id": 24, "name": "Xander Diaz", "email": "xander.diaz@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/24.jpg" },
  { "id": 25, "name": "Yara Ramirez", "email": "yara.ramirez@example.com", "role": "Admin", "image": "https://randomuser.me/api/portraits/women/25.jpg" },
  { "id": 26, "name": "Zane Simmons", "email": "zane.simmons@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/men/26.jpg" },
  { "id": 27, "name": "Abby Rogers", "email": "abby.rogers@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/27.jpg" },
  { "id": 28, "name": "Ben Foster", "email": "ben.foster@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/28.jpg" },
  { "id": 29, "name": "Chloe Ward", "email": "chloe.ward@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/women/29.jpg" },
  { "id": 30, "name": "Daniel Grant", "email": "daniel.grant@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/30.jpg" },
  { "id": 31, "name": "Ella Hayes", "email": "ella.hayes@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/31.jpg" },
  { "id": 32, "name": "Finn Hughes", "email": "finn.hughes@example.com", "role": "Admin", "image": "https://randomuser.me/api/portraits/men/32.jpg" },
  { "id": 33, "name": "Gianna Murphy", "email": "gianna.murphy@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/33.jpg" },
  { "id": 34, "name": "Harvey Brooks", "email": "harvey.brooks@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/men/34.jpg" },
  { "id": 35, "name": "Isla Griffin", "email": "isla.griffin@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/women/35.jpg" },
  { "id": 36, "name": "Jake Webb", "email": "jake.webb@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/36.jpg" },
  { "id": 37, "name": "Kara Reynolds", "email": "kara.reynolds@example.com", "role": "Editor", "image": "https://randomuser.me/api/portraits/women/37.jpg" },
  { "id": 38, "name": "Luca Burns", "email": "luca.burns@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/38.jpg" },
  { "id": 39, "name": "Maya Johnston", "email": "maya.johnston@example.com", "role": "Admin", "image": "https://randomuser.me/api/portraits/women/39.jpg" },
  { "id": 40, "name": "Nathan Dean", "email": "nathan.dean@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/40.jpg" },
  { "id": 41, "name": "Nathan Dean", "email": "nathan.dean@example.com", "role": "User", "image": "https://randomuser.me/api/portraits/men/40.jpg" },

];

// Constants
const ITEMS_PER_PAGE = 5;

export default function SortablePaginatedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [paginationNumber,setPaginationNumber]=useState(ITEMS_PER_PAGE);

  const totalPages = Math.ceil(users.length / paginationNumber);

  const sortedUsers = [...users].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA = a[sortConfig.key].toString().toLowerCase();
    const valB = b[sortConfig.key].toString().toLowerCase();

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const startIndex = (currentPage - 1) * paginationNumber;
  const currentUsers = sortedUsers.slice(startIndex, startIndex + paginationNumber);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      } else {
        return { key, direction: "asc" };
      }
    });
  };

  const handlePagination=(e)=>{
    setPaginationNumber(parseInt(e.target.value));
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl text-emerald-400 font-bold mb-4">Data Table [No Comoponet Library]</h1>
      <h1 className="text-xl text-emerald-400 font-bold mb-4">Only React + Tailwind</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="px-4 py-2 border-b">Photo</th>
              <th
                className="px-4 py-2 border-b cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name ↑↓
              </th>
              <th
                className="px-4 py-2 border-b cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email ↑↓
              </th>
              <th
                className="px-4 py-2 border-b cursor-pointer"
                onClick={() => handleSort("role")}
              >
                Role ↑↓
              </th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="hover:bg-orange-300">
                <td className="px-4 py-3 border-b">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 border-b font-medium">{user.name}</td>
                <td className="px-4 py-3 border-b">{user.email}</td>
                <td className="px-4 py-3 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
                <div className='my-3 mx-3  flex gap-3  items-center'>
                  
            <span className="text-sm">Rows/Page:  </span>
                <select
            id="pagination"
            name="pagination"
              className="text-red-600 font-bold text-sm px-3 py-1 border border-gray-300 w-fit  focus:outline-none "
          value={paginationNumber}
          onChange={handlePagination}
          >

              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
        </div>
           <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-3">
          <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-2 py-2 rotate-180 bg-emerald-500 hover:bg-yellow-200  text-sm rounded-full disabled:opacity-50"
        >
          {/* Left Arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
        </button>
     
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
          className="px-2 py-2  bg-emerald-500 hover:bg-yellow-200 text-sm rounded-full disabled:opacity-50"
        >
      
      {/* Right Arrow SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
        </button>
        </div>
     
      </div>
    </div>
  );
}
