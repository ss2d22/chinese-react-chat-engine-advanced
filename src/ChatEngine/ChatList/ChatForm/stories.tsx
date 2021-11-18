import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ChatForm } from '.';
import { Props } from './props';

const meta: Meta = {
  title: 'ChatEngine/ChatList/ChatForm',
  component: ChatForm,
  argTypes: {},
};

export default meta;

const Template: Story<Props> = (props) => <ChatForm {...props}></ChatForm>;

export const Default = Template.bind({});
Default.args = {
  customStyle: {
    chatForm: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
};

export const OnFormSubmit = Template.bind({});
OnFormSubmit.args = {
  customStyle: {
    chatForm: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
    },
  },
  onFormSubmit: (value) => console.log('Submitted', value),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  customStyle: {
    chatForm: {
      maxWidth: '400px',
      boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#4a5162',
    },
    chatFormTitle: { color: '#d3adf7' },
    chatFormInput: {
      backgroundColor: '#4a5162',
      color: '#f0f0f0',
      border: '1px solid #d3adf7',
    },
    chatFormButton: {
      backgroundColor: '#4a5162',
      border: '1px solid #d3adf7',
      color: '#d3adf7',
    },
  },
};
