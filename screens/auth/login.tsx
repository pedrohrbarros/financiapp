import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput, Button, IconButton } from 'react-native-paper';
import theme from '../../hooks/use-theme';
import useAuth from '../../hooks/use-auth';
import { User } from '../../models/user';

const LoginScreen: React.FC = () => {
  const auth_hook = useAuth.getState()
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState<Pick<User, 'email' | 'password'> | null>(null)

  return (
    <KeyboardAvoidingView style={{ 
      flex: 1, 
      backgroundColor: theme.background.container,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40
    }} 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? -140 : 0}>
      
      <Image
        source={require('../../assets/images/icon.png')}
        style={{ width: 200, height: 200 }}
        resizeMode="contain"
      />
      
      <View style={{
        width: '100%',
        gap: 20
      }}>
        <TextInput
          label={<Text style={{ color: theme.font.dark }}>E-mail</Text>}
          placeholder="johndoe@example.com"
          value={user?.email}
          onChangeText={(email: string) => setUser({
            ...user,
            email,
            password: user?.password || ''
          })}
          mode="flat"
            activeUnderlineColor={theme.underline}
          underlineColor={theme.underline}
          outlineStyle={{ borderColor: theme.outline }}
          textColor={theme.font.dark}
          style={{ width: '100%', backgroundColor: theme.background.input }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label={<Text style={{ color: theme.font.dark }}>Password</Text>}
          value={user?.password}
          onChangeText={(password: string) => setUser({
            ...user,
            password,
            email: user?.email || ''
          })}
          mode="flat"
          activeUnderlineColor={theme.underline}
          underlineColor={theme.underline}
          secureTextEntry={!showPassword}
          outlineStyle={{ borderColor: theme.outline }}
          placeholderTextColor={theme.font.dark}
          textColor={theme.font.dark}
          style={{ width: '100%', backgroundColor: theme.background.input }}
          right={
            <TextInput.Icon 
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color={theme.font.dark}
            />
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            mode="elevated"
            style={{
              width: '48%',
              borderRadius: 15,
              backgroundColor: theme.button.primary,
             }}
            icon="login"
            labelStyle={{ color: theme.font.light }}
            disabled={!user?.email || !user?.password}
            onPress={() => {
              if (user?.email && user?.password) {
                auth_hook.login(user?.email, user?.password)
              }
            }}
          >
            <Text style={{ 
              color: theme.font.light,
              fontWeight: 'bold'
            }}>
              Login
            </Text>
          </Button>
          <Button
            mode="elevated"
            onPress={() => {}}
            style={{
              width: '48%',
              borderRadius: 15,
              backgroundColor: theme.button.secondary,
             }}
            labelStyle={{ color: theme.font.light }}
            icon="account-plus"
          >
            <Text style={{ color: theme.font.light }}>Register</Text>
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            marginTop: 20,
          }}
        >
          <IconButton
            icon="google"
            iconColor={theme.font.light}
            mode="contained"
            style={{
              backgroundColor: "#EA4335",
            }}
          />
          <IconButton
            icon="apple"
            iconColor={theme.font.light}
            mode="contained"
            style={{
              backgroundColor: "#000000",
            }}
          />
          <IconButton
            icon="instagram"
            iconColor={theme.font.light}
            mode="contained"
            style={{
              backgroundColor: "#E1306C",
            }}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen; 