import { dateToISO8601String, ISO8601DateFormat } from '../src/index';

describe('dateToISO8601String', () => {
  it('presents the date in ISO 8601 Extended format by default', () => {
    const date = new Date('2023-01-01');

    expect(dateToISO8601String(date)).toEqual('2023-01-01');
  });

  it('presents the date in ISO 8601 Basic format when requested', () => {
    const date = new Date('2023-01-01');

    expect(dateToISO8601String(date, ISO8601DateFormat.Basic)).toEqual('20230101');
  });

  it('presents the date in ISO 8601 Extended format when requested', () => {
    const date = new Date('2023-01-01');

    expect(dateToISO8601String(date, ISO8601DateFormat.Extended)).toEqual('2023-01-01');
  });
});
