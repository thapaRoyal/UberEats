import { StatusBar, StyleSheet, View } from 'react-native';
import Basket from './src/screens/Basket';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrderDetails from './src/screens/OrderDetails';
import OrderScreen from './src/screens/OrdersScreen';
import RestaurantDetailsPage from './src/screens/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsScreen /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />

      <StatusBar style="light " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
