import React, { useState } from 'react';
import { View, Image, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput, Button, useTheme, Icon, IconButton } from 'react-native-paper';

const LoginScreen: React.FC = () => {

  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView style={{ 
      flex: 1, 
      backgroundColor: theme.custom.background.container,
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
          label={<Text style={{ color: theme.custom.font.dark }}>E-mail</Text>}
          placeholder="johndoe@example.com"
          value={email}
          onChangeText={setEmail}
          mode="flat"
          activeUnderlineColor={theme.custom.underline}
          underlineColor={theme.custom.underline}
          outlineStyle={{ borderColor: theme.custom.outline }}
          textColor={theme.custom.font.dark}
          style={{ width: '100%', backgroundColor: theme.custom.background.input }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          label={<Text style={{ color: theme.custom.font.dark }}>Password</Text>}
          value={password}
          onChangeText={setPassword}
          mode="flat"
          activeUnderlineColor={theme.custom.underline}
          underlineColor={theme.custom.underline}
          secureTextEntry={!showPassword}
          outlineStyle={{ borderColor: theme.custom.outline }}
          placeholderTextColor={theme.custom.font.dark}
          textColor={theme.custom.font.dark}
          style={{ width: '100%', backgroundColor: theme.custom.background.input }}
          right={
            <TextInput.Icon 
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
              color={theme.custom.font.dark}
            />
          }
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Button
            mode="elevated"
            onPress={() => {}}
            style={{
              width: '48%',
              borderRadius: 15,
              backgroundColor: theme.custom.button.primary,
             }}
            icon="login"
            labelStyle={{ color: theme.custom.font.light }}
          >
            <Text style={{ 
              color: theme.custom.font.light,
              fontWeight: 'bold'
            }}>Login</Text>
          </Button>
          <Button
            mode="elevated"
            onPress={() => {}}
            style={{
              width: '48%',
              borderRadius: 15,
              backgroundColor: theme.custom.button.secondary,
             }}
            labelStyle={{ color: theme.custom.font.light }}
            icon="account-plus"
          >
            <Text style={{ color: theme.custom.font.light }}>Register</Text>
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
            iconColor={theme.custom.font.light}
            mode="contained"
            style={{
              backgroundColor: "#EA4335",
            }}
          />
          <IconButton
            icon="apple"
            iconColor={theme.custom.font.light}
            mode="contained"
            style={{
              backgroundColor: "#000000",
            }}
          />
          <IconButton
            icon="instagram"
            iconColor={theme.custom.font.light}
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