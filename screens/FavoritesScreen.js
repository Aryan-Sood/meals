import MealList from "@/components/MealList/MealList";
import { useContext } from "react";
// import { FavoritesContext } from "@/store/context/favorites-context";
import { MEALS } from "@/data/dummy-data";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function FavoritesScreen({route,navigation}){

    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length===0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorites</Text>
            </View>
        );
    }

    return (
        <MealList items={favoriteMeals}/>
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:18,
        fontWeight:'bold'
    }
})