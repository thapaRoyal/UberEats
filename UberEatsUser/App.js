import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* restaurant item */}
      <View style={styles.restaurantContainer}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
        <Text style={styles.subTitle}>Rs. 399.00 | 15-30 minutes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  restaurantContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  subTitle: {
    color: 'grey',
  },
});
