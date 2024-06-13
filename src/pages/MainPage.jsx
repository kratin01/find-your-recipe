import { Search } from "lucide-react";
import { useEffect } from "react";
import React from "react";
import ReCard from "../components/ReCard";
import { getRandomColor } from "../lib/utils";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const MainPage = () => {
  const [recipes, setRecipes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // we can use useEffect to fetch data from an API because it can run after the first render of the component

  const fetchRecipes = async (searchquery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchquery}&type=public`
      );
      const data = await res.json();
      setRecipes(data.hits);
      
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipes("paneer tikka");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    fetchRecipes(searchQuery);
  }

  return (
    // felx-1 means that the div will take all the remaining space
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className=" max-w-screen-lg mx-auto">
        <form onSubmit={handleSearch}>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} /> {/*it is only icon*/}
            <input
              type="text"
              // grow is a custom class that makes the input take all the remaining space
              className="text-sm md:text-md grow"
              placeholder="What do you feel like cooking today?"
            />
          </label>
        </form>

        <h1 className=" font-bold text-3xl md:text-5xl mt-4">
          Here's a recipe suggestion
        </h1>
        {/* tracking-tight is a custom class that reduces the line height */}
        <p className=" text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">
          What people are cooking right now. Here are some suggestions for you
        </p>

        <div className=" grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <ReCard key={index} recipe={recipe} {...getRandomColor()}/>
            ))}
          {loading &&
            [...Array(7)].map((_, index) => (
              <div key={index} className=" flex flex-col gap-4 w-full">
                <div className=" skeleton h-32 w-full"></div>
                <div className=" flex justify-between">
                  <div className=" skeleton h-4 w-28"></div>
                  <div className=" skeleton h-4 w-24"></div>
                </div>
                <div className=" skeleton w-1/2 h-4"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
