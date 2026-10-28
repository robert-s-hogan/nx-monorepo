import { findStepTimers, formatClock } from './stepTimers';

describe('findStepTimers', () => {
  it('finds a time and the action it belongs to', () => {
    expect(findStepTimers('Let it soak for 30 minutes.')).toEqual([
      { seconds: 1800, phrase: '30 minutes', action: 'soaking' },
    ]);
  });

  it('finds several times in one step, each with its own action', () => {
    const timers = findStepTimers('Let it soak for 30 minutes. Give it one stir after the first 5 minutes.');
    expect(timers.map((t) => [t.seconds, t.action])).toEqual([
      [1800, 'soaking'],
      [300, 'stir'],
    ]);
  });

  it('times the low end of a range', () => {
    expect(findStepTimers('Bake for 10-12 minutes until golden.')[0]).toMatchObject({ seconds: 600, action: 'baking' });
  });

  it('merges hours and minutes into one timer', () => {
    expect(findStepTimers('Simmer for 1 hour and 15 minutes.')[0]).toMatchObject({ seconds: 4500, action: 'simmering' });
  });

  it('understands words and hyphenated times', () => {
    expect(findStepTimers('Rest for a minute.')[0].seconds).toBe(60);
    expect(findStepTimers('Give it a 5-minute rest.')[0].seconds).toBe(300);
    expect(findStepTimers('Chill for half an hour.')[0]).toMatchObject({ seconds: 1800, action: 'chilling' });
  });

  it('ignores temperatures and plain numbers', () => {
    expect(findStepTimers('Heat the oven to 350°F and grease 2 pans.')).toEqual([]);
  });
});

describe('formatClock', () => {
  it('formats minutes and hours', () => {
    expect(formatClock(90_500)).toBe('1:31');
    expect(formatClock(3_600_000)).toBe('1:00:00');
    expect(formatClock(-5)).toBe('0:00');
  });
});
