import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS,CATEGORIES } from "@/data/dummy-data";
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from "react";
import IconButton from '../components/IconButton';

function MealDetailsScreen({route, navigation}){
    const mealId = route.params.mealId;
    const catId = route.params.catId;

    const selectedMeal = MEALS.find((meal)=>
        meal.id === mealId
    )

    const categoryTitle = CATEGORIES.find((category)=>category.id===catId).title;

    function headerButtonPressHandler(){
        console.log("Shared")
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerBackTitle:categoryTitle,
            headerRight: ()=> {return <IconButton icon='star' color='white' onPress={headerButtonPressHandler}/>}
        });
    }),[navigation, headerButtonPressHandler];  

    return (
        <ScrollView>
            <View style={styles.root}>
            <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} textStyle={styles.detailText}/>
            <View style={styles.listOuter}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps}/>
            </View>
            </View>
            </View>
        </ScrollView>
    );
}


export default MealDetailsScreen;


const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:"center",
        color:'white'
    },
    detailText:{
        color:'white'
    },
    subtitle:{
        color:'#e2b497',
        fontSize:18,
        fontWeight:'bold',
        textAlign:"center",
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        margin:4,
        marginHorizontal:12,
        marginVertical:6,
        borderBottomWidth:2,
        padding:6,
    },
    listContainer:{
        width:"80%"
    },
    listOuter:{
        alignItems:"center"
    },
    root:{
        paddingBottom:32
    }
})