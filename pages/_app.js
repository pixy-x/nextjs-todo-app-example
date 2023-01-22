import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Inter } from "@next/font/google";

const interFont = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout fontClass={interFont.className}>
      <Component {...pageProps} />
    </Layout>
  );
}
