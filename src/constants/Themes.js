/**
 * Theming is based on UI KItten / Eva Design system
 * Docs: https://akveo.github.io/react-native-ui-kitten/docs/design-system/design-system-theme
 */
import { dark, light } from "@eva-design/eva";
export const themeNames = ["sunny", "moony"];

const sunny = {
  ...light,

  "color-primary-100": "#ff1d8e", // <- primary violet shades
  "color-primary-200": "#ff1d8e",
  "color-primary-300": "#d5bfff",
  "color-primary-400": "#e86ba4",
  "color-primary-500": "#a16eff",
  "color-primary-600": "#7b51db",
  "color-primary-700": "#5a37b8",
  "color-primary-800": "#3e2494",
  "color-primary-900": "#29157a",

  "color-basic-100": "white",
  "color-basic-200": "#eefafc",
  "color-basic-300": "#e8f5fa",
  "color-basic-400": "#d6e6f2",
  "color-basic-500": "#c7dbeb",
  "color-basic-600": "#a9c0db",
  "color-basic-700": "#fbedca",
  "color-basic-800": "#336a77",
  "color-basic-900": "#295c66",
  "color-basic-1000": "#244555",
  "color-basic-1100": "#121a2b",

  "background-basic-color-1": "$color-basic-700",
  "background-basic-color-2": "$color-basic-800",
  "background-basic-color-3": "$color-basic-900",
  "background-basic-color-4": "$color-basic-100",

  "border-basic-color-1": "$color-basic-700",
  "border-basic-color-2": "$color-basic-800",
  "border-basic-color-3": "$color-basic-900",
  "border-basic-color-4": "$color-basic-1000",
  "border-basic-color-5": "$color-basic-1100",

  "text-disabled-color": "$color-basic-600"
};

const moony = {
  ...dark,

  "color-primary-100": "#ff1d8e", // <- primary violet shades
  "color-primary-200": "#ece3ff",
  "color-primary-300": "#d5bfff",
  "color-primary-400": "#b18aff",
  "color-primary-500": "#a16eff",
  "color-primary-600": "#7b51db",
  "color-primary-700": "#5a37b8",
  "color-primary-800": "#3e2494",
  "color-primary-900": "#29157a",

  "color-basic-100": "white",
  "color-basic-200": "#eefafc",
  "color-basic-300": "#e8f5fa",
  "color-basic-400": "#d6e6f2",
  "color-basic-500": "#c7dbeb",
  "color-basic-600": "#a9c0db",
  "color-basic-700": "#4f969e",
  "color-basic-800": "#336a77",
  "color-basic-900": "#295c66",
  "color-basic-1000": "#244555",
  "color-basic-1100": "#121a2b",

  "background-basic-color-1": "$color-basic-700",
  "background-basic-color-2": "$color-basic-800",
  "background-basic-color-3": "$color-basic-900",
  "background-basic-color-4": "$color-basic-100",

  "border-basic-color-1": "$color-basic-700",
  "border-basic-color-2": "$color-basic-800",
  "border-basic-color-3": "$color-basic-900",
  "border-basic-color-4": "$color-basic-1000",
  "border-basic-color-5": "$color-basic-1100",

  "text-disabled-color": "$color-basic-600"
};

const themes = { sunny, moony };

export default themes;
