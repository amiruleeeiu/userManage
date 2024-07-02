import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AddUserComponent } from '../add-user/add-user.component';
import { UsersListComponent } from './users-list.component';

const meta: Meta<UsersListComponent> = {
  component: UsersListComponent,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [AddUserComponent],
      imports: [
        MatDialogModule,
        MatPaginatorModule,
        MatButtonModule,
        MatTableModule,
      ],
      providers: [],
    }),
  ],
  render: (args) => ({
    props: {
      ...args,
    },
  }),
};

export default meta;

type Story = StoryObj<UsersListComponent>;

export const EmptyPageStory: Story = {
  args: {
    displayedColumns: ['serial', 'name', 'email', 'action'],
    dataSource: [
      {
        id: 2,
        name: 'Helium',
        email: 'test1@gmail.com',
        action: { edit: true, view: true },
      },
      {
        id: 3,
        name: 'Lithium',
        email: 'test2@gmail.com',
        action: { edit: true, view: true },
      },
      {
        id: 3,
        name: 'Lithium',
        email: 'test2@gmail.com',
        action: { edit: true, view: true },
      },{
        id: 3,
        name: 'Lithium',
        email: 'test2@gmail.com',
        action: { edit: true, view: true },
      },
    ],
    paginator: {} as MatPaginator,
  },
};
