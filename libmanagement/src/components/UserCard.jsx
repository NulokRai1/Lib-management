function UserCard({ user }) {
    return (
      <div className="user-card">
        <h3>{user.name}</h3>
        <p>Violations: {user.violations}</p>
        <p>Number of books: {user.no_of_books}</p>
        <p>Member: {user.isMember ? "Yes" : "No"}</p>
      </div>
    );
  }
  
  export default UserCard;
  