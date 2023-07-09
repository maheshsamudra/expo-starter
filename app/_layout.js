import Layout from "./components/layout";
import { UserProvider } from "../hooks/useUser";

export default function RootLayout() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}
