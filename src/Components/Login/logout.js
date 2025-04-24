import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </div>
  );
}
