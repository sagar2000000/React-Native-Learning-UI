import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme()=='light';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hellllooooo world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',  
    backgroundColor: '#000000'
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
});

export default AppPro;
