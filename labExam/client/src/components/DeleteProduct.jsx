import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  const handleDelete = async () => {
    await axios.delete("http://localhost:3001/notes/" + id);
    navigate("/");
  };
  return (
    <>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Delete Note
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="title"
                class="block text-sm/6 font-medium text-gray-900"
              >
                Enter Id
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={(e) => setId(e.target.value)}
                  required
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleDelete}
              >
                Delete Note
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProduct;
