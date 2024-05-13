import React from 'react';
import { Link } from 'expo-router';
import { SafeAreaView, View, TextInput, Text, Pressable } from 'react-native';
import { authStyles } from '@/assets/styles/authStyles';
import { useSignUp } from '@/hooks/useSignUp';

const Login = () => {
  const {
    signUpParams,
    setEmail,
    setPassword,
    setConfirmationPassword,
    sendSignUpRequest,
    error,
  } = useSignUp();

  return (
    <SafeAreaView style={authStyles.container}>
      <View style={authStyles.fieldsContainer}>
        <Text style={authStyles.title}>Зареєструвати акаунт</Text>
        <TextInput
          style={authStyles.input}
          autoCapitalize="none"
          placeholder="Емейл: "
          onChangeText={(email) => setEmail(email)}
          value={signUpParams.email}
        />
        <TextInput
          style={authStyles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Пароль: "
          onChangeText={(password) => setPassword(password)}
          value={signUpParams.password}
        />
        <TextInput
          style={authStyles.input}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Повторіть пароль: "
          onChangeText={(password) => setConfirmationPassword(password)}
          value={signUpParams.confirmPassword}
        />
        {error && <Text style={authStyles.error}>{error}</Text>}
        <Pressable
          onPress={() => sendSignUpRequest()}
          style={authStyles.button}
        >
          <Text style={authStyles.buttonText}>Зареєструватися</Text>
        </Pressable>
        <View style={authStyles.hintWrapper}>
          <Text style={authStyles.hintText}>Якщо маєте акаунт</Text>
          <Link replace href="/auth/login" style={authStyles.hintLink}>
            увійдіть тут
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
