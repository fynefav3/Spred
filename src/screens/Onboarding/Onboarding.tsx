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
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

const Onboarding = () => {
  const colorScheme = useColorScheme();

  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(0);

  let orders = [
    'Browse through arrays of contents',
    'Download movies, series and others',
    'Watch your contents on demand',
    'Spread your contents to friends',
  ];

  onPageSelected = pageIndex => {
    setCurrentPage(pageIndex.nativeEvent.position);
    // console.log(pageIndex.nativeEvent.position);
    
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#353535',
        paddingHorizontal: 24,
      }}
    >
      <View style={{ flex: 1 }} />

      <Image
        style={{
          width: '100%',
          height: 220,
          resizeMode: 'contain',
        }}
        source={require('../../../assets/tv.png')}
      />
      <View style={{ height: 40 }} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        {orders.map((order, index) => {
          return (
            <View key={order}>
              <View
                style={{
                  backgroundColor: index === currentPage ? '#F45303' : '#C4C4C482',
                  height: 8,
                  width: 8,
                  marginRight: 10,
                  borderRadius: 10,
                }}
              />
            </View>
          );
        })}
      </View>
      <View style={{ height: 20 }} />
      <PagerView
        style={{ height: 100 }}
        initialPage={0}
        onPageSelected={this.onPageSelected}
      >
        <View
          key="1"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContents: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Browse through {'\n'}arrays of contents
          </Text>
          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 12,
              fontWeight: 400,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Contents on demand
          </Text>
        </View>

        <View key="2">
          <Text
            style={{
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Download movies, {'\n'}series and others
          </Text>
          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 12,
              fontWeight: 400,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Watch as you download
          </Text>
        </View>

        <View key="3">
          <Text
            style={{
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Watch your {'\n'}contents on demand
          </Text>
          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 12,
              fontWeight: 400,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Enjoy your movies
          </Text>
        </View>

        <View key="4">
          <Text
            style={{
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 400,
              marginBottom: 10,
              textAlign: 'center',
            }}
          >
            Spread your contents {'\n'} to friends
          </Text>
          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 12,
              fontWeight: 400,
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            Share your movies
          </Text>
        </View>
      </PagerView>
      <View style={{ flex: 1 }} />

      {/* this view holds the get started and login button */}
      <View style={{ paddingHorizontal: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <View
            style={{
              width: '100%',
              height: 46,
              backgroundColor: '#F45303',
              borderRadius: 23,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#f3f3f3',
                fontSize: 18,
                fontWeight: 400,
                textAlign: 'center',
              }}
            >
              Get Started
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ height: 20 }} />
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <View
            style={{
              width: '100%',
              height: 46,
              backgroundColor: '#353535',
              borderRadius: 23,
              borderWidth: 1,
              borderColor: '#F45303',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                color: '#f3f3f3',
                fontSize: 18,
                fontWeight: 400,

                textAlign: 'center',
              }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ height: 40 }} />
      <TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 24,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 16,
              fontWeight: 200,
              textAlign: 'center',
              flex: 1,
            }}
          >
            Privacy
          </Text>
          <View style={{ width: 1, height: 15, backgroundColor: '#f3f3f3' }} />

          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 16,
              fontWeight: 200,
              textAlign: 'center',
              flex: 1,
            }}
          >
            Help
          </Text>
          <View style={{ width: 1, height: 15, backgroundColor: '#f3f3f3' }} />

          <Text
            style={{
              color: '#f3f3f3',
              fontSize: 16,
              fontWeight: 200,
              textAlign: 'center',
              flex: 1,
            }}
          >
            FAQ
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
