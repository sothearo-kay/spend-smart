import { FC, useRef } from "react";

interface Props {
  createTodo: (text: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleAdd = () => {
    const input = inputRef.current!.value;
    createTodo(input);

    inputRef.current!.value = "";
  };

  return (
    <div className="space-x-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new to-do"
        className="rounded border px-4 py-2 outline-none"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
