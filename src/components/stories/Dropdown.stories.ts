import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "../organisms/Dropdown/Dropdown";
import { Option } from "../types/dropdown.types";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    multiple: { control: "boolean" },
    searchable: { control: "boolean" },
    portal: { control: "boolean" },
    zIndex: { control: "number" },
  },
};

export default meta;

const options: Option[] = [
  { label: "The Shawshank Redemption", value: "shawshank" },
  { label: "The Godfather", value: "godfather" },
  { label: "The Dark Knight", value: "dark_knight" },
  { label: "Pulp Fiction", value: "pulp_fiction" },
  { label: "Fight Club", value: "fight_club" },
  { label: "Inception", value: "inception" },
  { label: "The Matrix", value: "matrix" },
  { label: "Forrest Gump", value: "forrest_gump" },
  { label: "Goodfellas", value: "goodfellas" },
  { label: "The Silence of the Lambs", value: "silence_lambs" },
  { label: "Interstellar", value: "interstellar" },
  { label: "The Lord of the Rings", value: "lotr" }
];

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    label: "Label",
    options,
    multiple: false,
    searchable: true,
    portal: false,
    zIndex: 1050,
  },
};
