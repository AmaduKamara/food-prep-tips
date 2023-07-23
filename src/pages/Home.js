import { useEffect, useState } from "react";
import supabase from "./../config/supabaseClient";
import FoodCard from "./../components/FoodCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [foods, setFoods] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  useEffect(() => {
    const fetchFoods = async () => {
      const { data, error } = await supabase
        .from("food-prep-tips")
        .select()
        .order(orderBy, { ascending: false });

      if (error) {
        setFetchError("Could not fetch the foods");
        setFoods(null);
      }
      if (data) {
        setFoods(data);
        setFetchError(null);
      }
    };
    fetchFoods();
  }, [orderBy]);

  const handleDelete = (id) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
  };

  return (
    <div className="px-8 mx:container mx:mx-auto md:px-16 py-16">
      {fetchError && <p>{fetchError}</p>}
      {foods && (
        <div>
          <div className="my-4">
            <h3 className="text-cyan-600 md:text-2xl font-semibold mb-2">
              Order by:
            </h3>
            <button
              className={`${
                orderBy === "created_at" ? "bg-cyan-700" : ""
              } mr-6 bg-cyan-500 py-1 px-3 rounded-full text-slate-100 mb-4`}
              type="button"
              onClick={() => setOrderBy("created_at")}
            >
              Time created
            </button>
            <button
              className={`${
                orderBy === "title" ? "bg-cyan-700" : ""
              } mr-6 bg-cyan-500 py-1 px-3 rounded-full text-slate-100 mb-4`}
              type="button"
              onClick={() => setOrderBy("title")}
            >
              Title
            </button>
            <button
              className={`${
                orderBy === "review" ? "bg-cyan-700" : ""
              } mr-6 bg-cyan-500 py-1 px-3 rounded-full text-slate-100 mb-4`}
              type="button"
              onClick={() => setOrderBy("review")}
            >
              Rating
            </button>
            {/* {orderBy} */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} onFoodDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
