import { getStorybookUI } from '@storybook/react-native';

import './rn-addons';

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;