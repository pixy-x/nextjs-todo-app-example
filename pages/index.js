import Container from "@/components/Container";
import Emoji from "@/components/Emoji";
import { useEffect, useState } from "react";
import { getDateString } from "@/utils";
import { nanoid } from "nanoid";
import { TbTrash, TbEye } from "react-icons/tb";
import { useRouter } from "next/router";
import { MdAccessTimeFilled } from "react-icons/md";
import { Martian_Mono } from "@next/font/google";

const martianMono = Martian_Mono({
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

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

  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleSeeTask = (id) => {
    router.push(`/${id}`);
  };

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
                className="relative bg-slate-100 p-4 border rounded-lg min-h-[96px]"
                key={t.id}
              >
                <span className="absolute top-5 left-4 w-6 h-6 text-xs bg-slate-800 text-white rounded-full inline-flex items-center justify-center font-bold pt-[.85px] shadow-2xl z-10">
                  {i + 1}{" "}
                </span>
                <div className="px-10">
                  <h4 className="text-slate-800 text-2xl">
                    {t.label.limitText()}
                  </h4>
                  {t.desc.contains && <p>{t.desc.content.limitText(360)}</p>}
                </div>
                <div className="flex items-center justify-start py-2 mt-2 pr-10 gap-2 text-gray-600">
                  <MdAccessTimeFilled />
                  <span
                    className={`text-xs leading-5 ${martianMono.className}`}
                  >
                    {t.createdTime}
                  </span>
                </div>
                <div className="absolute top-5 right-5 z-10 inline-flex flex-col gap-2">
                  <button
                    className="bg-red-700 text-white inline-flex items-center justify-center w-6 h-6 rounded"
                    title="Delete Task"
                    onClick={() => deleteTask(t.id)}
                  >
                    <TbTrash />
                  </button>
                  <button
                    className="bg-blue-700 text-white inline-flex items-center justify-center w-6 h-6 rounded"
                    title="View Task Page"
                    onClick={() => handleSeeTask(t.id)}
                  >
                    <TbEye />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
