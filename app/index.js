import {StyleSheet, Text, View } from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FavoritesContextProvider from "../store/context/favorites-context";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerHandler(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All Categories" component={CategoriesScreen} options={{drawerIcon: ()=> <MaterialCommunityIcons name="food-variant" size={22} color="black" /> }}/>
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{drawerIcon: () => <AntDesign name="star" size={20} color="black" />}}/>
    </Drawer.Navigator>
  );
}

export default function Index() {
  return (
    <>
    <StatusBar style="dark" />
    <FavoritesContextProvider>
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Categories" screenOptions={{headerTintColor:'white', headerStyle:{backgroundColor:'#351401'} ,contentStyle:{backgroundColor:'#3f2f25'}}}>
        <Stack.Screen  name="Categories" component={DrawerHandler} options={{title:"All Categories", headerShown:false}}/>
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} options={{headerBackTitle:"All"}}/>
        <Stack.Screen name="Meal Details" component={MealDetailsScreen} options={{headerBackTitle:'Back'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}


const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:"#000"
  }
})