import Container from "@/components/Container";

export default function TodoPage({ id }) {
  return (
    <Container>
      <pre className="py-4">todo_id: {id}</pre>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { todoId } = context.query;

  if (!todoId || todoId.length !== 21) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: todoId,
    },
  };
}
