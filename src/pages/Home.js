import { useEffect, useState } from "react";
import supabase from "./../config/supabaseClient";
import FoodCard from "./../components/FoodCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [food, setFood] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      const { data, error } = await supabase.from("food-prep-tips").select();

      if (error) {
        setFetchError("Could not fetch the food");
        setFood(null);
        console.log(error);
      }
      if (data) {
        setFood(data);
        setFetchError(null);
      }
    };
    fetchFood();
  }, []);

  return (
    <div className="container mx-auto px-16 py-16">
      {fetchError && <p>{fetchError}</p>}
      {food && (
        <div>
          {/* Order-by buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-4">
            {food.map((f) => (
              <FoodCard key={f.id} food={f} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
