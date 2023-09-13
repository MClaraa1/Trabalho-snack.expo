import { Text, View, StyleSheet, Image } from 'react-native';

import Untitledfile from './Untitledfile'
export default function AssetExample() {
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
       Em um reino mágico onde vive a pequena Moranguinho!
      </Text>

      <Image style={styles.logo} source={require('../assets/MORANGUINHO LOGO.jpg')} />
      <Image style={styles.logo} source={require('../assets/moranguinho.webp')} />
      <Image style={styles.logo} source={require('../assets/morango2.jpg')} />

      <Untitledfile />
 </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'pink',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
    marginTop: 30,
  }
});
