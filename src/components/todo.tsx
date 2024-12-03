import { useRef, useState, FC, useEffect } from "react";
import { todoType } from "@/types/todoType";

interface Props {
  todo: todoType;
  changeTodoText: (id: number, text: string) => void;
  toggleIsTodoDone: (id: number) => void;
  deleteTodoItem: (id: number) => void;
}

const Todo: FC<Props> = ({
  todo,
  changeTodoText,
  toggleIsTodoDone,
  deleteTodoItem,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [isDone, setIsDone] = useState(todo.done);

  useEffect(() => {
    inputRef.current!.value = todo.text;
  }, [todo]);

  const handleIsDone = () => {
    toggleIsTodoDone(todo.id);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => {
    inputRef.current!.focus();
    setEditing(true);
  };

  const handleSave = () => {
    changeTodoText(todo.id, inputRef.current!.value);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todo.id);
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4">
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleIsDone}
        className="h-4 w-4 rounded-sm text-blue-200"
      />

      <input
        ref={inputRef}
        type="text"
        readOnly={!editing}
        className={`${todo.done ? "line-through" : ""} flex-1 rounded border bg-transparent px-3 py-2 outline-none read-only:border-transparent`}
      />

      <div className="flex gap-4">
        {editing ? (
          <button
            onClick={handleSave}
            className="rounded bg-green-600 px-4 py-2 text-green-50"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="rounded bg-blue-400 px-4 py-2 text-blue-50"
          >
            Edit
          </button>
        )}

        {editing ? (
          <button
            onClick={handleCancel}
            className="rounded bg-red-400 px-3 py-2 text-red-50"
          >
            Cancel
          </button>
        ) : (
          <button
            onClick={handleDelete}
            className="rounded bg-red-400 px-3 py-2 text-red-50"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
