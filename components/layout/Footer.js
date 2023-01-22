import Container from "@/components/Container";
import Emoji from "@/components/Emoji";
import CustomLink from "@/components/CustomLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="my-4">
      <Container className="py-4">
        <p className="leading-6 tracking-tight text-slate-900 opacity-60">
          &copy; {currentYear} pixyxgit/next - All rights reserved. Please
          contact us if you want to improve or help this app&apos;s code system.{" "}
          <CustomLink url="https://github.com/pixy-x/nextjs-todo-app-example">
            Click here
          </CustomLink>{" "}
          to see git repo <Emoji symbol={"👍"} />
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
