import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({id, title, imageUrl, affordability, duration, complexity}){

    const navigation = useNavigation();
    const route = useRoute();

    const catId = route.params?.categoryId || "";

    function selectMealItemHandler(){
        
        navigation.navigate('Meal Details', {
        mealId: id,
        catId:catId
    });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItemHandler} android_ripple={{color:'#ccc'}} style={({pressed}) => pressed ? styles.buttonPressed : null}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails affordability={affordability} complexity={complexity} duration={duration} />
            </Pressable>
        </View>
    );
}


export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS==='android' ? 'hidden' : 'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.3,
        shadowRadius:6
    },
    image:{
        width:"100%",
        height:200
    },
    title:{
        fontWeight:'bold',
        textAlign:"center",
        fontSize:18,
        margin:8
    },
    details:{
        flexDirection:"row",
        alignItems:"center",
        padding:8,
        justifyContent:"space-between"
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12 
    },
    innerContainer:{
        borderRadius:8,
        overflow: 'hidden'
    },
    buttonPressed:{
        opacity:0.5
    }
})