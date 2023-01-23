import Container from "@/components/Container";
import { HiUserCircle } from "react-icons/hi";

function Header() {
  return (
    <header className="fixed top-0 left-0 h-10 bg-blue-700 w-full block z-20 shadow-2xl">
      <Container className="h-full flex items-center justify-between">
        <h4>Todo App</h4>
        <a
          href="#"
          className="inline-flex h-full items-center gap-2 text-xs uppercase tracking-tight font-bold border-b border-black/10 px-4 bg-blue-100 text-blue-700"
        >
          <HiUserCircle />
          <span>Sign In</span>
        </a>
      </Container>
    </header>
  );
}

export default Header;
