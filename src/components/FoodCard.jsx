import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";

const FoodCard = ({ food, onFoodDelete }) => {

  const handleDeleteFood = async () => {
    const { data, error } = await supabase
      .from("food-prep-tips")
      .delete()
      .eq("id", food.id);

    if (error) {
      console.log(error);
    }

    if (data) {
      onFoodDelete(food.id);
    }
  };

  return (
    <div className="shadow-lg p-5 relative rounded-md border-l-4 border-l-cyan-600 border-t-2 border-t-gray-200 h-auto">
      <h3 className="text-lg font-semibold text-cyan-600">{food.title}</h3>
      <div className="my-3 w-full">
        <p className="text-gray-400 mb-1">Prep-Time: {food.preptime} minutes</p>
        <p className="text-gray-500">
          <span className="font-semibold">Method:</span> <br />{" "}
          {food.method.slice(0, 100)}...
        </p>
      </div>
      <h5 className="font-semibold text-sm text-gray-500 mb-12">
        Author: <span className="text-gray-400">{food.author}</span>
      </h5>
      <div className="absolute top-0 right-0 -mt-3 bg-cyan-600 w-8 h-8 flex items-center justify-center text-white rounded-md shadow-md">
        {food.review}
      </div>
      <div className="flex justify-end absolute bottom-0 right-0 mr-4 mb-4">
        <Link to={`/${food.id}`}>
          <i
            className="material-icons bg-gray-200 p-2 rounded-full text-cyan-600 mr-3"
            title="Edit food"
          >
            edit
          </i>
        </Link>
        <i
          className="material-icons bg-gray-200 p-2 rounded-full text-red-300 cursor-pointer"
          title="Delete food"
          onClick={handleDeleteFood}
        >
          delete
        </i>
      </div>
    </div>
  );
};

export default FoodCard;
