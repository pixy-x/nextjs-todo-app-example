import Container from "@/components/Container";

function Header() {
  return (
    <header className="fixed top-0 left-0 h-10 bg-blue-700 w-full block z-10 shadow-2xl">
      <Container className="h-full flex items-center justify-between">
        <h4>Todo App</h4>
      </Container>
    </header>
  );
}

export default Header;
