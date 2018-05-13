import { getGradientColors } from '../gradients';
import { getLinearGradient, getPadding } from '../';

jest.mock('../gradients');

describe('utils', () => {
  describe('getLinearGradient', () => {
    beforeEach(() => {
      getGradientColors.mockReturnValue(['#DA4453', '#89216B']);
    });

    it('should work with only theme', () => {
      expect(getLinearGradient('Vanusa')).toBe('#DA4453 0%, #89216B 100%');
    });

    it('should work with customized gradient', () => {
      expect(getLinearGradient('Vanusa', ['#111', '#222'])).toBe(
        '#111 0%, #222 100%'
      );
      expect(getLinearGradient('Vanusa', ['#111', '#222', '#333'])).toBe(
        '#111 0%, #222 50%, #333 100%'
      );
    });
  });

  describe('getPadding', () => {
    beforeEach(() => {
      console.warn = jest.fn();
      console.error = jest.fn();
    });

    it('should work with string and number prop', () => {
      expect(getPadding(10)).toBe('10px');
      expect(getPadding('10')).toBe('10px');
    });

    it('should work with array prop', () => {
      expect(getPadding([10, 20])).toBe('10px 20px');
      expect(getPadding(['10', '20'])).toBe('10px 20px');
    });

    it('should call console.warn when passing an array prop over four values', () => {
      expect(getPadding([10, 20, 30, 40, 50])).toBe('10px 20px 30px 40px');
      expect(console.warn).toBeCalledWith(
        'Warning: padding property should have maximum four values.'
      );
    });

    it('should call console.error when passing an error type prop', () => {
      getPadding(jest.fn());

      expect(console.error).toBeCalledWith(
        'Warning: Type of padding property should be either "String", "Number" or "Array"'
      );
    });
  });
});
