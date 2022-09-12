import { useEffect, useState } from "react";
import supabase from "./../config/supabaseClient";

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
          {food.map((f) => (
            <h2 key={f.id}>{f.title}</h2>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
