import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [preptime, setPreptime] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState();
  const [formError, setFormError] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !method || !preptime || !rating || !author) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("food-prep-tips")
      .insert([{ title, preptime, method, rating, author }]);

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly");
    }

    if (data) {
      console.log(data);
      setFormError(null);
    }

    navigate("/");
  };

  return (
    <div className="container mx-auto px-16 py-16 flex justify-center">
      <form
        className="w-3/5 shadow-xl bg-white p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-cyan-600 mt-5">
          Create a Food Prep Tips
        </h2>
        <div className="mt-8">
          <label htmlFor="title" className="text-lg block mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>

        <div className="mt-4">
          <label htmlFor="time" className="text-lg block mb-1">
            Prep Time
          </label>
          <input
            id="time"
            type="number"
            value={preptime}
            onChange={(e) => setPreptime(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="rating" className="text-lg block mb-1">
            Rating
          </label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="rating" className="text-lg block mb-1">
            Author
          </label>
          <input
            id="rating"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="method" className="text-lg block mb-1">
            Prep Method
          </label>
          <textarea
            id="method"
            type="text"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>
        <div>{formError && <p>{formError}</p>}</div>
        <div className="flex justify-end">
          <div>
            <Link
              to="/"
              className="border py-2 px-12 mt-5 mr-5 hover:border-cyan-500 rounded-md"
            >
              Cancel
            </Link>
            <button
              className="border py-2 px-12 mt-5 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
