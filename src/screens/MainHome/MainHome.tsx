import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { useFetch } from '../../hooks';

import { ServicesContext } from '../../contexts';

interface MainHomeProps {}

const MainHome: React.FC<MainHomeProps> = (props: MainHomeProps) => {
  const { SomeService } = useContext(ServicesContext);
  const { data: menuData, loading, doFetch } = useFetch({ defaultValue: {} });

  const getMenu = async () => {
    doFetch({
      serviceCaller: SomeService.getData,
      onSuccess: (data: any) => {
        console.log('data: ', data);
      },
    });
  };

  useEffect(() => {
    getMenu();
  }, []);

  return <Text>MainHome</Text>;
};

export default MainHome;
