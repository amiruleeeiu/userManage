import { MatTableModule } from '@angular/material/table';
import { action } from '@storybook/addon-actions';
import { StoryObj } from '@storybook/angular';
import { ButtonShellComponent } from '../button-shell/button-shell.component';

export default {
  title: 'Component/ShellButton',
  component: ButtonShellComponent,
  imports: [MatTableModule],
  tags: ['autodocs'],
  render: (args: ButtonShellComponent) => ({
    props: {
      ...args
    },
  }),
};

type ButtonComponentStory = StoryObj<ButtonShellComponent>;

export const Primary: ButtonComponentStory = {
  args: {},
};
