import axios from "axios";
import { useEffect, useState } from "react";

const ShowProducts = () => {
  const [notes, setNotes] = useState([]);
  const [isRefresh, setIsRefresh] = useState("");

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:3001/notes");
    setNotes(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:3001/notes/" + id);
    setIsRefresh(id);
  };

  useEffect(() => {
    fetchNotes();
  }, [isRefresh]);

  return (
    <div className="flex flex-wrap p-10 gap-10">
      {notes.map((note) => (
        <div
          className="w-96 rounded overflow-hidden rounded-md bg-blue-50   shadow-lg p-4"
          key={note.id}
        >
          <div className="px-6 py-4">
            <h2>{note.title}</h2>
            <div className="mb-2">{note.content}</div>
            <div className="flex justify-between items-center text-gray-500">
              <div>{note.author}</div>
              <div className="text-xs">
                {new Date(note.createdAt).toDateString()}
              </div>
            </div>
            <div className="text-xs mt-2">{note._id}</div>
          </div>
          <button
            class=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={() => handleDelete(note._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowProducts;
