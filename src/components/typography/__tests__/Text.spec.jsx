import { shallow } from 'enzyme';
import React from 'react';

import defaultTheme from '../../../styles/theme';

import Text from '../Text';


const setup = ({ theme = defaultTheme, ...rest } = {}) => {
  const props = {
    ...rest,
    theme,
  };
  const wrapper = shallow(<Text {...props} />);

  return {
    props,
    wrapper,
  };
};


describe('Text Component', () => {
  it('should pull some values from the theme', () => {
    const { props, wrapper } = setup();
    const { theme } = props;

    expect(wrapper).toHaveStyleRule('font-family', theme.fonts.families.body.replace(/,\s/, ','));
    expect(wrapper).toHaveStyleRule('line-height', theme.fonts.lineHeight.toString());
  });

  it('should have an adjustable font size', () => {
    for (let i = 1; i <= 6; i += 1) {
      const { props, wrapper } = setup({ size: i });
      const { theme } = props;

      expect(wrapper).toHaveStyleRule('font-size', theme.fonts.sizes[i]);
    }
  });

  describe('Text Alignment', () => {
    it('should default to being left aligned', () => {
      const { wrapper } = setup();

      expect(wrapper).toHaveStyleRule('text-align', 'left');
    });

    it('should accept other valid text-align values', () => {
      ['center', 'left', 'right'].forEach((alignment) => {
        const { wrapper } = setup({ align: alignment });

        expect(wrapper).toHaveStyleRule('text-align', alignment);
      });
    });
  });
});
