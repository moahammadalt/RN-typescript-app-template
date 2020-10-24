import React, { useEffect, useState, createContext } from 'react';
import { Alert } from 'react-native';

const LayoutContext = createContext({});

function LayoutProvider({ children }: any) {
  const [theme, setTheme] = useState('dark');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [successNotification, setSuccessNotification] = useState(false);
  const [headerComponent, setHeaderComponent] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert(error.message || 'some error happened');
    }
  }, [error]);

  const initialState = {
    theme,
    setTheme,
    loading,
    setLoading,
    error,
    setError,
    successNotification,
    setSuccessNotification,
    setHeaderComponent,
    headerComponent,
  };

  return <LayoutContext.Provider value={initialState}>{children}</LayoutContext.Provider>;
}

export { LayoutContext, LayoutProvider };
