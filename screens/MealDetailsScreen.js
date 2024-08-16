import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS,CATEGORIES } from "@/data/dummy-data";
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useContext, useLayoutEffect } from "react";
import IconButton from '../components/IconButton';
// import { FavoritesContext } from "@/store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/store/redux/favorites";

function MealDetailsScreen({route, navigation}){
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=>state.favoriteMeals.ids);
    const mealId = route.params.mealId;
    const catId = route.params.catId;

    const selectedMeal = MEALS.find((meal)=>
        meal.id === mealId
    )

    // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);
    const dispatch = useDispatch();

    var categoryTitle = "";

    if (catId!==""){
        categoryTitle = CATEGORIES.find((category)=>category.id===catId).title;
    }

    function changeFavoriteStatusHandler(){
        if (mealIsFavorite){
            // favoriteMealsCtx.removeFavorites(mealId);
            dispatch(removeFavorite({id: mealId}));
        }
        else{
            // favoriteMealsCtx.addFavorites(mealId);
            dispatch(addFavorite({id: mealId}));
        }
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerBackTitle:categoryTitle === "" ? "Back" : categoryTitle,
            headerRight: ()=> {return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color='white' onPress={changeFavoriteStatusHandler}/>}
        });
    }),[navigation, changeFavoriteStatusHandler];  

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