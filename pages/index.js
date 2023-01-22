import Container from "@/components/Container";
import Emoji from "@/components/Emoji";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <Container className="pt-8">
      <h1>What do you want to do today?</h1>
      <p>
        Today or tomorrow—it doesn't matter, whatever you want to do or plan to
        do, create, organize and share them here.{" "}
        <u>
          <i>Remember:</i>
        </u>{" "}
        taking notes is your life's number one planner <Emoji symbol={"😉"} />
      </p>
      <form className="my-4 block">
        <input
          type="text"
          placeholder="Type here.."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required={true}
          spellCheck={false}
        />
        <textarea
          cols="30"
          rows="10"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Add description here. (Optional)"
          spellCheck={false}
        ></textarea>
        <button className="primary" type="submit" disabled={!todo}>
          Create New To-do
        </button>
      </form>
    </Container>
  );
}
