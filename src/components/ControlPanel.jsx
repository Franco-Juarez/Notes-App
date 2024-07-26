import AddButton from "./AddButton";
import colors from "../assets/colors.json";
import Color from "./Color";

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <AddButton />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
};

export default ControlPanel;
