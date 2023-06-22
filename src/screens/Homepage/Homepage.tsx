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
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Home from '../../../assets/svg-components/home';
import Slide from '../../../assets/svg-components/slide';

// bottom tab
import HomeIcon from '../../../assets/svg-components/home-icon';
import NewRelease from '../../../assets/svg-components/new-release';
import Downloads from '../../../assets/svg-components/download-icon';
import Spred from '../../../assets/svg-components/spred';

const Homepage = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  //list for the movies
  const [images, setimages] = useState([
    { src: require('../../../assets/atlanta.png'), key: '1' },
    { src: require('../../../assets/stars.png'), key: '2' },
    { src: require('../../../assets/phoneswap.png'), key: '3' },
  ]);

  // list two
  const [imageTwo, setImageTwo] = useState([
    { src: require('../../../assets/broken.png'), key: '1' },
    { src: require('../../../assets/omoghetto.png'), key: '2' },
    { src: require('../../../assets/muna.png'), key: '3' },
  ]);
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: colorScheme === 'light' ? '#ffffff' : '#353535',
        flex: 1,
        paddingTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-evenly',
          paddingHorizontal: 10,
        }}
      >
        <Image
          style={{
            width: 24,
            marginRight: 10,
            height: 24,
          }}
          source={require('../../../assets/human.png')}
        />
        <Image
          style={{
            width: 24,
            marginRight: 10,
            height: 24,
          }}
          source={require('../../../assets/search.png')}
        />
        <Image
          style={{
            width: 24,
            marginRight: 10,
            height: 24,
          }}
          source={require('../../../assets/download.png')}
        />
        <Image
          style={{
            width: 48,
            marginRight: 10,
            height: 24,
          }}
          source={require('../../../assets/add.png')}
        />
        <View style={{ flex: 1 }} />
        <Image
          style={{
            width: 91,
            marginRight: 10,
            height: 28,
          }}
          source={require('../../../assets/spred.png')}
        />
      </View>
      <View style={{ height: 20 }} />

      {/* app bar ends here */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Home />
          <View
            style={{
              width: 24,
              height: 3,
              backgroundColor: '#ffffff',
              marginTop: 5,
            }}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: '400' }}>ORIGINAL</Text>
          <Text style={{ fontSize: 14, fontWeight: '400' }}>MOVIES</Text>
          <Text style={{ fontSize: 14, fontWeight: '400' }}>SERIES</Text>
          <Text style={{ fontSize: 14, fontWeight: '400' }}>SKIT</Text>
        </View>
        <Slide />
      </View>
      {/* slider ends here */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ flex: 1, paddingBottom: 10 }}
      >
        <View
          style={{
            backgroundColor: '#353535',
            paddingHorizontal: 10,
          }}
        >
          <View style={{ height: 20 }} />
          {/* first slider starts here */}
          <TouchableOpacity onPress={()=> navigation.navigate("PlayVideo")}>
          <View
            style={{
              height: 212,
              backgroundColor: '#ffffff',
              borderRadius: 5,
            }}
          >
            <Image
              style={{
                resizeMode: 'cover',
                justifyContent: 'center',
                height: 212,
              }}
              source={require('../../../assets/merrymen.png')}
            />
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ height: 20 }} />
      {/* First scroll sectiion starts */}
      <View>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: '#ffffff',
            paddingHorizontal: 12,
          }}
        >
          TOP SPRED ORIGINALS
        </Text>

        <View style={{ height: 171 }}>
          <FlatList
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={images}
            numColumns={3}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.key}
                // onPress={() => navigation.navigate("Order")}
              >
                <Image
                  source={item.src}
                  style={{
                    width: 100,
                    height: 170,
                    resizeMode: 'cover',
                    marginHorizontal: 8,
                    marginVertical: 12,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* first scroll ends here */}
        <View style={{ height: 20 }} />

        <View>
          <Text
            style={{
              fontWeight: 700,
              fontSize: 14,
              color: '#ffffff',
              paddingHorizontal: 12,
            }}
          >
            TOP MOVIES ON SPRED
          </Text>
        </View>

        <View style={{ height: 171 }}>
          <FlatList
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            legacyImplementation={false}
            data={imageTwo}
            numColumns={3}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.key}
                // onPress={() => navigation.navigate("Order")}
              >
                <Image
                  source={item.src}
                  style={{
                    width: 100,
                    height: 170,
                    resizeMode: 'cover',
                    marginHorizontal: 8,
                    marginVertical: 12,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>

      {/* Bottom nav bar */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HomeIcon />
          <Text style={{ fontSize: 8, color: '#ffffff' }}>HOME</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <NewRelease />
          <Text style={{ fontSize: 8, color: '#ffffff' }}>NEW RELEASE</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Downloads />
          <Text style={{ fontSize: 8, color: '#ffffff' }}>DOWNLOADS</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spred />
          <Text style={{ fontSize: 8, color: '#ffffff' }}>SPRED</Text>
        </View>
      </View>
      {/* Bottom nav bar ends */}
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
