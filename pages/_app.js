import "@/utils";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.min.css";
import Layout from "@/components/layout";
import { Inter } from "@next/font/google";
import { ToastContainer } from "react-toastify";

const interFont = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout fontClass={interFont.className}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Component {...pageProps} />
    </Layout>
  );
}
