import { Meta, Story } from '@storybook/react/types-6-0';
import { Footer, FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://victorvasconcelosse.vercel.app">Feito com ❤ por Victor Vasconcelos</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div style={{ marginTop: '200px' }}>
      <Footer {...args} />
    </div>
  );
};
