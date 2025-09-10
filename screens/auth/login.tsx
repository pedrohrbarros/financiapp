import React from 'react';
import { View } from 'react-native';
import { Switch, useTheme } from 'react-native-paper';
import { useAppTheme } from '../../hooks/use-theme';

const LoginScreen: React.FC = () => {
  const paperTheme = useTheme();
  const { isDark, toggleTheme } = useAppTheme();

  return (
    <View
      style={{
        backgroundColor: paperTheme.colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

export default LoginScreen; 