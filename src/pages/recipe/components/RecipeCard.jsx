import { imageMap } from "../../../data/imageData";
import { Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme"; // Import the custom hook

function RecipeCard({ recipe }) {
  // Find the image for the recipe
  const image = imageMap[+recipe.id];
  const { mode } = useTheme(); // Use the custom hook to access theme context

  return (
    <div
      className={`p-4 rounded-lg shadow-lg flex flex-col md:flex-row ${
        mode === "dark"
          ? "bg-slate-800"
          : "bg-white border-2 border-solid border-black"
      }`}
    >
      <div className="md:w-1/3">
        <img
          src={image ? image : recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:w-2/3 md:pl-4 flex flex-col justify-between">
        <div className="mb-4">
          <h2 className="text-4xl font-bold text-red-600">{recipe.title}</h2>
          <p
            className={`${mode === "dark" ? "text-white" : "text-black"} mt-2`}
          >
            {recipe.cookingTime} cooking time
          </p>
        </div>
        <div className="mb-4">
          <h3
            className={`${
              mode === "dark" ? "text-white" : "text-black"
            } text-2xl font-bold mb-2`}
          >
            Ingredients:
          </h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li
                key={index}
                className={`${mode === "dark" ? "text-white" : "text-black"}`}
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3
            className={`${
              mode === "dark" ? "text-white" : "text-black"
            } text-2xl font-bold mb-2`}
          >
            Method:
          </h3>
          <ol className="list-decimal list-inside">
            {recipe.method.split(". ").map((step, index) =>
              step.length < 5 ? null : (
                <li
                  key={index}
                  className={`${mode === "dark" ? "text-white" : "text-black"}`}
                >
                  {step}
                </li>
              )
            )}
          </ol>
          <div className="flex justify-center mt-4">
            <Link
              to="/"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300"
            >
              Back to all recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
