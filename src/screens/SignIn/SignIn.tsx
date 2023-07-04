import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  useColorScheme,
  ImageBackground,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //login validation
  const isNumberValid = (number: string): boolean => {
    const hasMinimumLength = number.length < 11;

    return !hasMinimumLength;
  };

  const validateNumber = () => {
    if (number === '') {
      setErrorTitle('Incorrect mobile number/password,');
      setErrorMessage(' please try again');
      return;
    }

    const isValid = isNumberValid(number);
    if (isValid) {
      setErrorTitle('');
      setErrorMessage('');
      navigation.navigate('dashboard');
    } else {
      setErrorTitle('Incorrect mobile number/password,');
      setErrorMessage(' please try again');
    }
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: colorScheme === 'light' ? '#ffffff' : '#353535',
        flex: 1,
      }}
    >
      <ImageBackground
        source={require('../../../assets/background.png')}
        style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
      >
        <View
          style={{
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 12,
                marginTop: 40,
                height: 24,
                marginBottom: 30,
                paddingHorizontal: 24,
                tintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
              }}
              source={require('../../../assets/arrowLeft.png')}
            />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{
                width: '80%',
                height: 80,
                marginBottom: 30,
              }}
              source={require('../../../assets/logo1.png')}
            />
          </View>
          <View style={{ height: 20 }} />

          {errorMessage === '' ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingHorizontal: 24,
                marginBottom: 30,
              }}
            >
              <Text style={{ color: '#F45303', fontSize: 26, fontWeight: 500 }}>
                Welcome to Spred
              </Text>
              <Text style={{ color: '#999999', fontSize: 18, fontWeight: 500 }}>
                Enter your credentials to continue
              </Text>
            </View>
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
              <Text style={{ fontSize: 16, fontWeight: 400, color: '#ffffff' }}>
                {errorTitle}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: 400, color: '#ffffff' }}>
                {errorMessage}
              </Text>
            </View>
          )}

          <View style={{ height: 40 }} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              height: 400,
              width: '100%',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#333333',
                height: 400,
                width: '100%',
                paddingHorizontal: 24,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',

                  marginTop: 60,
                }}
              >
                <TextInput
                  placeholder="Mobile No"
                  value={number}
                  onChangeText={setNumber}
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
                    // marginBottom: 20,
                  }}
                />
              </View>

              <View
                style={{
                  justifyContent: 'flex-end',
                  display: 'flex',
                  flexDirection: 'row',
                  //   paddingHorizontal: 10,
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  <Text
                    style={{ color: '#FCE2D5', fontWeight: 400, fontSize: 16 }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={validateNumber}>
                <View
                  style={{
                    width: '100%',
                    height: 60,
                    backgroundColor: '#F45303',
                    justifyContent: 'center',
                    paddingHorizontal: 24,
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
              <View style={{ height: 40 }} />
              <View
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 5,
                }}
              >
                <Text
                  style={{ color: '#999999', fontSize: 16, fontWeight: 400 }}
                >
                  Or connect via
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: 20,
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
                    // marginBottom: 20,
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
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#BDBDBD',
              height: 50,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: '#333333' }}>Don’t have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ color: '#F45303' }}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
