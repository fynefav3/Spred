import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  View,
  useColorScheme,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { FontSize } from '../../theme/Variables';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');


  //field validation
  const handleInputChange = (text: string) => {
    setInputValue(text);
  };
  //password validation logic here

  const isPasswordValid = (password: string): boolean => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password,
    );
    const hasMinimumLength = password.length >= 8;

    return (
      hasUppercase &&
      hasLowercase &&
      hasDigit &&
      hasSpecialChar &&
      hasMinimumLength
    );
  };

  const validatePassword = () => {
    if (password !== rePassword) {
      setErrorTitle('Passwords do not match');
      setErrorMessage(' Enter your new password again');
      return;
    }
    if (inputValue.trim() === '') {
      Alert.alert('All  fields are required');
      
      return;
    }
    Alert.alert(`Input value: ${inputValue}`);


    const isValid = isPasswordValid(password);
    if (isValid) {
      setErrorTitle('');
      setErrorMessage('');
      navigation.navigate('SignIn');
    } else {
      setErrorTitle('Invalid password');
      setErrorMessage(
        'Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and have a minimum length of 8 characters.',
      );
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 40,
        width: '100%',
        height: '100%',
        backgroundColor: colorScheme === 'light' ? '#ffffff' : '#353535',
      }}
    >
      <StatusBar
        backgroundColor={colorScheme === 'light' ? '#ffffff' : '#050505'}
        barStyle="light-content"
      />
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 12,
              height: 24,
              paddingHorizontal: 24,

              tintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
            }}
            source={require('../../../assets/arrowLeft.png')}
          />
        </TouchableOpacity>
        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: 24,
          }}
        >
          <Text style={{ color: '#F45303', fontSize: 26, fontWeight: 500 }}>
            Join Spred
          </Text>
          <Text style={{ color: '#999999', fontSize: 18, fontWeight: 500 }}>
            Register to get started.
          </Text>
        </View>
        <View style={{ height: 40 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingHorizontal: 24,
          }}
        >
          <TextInput
            placeholder="First name"
            value={firstName}
            onChangeText={setFirstName}
            required={true}
            style={{
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: '#353535',
              width: '100%',
              height: 50,
              borderWidth: 1,
              borderColor: '#ffffff',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          />

          <TextInput
            placeholder="Second name"
            value={lastName}
            onChangeText={setLastName}
            required={true}
            style={{
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: '#353535',
              width: '100%',
              height: 50,
              borderWidth: 1,
              borderColor: '#ffffff',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder="Mobile No"
            value={number}
            onChangeText={setNumber}
            required={true}
            style={{
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: '#353535',
              width: '100%',
              height: 50,
              borderWidth: 1,
              borderColor: '#ffffff',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: '#353535',
              width: '100%',
              height: 50,
              borderWidth: 1,
              borderColor: '#ffffff',
              alignItems: 'center',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          />
          <TextInput
            placeholder="Re-Password"
            value={rePassword}
            onChangeText={setRePassword}
            secureTextEntry
            style={{
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
              backgroundColor: '#353535',
              width: '100%',
              height: 50,
              borderWidth: 1,
              borderColor: '#ffffff',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}
          />

          <View
            style={{
              justifyContent: 'flex-end',
              display: 'flex',
              flexDirection: 'row',
              //   paddingHorizontal: 10,
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={{ color: '#FCE2D5', fontWeight: 400, fontSize: 16 }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          {errorMessage === '' ? (
            <View />
          ) : (
            <View
              style={{
                width: '100%',
                marginBottom: 10,
                backgroundColor: '#878787',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24',
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 700, color: '#ffffff' }}>
                {errorTitle}
              </Text>
              <Text style={{ fontSize: 14, fontWeight: 400, color: '#ffffff' }}>
                {errorMessage}
              </Text>
            </View>
          )}

          <TouchableOpacity onPress={validatePassword}>
            <View
              style={{
                width: '100%',
                height: 61,
                backgroundColor: '#F45303',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  color: '#ffffff',
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                Register
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: 40 }} />
        <View
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <Text style={{ color: '#999999', fontSize: 16, fontWeight: 400 }}>
            Or register via
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              height: 50,
              width: 110,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('../../../assets/google.png')}
            />
          </View>
          <View
            style={{
              height: 50,
              width: 110,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('../../../assets/facebook.png')}
            />
          </View>
          <View
            style={{
              height: 50,
              width: 110,
              backgroundColor: '#ffffff',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Image
              style={{
                width: 20,
                height: 20,
              }}
              source={require('../../../assets/apple.png')}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: '#BDBDBD',
            height: 39,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#333333' }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: '#F45303' }}> Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
