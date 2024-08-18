import AuthProvider from "@/context/AuthContext";
import { wrapper } from "@/redux/store";
import { loadUserData } from "@/redux/user/userAction";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { useStore } from "react-redux";
function App({ Component, pageProps }) {
  const store = useStore();

  useEffect(() => {
    loadUserData(store);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
export default wrapper.withRedux(App);
