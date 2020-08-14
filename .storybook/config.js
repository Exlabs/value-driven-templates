import { configure } from '@storybook/react';

import '../public/animations.css';

configure(require.context('../', true, /\.stories\.tsx?$/), module);
