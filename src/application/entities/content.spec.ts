import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('You have received a friend request');

  expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less then 5 characters', () => {
  expect(() => new Content('aaa')).toThrowError();
});

test('it should not be able to create a notification content with more then 240 characters', () => {
  expect(() => new Content('a'.repeat(241))).toThrowError();
});
