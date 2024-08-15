import { MEALS,CATEGORIES } from "@/data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from '../components/MealItem';
import { useLayoutEffect } from "react";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;

    const dislayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(()=> {
        const categoryTitle = CATEGORIES.find((category)=>category.id===catId).title;
        navigation.setOptions({
            title: categoryTitle
    });
    },[catId, navigation])

    
    function renderMealItem(itemData){
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem id={mealItemProps.id} title={itemData.item.title} imageUrl={itemData.item.imageUrl} affordability={mealItemProps.affordability} complexity={mealItemProps.complexity} duration={mealItemProps.duration}/>
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