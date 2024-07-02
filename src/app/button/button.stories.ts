import { MatTableModule } from '@angular/material/table';
import { action } from '@storybook/addon-actions';
import { StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Component/Button',
  component: ButtonComponent,
  imports: [MatTableModule],
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      ...args,
      onPrimary: action('onPrimary'),
      onEdit: action('onEdit'),
      onDelete: action('onDelete'),
      onView: action('onView'),
    },
  }),
};

type ButtonComponentStory = StoryObj<ButtonComponent>;

export const Primary: ButtonComponentStory = {
  args: {
    label: 'Add User',
    onPrimary: action('onPrimary'),
    onEdit: action('onEdit'),
    onDelete: action('onDelete'),
    onView: action('onView'),
    size: '',
  },
};
