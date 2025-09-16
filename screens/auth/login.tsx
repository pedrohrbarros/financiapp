import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput, useTheme, IconButton, Button } from 'react-native-paper';

const LoginScreen: React.FC = () => {
  const paperTheme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView style={{ 
      flex: 1, 
      backgroundColor: paperTheme.colors.background,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40
    }} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? -140 : 0}>
      
      <Image
        source={require('../../assets/images/splash-icon.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      
      <View style={{
        width: '100%',
        gap: 20
      }}>
        <TextInput
          label={<Text style={{ color: paperTheme.colors.primary }}>E-mail</Text>}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          outlineStyle={{ borderColor: paperTheme.colors.primary }}
          placeholderTextColor={paperTheme.colors.primary}
          textColor={paperTheme.colors.primary}
          style={{ width: '100%' }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label={<Text style={{ color: paperTheme.colors.primary }}>Password</Text>}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry={!showPassword}
          outlineStyle={{ borderColor: paperTheme.colors.primary }}
          placeholderTextColor={paperTheme.colors.primary}
          textColor={paperTheme.colors.primary}
          style={{ width: '100%' }}
          right={
            <TextInput.Icon 
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color={paperTheme.colors.primary}
            />
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            mode="contained"
            onPress={() => {}}
            style={{ width: '48%', borderRadius: 2 }}
            labelStyle={{ color: paperTheme.colors.surface }}
          >
            <Text style={{ color: paperTheme.colors.surface }}>Login</Text>
          </Button>
          <Button
            mode="contained"
            onPress={() => {}}
            style={{ width: '48%', borderRadius: 2,
             }}
            labelStyle={{ color: paperTheme.colors.surface }}
          >
            <Text style={{ color: paperTheme.colors.surface }}>Register</Text>

          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen; 