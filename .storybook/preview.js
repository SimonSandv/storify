import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { ColorPalette } from "../src/shared/enums/colors.enum";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  colorPicker: {
    primaryPalette: 'PrimaryPalette',
    palettes: [
      {
        name: "PrimaryPalette", palette: ColorPalette
      }
    ]
  }
}