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
    <AegisButton {...args} >
      {args.children}
    </AegisButton>
  )
}

export const Primary = Template.bind({});
Primary.args = {
  type: ButtonType.PRIMARY,
  children: <p>Primary Button</p>,
};
Primary.parameters = {
  nextRouter: {
    path: '/loginRegister',
    asPath: '/loginRegister',
  }
}