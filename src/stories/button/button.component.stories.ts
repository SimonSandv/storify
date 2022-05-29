import { Story, Meta } from "@storybook/angular/types-6-0";
import { ButtonComponent } from "./button.component";
import Colors from "../../shared/enums/colors.enum";
import { moduleMetadata } from "@storybook/angular";
import { MatButtonModule } from "@angular/material/button";

export default {
  title: "Components/Button",
  component: ButtonComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => {
  return {
    props: args,
  };
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Button",
  color: "primary",
  type: "basic",
};
