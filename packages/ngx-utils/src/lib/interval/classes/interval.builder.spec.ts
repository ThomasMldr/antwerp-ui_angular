import { IntervalBuilder } from './interval.builder';
import { GenericInterval } from './generic.interval';
import { DateInterval } from './date.interval';

describe('Interval Builder', () => {
  it('should create a generic interval', () => {
    const interval = IntervalBuilder
      .numberInterval(0, 3)
      .openInterval()
      .bounded()
      .build();

    expect(interval).toBeDefined();
    expect(interval instanceof GenericInterval).toBe(true);
  });
  it('should create a date interval', () => {
    const interval = IntervalBuilder
      .dateInterval(new Date(), new Date())
      .closedInterval()
      .build();
    expect(interval).toBeDefined();
    expect(interval instanceof DateInterval).toBe(true);
  });
});
