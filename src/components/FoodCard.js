const FoodCard = ({ food }) => {
  return (
    <div className="shadow-lg p-5 relative border rounded-md">
      <h3 className="text-lg font-semibold text-cyan-600">{food.title}</h3>
      <div className="my-3 w-full">
        <p className="text-gray-500">
          Method: <br /> {food.method.slice(0, 50)}...
        </p>
        <p className="text-gray-400 mt-1">Prep-Time: {food.preptime} minutes</p>
      </div>
      <h5 className="font-semibold text-sm text-gray-500">
        Author: {food.author}
      </h5>
      <div className="absolute top-0 right-0 -mt-4 bg-cyan-500 w-10 h-10 flex items-center justify-center text-white rounded-full">
        {food.rating}
      </div>
    </div>
  );
};

export default FoodCard;
