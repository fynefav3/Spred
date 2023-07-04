import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  View,
  useColorScheme,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// bottom tab
import HomeIcon from '../../../assets/svg-components/home-icon';
import NewRelease from '../../../assets/svg-components/new-release';
import Downloads from '../../../assets/svg-components/download-icon';
import Spred from '../../../assets/svg-components/spred';

const Download = () => {
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
      {/* App bar starts here */}
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 20,
                height: 20,
                paddingHorizontal: 24,

                tintColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
              }}
              source={require('../../../assets/arrowLeft.png')}
            />
          </TouchableOpacity>
          <Text style={{ color: '#ffffff', fontSize: 14, fontWeight: 700 }}>
            Downloads
          </Text>
          <View style={{ flex: 1 }} />
          <Image
            style={{
              width: 24,
              marginRight: 10,
              height: 24,
            }}
            source={require('../../../assets/trash.png')}
          />
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
        </View>
        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 171 }}>
            <Image
              style={{
                height: 171,
                marginLeft: 20,
              }}
              source={require('../../../assets/ratnik.png')}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              Ratnik
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 300,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              115.24MB {'\n'} 2 hr 11 mins
            </Text>
          </View>
        </View>
        {/* first list ends here */}
        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 171 }}>
            <Image
              style={{
                height: 171,
                marginLeft: 20,
              }}
              source={require('../../../assets/guiltypleasure.png')}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              Guilty Pleasure
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 300,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              115.24MB {'\n'} 2 hr 11 mins
            </Text>
          </View>
        </View>
        {/* second list ends here */}
        <View style={{ height: 20 }} />
        <View style={{ height: 1, width: 414, backgroundColor: '#ffffff' }} />

        {/* after demacartation next view starts here */}

        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 171 }}>
            <Image
              style={{
                height: 171,
                marginLeft: 20,
              }}
              source={require('../../../assets/arbitration.png')}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              The Arbitration
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 300,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              1 hr 45 mins
            </Text>
          </View>
          <Image
            style={{
              height: 20,
              marginLeft: 20,
            }}
            source={require('../../../assets/download1.png')}
          />
        </View>
        {/* the third view ends here */}

        <View style={{ height: 20 }} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ height: 171 }}>
            <Image
              style={{
                height: 171,
                marginLeft: 20,
              }}
              source={require('../../../assets/affy.png')}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              Dear Affy
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 300,
                fontSize: 14,
                paddingHorizontal: 12,
              }}
            >
              1 hr 45 mins
            </Text>
          </View>
          <Image
            style={{
              height: 20,
              marginLeft: 20,
            }}
            source={require('../../../assets/download1.png')}
          />
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
      </ScrollView>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({});
