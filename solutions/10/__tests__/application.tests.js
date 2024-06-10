import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import escapeHtml from 'escape-html';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import run from '../src/application.js';

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join(__dirname, '../__fixtures__/index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('application 1', async () => {
  const sendButton = screen.getByRole('button', { name: 'Send' });
  const emailField = screen.getByLabelText('Email');
  const nameField = screen.getByLabelText('Name');
  await userEvent.type(emailField, 'a@b.c');
  await userEvent.type(nameField, 'Toto');
  await userEvent.click(sendButton);

  const sendText = screen.getByText('Feedback has been sent');
  const emailText = screen.getByText('Email: a@b.c');
  const nameText = screen.getByText('Name: Toto');

  expect(sendText).toBeInTheDocument();
  expect(emailText).toBeInTheDocument();
  expect(nameText.outerHTML).toEqual('<div>Name: Toto</div>');
});

test('application 2', async () => {
  const sendButton = screen.getByRole('button', { name: 'Send' });
  const emailField = screen.getByLabelText('Email');
  const nameField = screen.getByLabelText('Name');
  const commentField = screen.getByLabelText('Comment');
  await userEvent.type(emailField, 'toto@hexlet.io');
  await userEvent.type(nameField, 'Toto Robbins');
  await userEvent.type(commentField, 'If you <i>can</i> do, you <b>must</b> do');
  await userEvent.click(sendButton);

  const sendText = screen.getByText('Feedback has been sent');
  const commentText = screen.getByText(/Comment.*/);

  expect(sendText).toBeInTheDocument();
  expect(commentText).toBeInTheDocument();
  expect(commentText.outerHTML).toEqual(`<div>Comment: ${escapeHtml('If you <i>can</i> do, you <b>must</b> do')}</div>`);
});

