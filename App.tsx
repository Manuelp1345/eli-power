import "./global.css";
import { LoginContainer } from "./components/LoginContainer";
import { UserProvider } from "./context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <LoginContainer />;
    </UserProvider>
  );
}
