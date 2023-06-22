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
import { useNavigation } from '@react-navigation/native';
import Video from 'react-native-video';

const PlayVideo = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 12,
                height: 24,
                // paddingHorizontal: 24,

                tintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
              }}
              source={require('../../../assets/arrowLeft.png')}
            />
          </TouchableOpacity>

          <Image
            style={{
              width: 24,
              marginRight: 10,
              height: 24,
              tintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
            }}
            source={require('../../../assets/search.png')}
          />
        </View>
        <View style={{ height: 20 }} />
        {/* video playing begins here */}
        <View
          style={{
            height: 212,
            backgroundColor: '#ffffff',
            borderRadius: 5,
          }}
        >
          <Video
            source={{ uri: 'https://youtu.be/uC7TkC4n0cw' }} // Replace with your video URL or local file path
            style={{ height: 200 }} // Set the desired width and height of the video component
            controls={true} // Display playback controls (optional)
            resizeMode="contain" // Set the video's resizeMode (optional)
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlayVideo;

const styles = StyleSheet.create({});
