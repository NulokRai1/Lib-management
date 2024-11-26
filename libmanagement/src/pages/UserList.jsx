import { useState } from "react";
import UserCard from "../components/UserCard";


function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name:"User1", violations:0, no_of_books: 5, isMemember: true },
    { id: 2, name:"User2", violations:3, no_of_books: 6, isMemember: true },
    { id: 3, name:"User3", violations:0, no_of_books: 2, isMemember: false },

  ]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
