import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children, fontClass = "" }) {
  return (
    <>
      <Header />
      <main className={`${fontClass} mt-10`}>{children}</main>
      <Footer />
    </>
  );
}
