import { useLogin } from '@/hooks/useLogin';
import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, View, TextInput, Text, Pressable } from 'react-native';
import { authStyles } from '@/assets/styles/authStyles';

const Login = () => {
  const { loginParams, setEmail, setPassword, sendLoginRequest, error } =
    useLogin();

  return (
    <SafeAreaView style={authStyles.container}>
      <View style={authStyles.fieldsContainer}>
        <Text style={authStyles.title}>Увійти в акаунт</Text>
        <TextInput
          style={authStyles.input}
          autoCapitalize="none"
          placeholder="Емейл: "
          onChangeText={(email) => setEmail(email)}
          value={loginParams.email}
        />
        <TextInput
          style={authStyles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Пароль: "
          onChangeText={(password) => setPassword(password)}
          value={loginParams.password}
        />
        {error && <Text style={authStyles.error}>{error}</Text>}
        <Pressable onPress={() => sendLoginRequest()} style={authStyles.button}>
          <Text style={authStyles.buttonText}>Увійти</Text>
        </Pressable>
        <View style={authStyles.hintWrapper}>
          <Text style={authStyles.hintText}>Якщо немаєте акаунта</Text>
          <Link replace href="/auth/sign_up" style={authStyles.hintLink}>
            cтворіть його
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
