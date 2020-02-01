import { UserPipe } from './user.pipe';

const users = [
  {
    name: 'shahira'
  },
  {
    name: 'divya'
  },
  {
    name: 'gauri'
  },
  {
    name: 'safiya'
  }
];

describe('UserPipe', () => {
  it('create an instance', () => {
    const pipe = new UserPipe();
    expect(pipe).toBeTruthy();
  });

  fit('whether transform return array', () => {
    const pipe = new UserPipe();
    expect(pipe.transform(users, 's').length).toBeGreaterThan(0);
  });
});
