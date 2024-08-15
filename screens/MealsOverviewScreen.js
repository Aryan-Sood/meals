import { MEALS } from "@/data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from '../components/MealItem';

function MealsOverviewScreen({route}){
    const catId = route.params.categoryId;

    const dislayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })


    function renderMealItem(itemData){
        const mealItemProps = {
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={mealItemProps.affordability} complexity={mealItemProps.complexity} duration={mealItemProps.duration}/>
    }


    return <View style={styles.container}>
        <FlatList data={dislayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
}


export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})