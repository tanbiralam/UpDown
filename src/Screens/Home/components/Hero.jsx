import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-3xl font-bold text-center">
        Top 20 prompts to boost your AI ...
      </h2>
      <h2 className="text-xl text-center my-3">
        <strong className="text-secondary">Like Your Favorite Idea.</strong>{" "}
        Write Your Best Ideas. No Account needed.
      </h2>

      <div>
        <select
          className="select select-bordered border-primary w-full max-w-xs"
          onChange={(event) => setTheme(event.target.value)}
        >
          <option disabled selected>
            Select Theme
          </option>
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;