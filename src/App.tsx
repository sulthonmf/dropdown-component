import { useState } from "react";
import Dropdown from "./components/organisms/Dropdown/Dropdown";
import { Option } from "./components/types/dropdown.types";

function App() {
  const [selectedOption, setSelectedOption] = useState<
    Option | Option[] | null
  >(null);
  const options: Option[] = [
    { label: "The Shawshank Redemption", value: "shawshank" },
    { label: "The Godfather", value: "godfather" },
    { label: "The Dark Knight", value: "dark_knight" },
    { label: "Pulp Fiction", value: "pulp_fiction" },
    { label: "Fight Club", value: "fight_club" },
  ];

  return (
    <div className="flex flex-col justify-center h-screen w-screen">
      <span className="text-2xl font-bold text-center py-10">
        Selected Movie:{" "}
        {selectedOption 
          ? Array.isArray(selectedOption)
            ? selectedOption.map(opt => opt.label).join(", ")
            : selectedOption.label
          : "No Movie Selected"}
      </span>
      <div className="flex justify-center items-center w-full max-w-[500px] mx-auto">
        <Dropdown
          label="Movies"
          options={options}
          multiple={true}
          searchable={true}
          portal={false}
          onChange={setSelectedOption}
        />
      </div>
    </div>
  );
}

export default App;
