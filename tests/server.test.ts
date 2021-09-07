/* eslint-disable global-require */
import start from '../src/server';

jest.mock('express', () => require('jest-express'));

describe('server', () => {
  test('successfully start the express server', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();

    const app = await start();

    expect(app).toBeDefined();
    expect(logSpy).toHaveBeenCalled();
  });
});
