import React from 'react';
import { Text, View } from 'react-native';

import { LayoutProvider, ServicesProvider } from '../../contexts';
import Router from '../Router';

interface Props {}

const AppContainer: React.FC<Props> = (props: Props) => {
  return (
    <LayoutProvider>
      <ServicesProvider>
        <Router />
      </ServicesProvider>
    </LayoutProvider>
  );
};

export default AppContainer;
