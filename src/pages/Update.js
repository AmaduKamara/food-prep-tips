import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import supabase from "../config/supabaseClient";

const Update = () => {
  const [title, setTitle] = useState("");
  const [preptime, setPrepTime] = useState("");
  const [author, setAuthor] = useState("");
  const [review, setReview] = useState("");
  const [method, setMethod] = useState("");

  const [formError, setFormError] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const { data, error } = await supabase
        .from("food-prep-tips")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setPrepTime(data.preptime);
        setAuthor(data.author);
        setReview(data.review);
        setMethod(data.method);
      }
    };

    fetchFood();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !preptime || !review || !author) {
      setFormError("Please fill in all the fields correctly");
      return;
    }

    // Send updated datat to supabase
    const { data, error } = await supabase
      .from("food-prep-tips")
      .update({ title, method, preptime, review, author })
      .eq("id", id);

    if (error) {
      setFormError("Please fill in all the fields correctly");
    }

    if (data) {
      setFormError(null);
      navigate("/");
    }
  };

  return (
    <div className="mx-6 md:container md:mx-auto md:px-16 py-16 flex justify-center">
      <form
        className="md:w-3/5 shadow-xl bg-white p-5 rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-semibold text-cyan-600 mt-5">
          Create a Food Prep Tip
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
            onChange={(e) => setPrepTime(e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="review" className="text-lg block mb-1">
            Review
          </label>
          <input
            id="review"
            type="number"
            value={review}
            onChange={(e) => setReview(+e.target.value)}
            className="block w-full border py-2 px-4 rounded-md focus:outline-cyan-300"
            required
            min={0}
            max={5}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="author" className="text-lg block mb-1">
            Author
          </label>
          <input
            id="author"
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
        <div className="flex justify-end">
          <div className="flex">
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
              Update Food
            </button>
          </div>
        </div>
        <div className="py-6 md:container md:mx-auto w-full text-red-300">
          {formError && <p>{formError}</p>}
        </div>
      </form>
    </div>
  );
};

export default Update;
