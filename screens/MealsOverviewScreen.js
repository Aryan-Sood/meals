import { MEALS,CATEGORIES } from "@/data/dummy-data";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import MealList from '../components/MealList/MealList';

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

    
    return (
        <MealList items={dislayedMeals} />
    );
}


export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})