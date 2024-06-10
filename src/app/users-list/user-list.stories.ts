import { moduleMetadata } from '@storybook/angular';
import { UsersListComponent } from './users-list.component';

export default {
  title: 'Users List',
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [UsersListComponent],
    }),
  ],
};

export const Default = () => ({
  component: UsersListComponent,
  props: {
    // Define props here if needed
  },
});

