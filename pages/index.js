import Container from "@/components/Container";
import Emoji from "@/components/Emoji";
import { useEffect, useState } from "react";
import { getDateString } from "@/utils";
import { nanoid } from "nanoid";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const todoLabel = todo.removeSpaces();
    const todoDesc = desc.removeSpaces();

    if (todoLabel.length > 0) {
      const now = getDateString();

      setTodos((todos) => [
        ...todos,
        {
          id: nanoid(),
          label: todo,
          desc: {
            contains: todoDesc.length > 0,
            content: desc,
          },
          createdTime: now,
        },
      ]);

      setTodo("");
      setDesc("");
    } else {
      alert("please enter valid todo");
    }
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <Container className="pt-8">
      <h1>What do you want to do today?</h1>
      <p>
        Today or tomorrow—it doesn&apos;t matter, whatever you want to do or
        plan to do, create, organize and share them here.{" "}
        <u>
          <i>Remember:</i>
        </u>{" "}
        taking notes is your life&apos;s number one planner{" "}
        <Emoji symbol={"😉"} />
      </p>
      <form className="my-4 block" onSubmit={handleSubmit}>
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
      {todos.length > 0 && (
        <>
          <span className="sub-heading">todo list</span>
          <div className="flex flex-col gap-4">
            {todos.map((t, i) => (
              <div
                className="relative bg-slate-100 p-4 border rounded-lg"
                key={t.id}
              >
                <span className="absolute top-5 left-4 w-6 h-6 text-xs bg-slate-800 text-white rounded-full inline-flex items-center justify-center font-bold pt-[.85px] shadow-2xl">
                  {i + 1}{" "}
                </span>
                <div className="pl-10">
                  <h4 className="text-slate-800 text-2xl">{t.label}</h4>
                  {t.desc.contains && <p>{t.desc.content}</p>}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
