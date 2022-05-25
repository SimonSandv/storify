import { Story, Meta } from "@storybook/angular/types-6-0";
import { ButtonComponent } from "./button.component";
import Colors from "../../shared/colors.enum";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: { type: "color", presetColors: Colors } },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => {
  return {
    props: args,
  };
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
  backgroundColor: "#FFFFFF",
};
