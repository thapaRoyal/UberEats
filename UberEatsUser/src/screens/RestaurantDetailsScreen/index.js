import { Image, StyleSheet, Text, View } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import DishListItem from '../../components/DishListItem';
import { Ionicons } from '@expo/vector-icons';
const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subTitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -{' '}
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>

      <DishListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: 'absolute',
    top: 25,
    left: 15,
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 15,
    color: 'grey',
  },
  container: {
    margin: 10,
  },
});

export default RestaurantDetailsPage;
