import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleAdd = async () => {
    await axios.post("http://localhost:3001/notes", {
      title: title,
      author: author,
      content: content,
    });
    navigate("/");
  };

  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Add Note
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="title"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Title
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="author"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Author
                </label>
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  name="author"
                  id="author"
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="content"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Content
                </label>
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  name="content"
                  id="content"
                  onChange={(e) => setContent(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleAdd}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
