import React from 'react';
import { mount } from 'enzyme';
import { TemplateThumbnail } from './template-thumbnail.component';
import { ThemeProvider } from '../../../providers/theme.provider';
import Tag from '../../../ui/tag/tag.component';

const wrapComponent = (props = {}) => {
  const defaultProps = {
    title: '#Title',
    description: '#Description',
    tags: ['#tag'],
    icon: 'adr',
    templateUrl: '/',
  };

  return mount(
    <ThemeProvider>
      <TemplateThumbnail {...defaultProps} {...props} />
    </ThemeProvider>
  );
};

describe('<TemplateThumbnail /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render passed props', () => {
    const title = '#Title';
    const description = '#Description';
    const templateUrl = '/url';

    const wrapper = wrapComponent({
      title,
      description,
      templateUrl,
    });

    expect(wrapper.find('h3').first().text()).toEqual(title);
    expect(wrapper.find('p').first().text()).toEqual(description);
    expect(wrapper.find(TemplateThumbnail).prop('templateUrl')).toEqual(templateUrl);
  });

  test('should render tags properly', () => {
    const tags = ['#tag-1', '#tag-2', '#tag-3'];

    const wrapper = wrapComponent({
      tags,
    });

    expect(wrapper.find(Tag)).toHaveLength(tags.length);

    expect(wrapper.find(Tag).map((tag) => tag.text())).toEqual(tags);
  });
});
