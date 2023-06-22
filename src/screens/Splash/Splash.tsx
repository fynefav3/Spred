import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
// import { useDispatch } from 'react-redux';
// import { useTranslation } from 'react-i18next';
// import { Brand } from '../../components';
// import { useTheme } from '../../hooks';
// import { useLazyFetchOneQuery } from '../../services/modules/users';
// import { changeTheme, ThemeState } from '../../store/theme';
// import i18next from 'i18next';

const Splash = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Loader");
    }, 2000);
  });
  // const { t } = useTranslation(['example', 'welcome']);
  // const {
  //   Common,
  //   Fonts,
  //   Gutters,
  //   Layout,
  //   Images,
  //   darkMode: isDark,
  // } = useTheme();
  // const dispatch = useDispatch();

  // const [fetchOne, { data, isSuccess, isLoading, isFetching }] =
  //   useLazyFetchOneQuery();

  // useEffect(() => {
  //   if (isSuccess && data?.name) {
  //     Alert.alert(t('example:helloUser', { name: data.name }));
  //   }
  // }, [isSuccess, data]);

  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

  // const onChangeLanguage = (lang: 'fr' | 'en') => {
  //   i18next.changeLanguage(lang);
  // };

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#353535',
        paddingHorizontal: 150
      }}
    >
      <View style={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          style={{ width: 120, height: 120 }}
          source={require('../../../assets/logo.png')}
        />
      </View>
    </View>
  );
};

export default Splash;
