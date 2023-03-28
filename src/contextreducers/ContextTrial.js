import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ContextTrial = () => {
    const { country, color } = useContext(ThemeContext)
    
  return (
      <div>
          <h1>The name of my country is {country} and my
              my favourite color is {color}</h1>
    </div>
  )
}

export default ContextTrial