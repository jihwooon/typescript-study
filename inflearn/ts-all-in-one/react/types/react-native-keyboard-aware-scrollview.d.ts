import * as React from 'react';

declare module 'react-native-keyboard-aware-scrollview' {
  class KeyboardAwareScrollViewComponent extends React.Component<ViewProps> { }
  class KeyboardAwareScrollView extends KeyboardsAwareScrollViewComponent { }
  export { KeyboardAwareScrollView }
}
