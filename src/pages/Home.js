import { useEffect, useState } from "react";
import supabase from "./../config/supabaseClient";
import FoodCard from "./../components/FoodCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      const { data, error } = await supabase.from("food-prep-tips").select();

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
  }, []);

  const handleDelete = (id) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
  };

  return (
    <div className="px-8 mx:container mx:mx-auto md:px-16 py-16">
      {fetchError && <p>{fetchError}</p>}
      {foods && (
        <div>
          {/* Order-by buttons */}
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
