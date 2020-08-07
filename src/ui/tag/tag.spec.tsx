import React from 'react';
import { mount } from 'enzyme';
import Tag from './tag.component';
import { ThemeProvider } from '../../providers/theme.provider';

describe('<Tag /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Tag>Text</Tag>
      </ThemeProvider>
    );

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should proper text and active prop', () => {
    const wrapper = mount(
      <ThemeProvider>
        <Tag active>Text</Tag>
      </ThemeProvider>
    );

    expect(wrapper.text()).toEqual('Text');
    expect(wrapper.find(Tag).first().prop('active')).toBeTruthy();
  });

  test('should handle onClick on Checkable Tag', () => {
    const onClick = jest.fn();

    const wrapper = mount(
      <ThemeProvider>
        <Tag.Checkable active onClick={onClick}>
          Text
        </Tag.Checkable>
      </ThemeProvider>
    );

    wrapper.find('CheckableTag').simulate('click');

    expect(wrapper.find('CheckableTag').prop('active')).toBeTruthy();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
