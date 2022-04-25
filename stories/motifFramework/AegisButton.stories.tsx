import { ComponentStory, ComponentMeta } from '@storybook/react';
import AegisButton, { ButtonType } from '../../components/motifFramework/interactiveActions/AegisButton/AegisButton';

export default {
  title: 'Motif Framework/AegisButton',
  component: AegisButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AegisButton>;

const Template: ComponentStory<typeof AegisButton> = (args) => {
  return (
    <AegisButton {...args} />
  )
}

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.PRIMARY,
};