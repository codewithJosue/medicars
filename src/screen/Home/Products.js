import { Screen } from "../../components";
import { FlatList, StyleSheet } from "react-native";
import { products } from "../../data/products";
import Card from "../../components/Card";
import colors from "../../config/colors";

const Products = () => {

  return (

    <Screen style={styles.screen}>
      <FlatList
        data={products}
        keyExtractor={listings => listings.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
        numColumns={2}
        columnWrapperStyle={styles.column}
      />
    </Screen>

  );
};

export default Products;

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
  column: {
    //flexShrink: 1,
    justifyContent: "space-between",
  },
});
