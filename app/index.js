import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen';
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Meals Categories" screenOptions={{headerTintColor:'white', headerStyle:{backgroundColor:'#351401'} ,contentStyle:{backgroundColor:'#3f2f25'}}}>
        <Stack.Screen  name="Meals Categories" component={CategoriesScreen} options={{title:"All Categories"}}/>
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} options={{headerBackTitle:"All"}}/>
        <Stack.Screen name="Meal Details" component={MealDetailsScreen} options={{headerBackTitle:'Back'}}/>
        {/* <Stack.Screen name="Meals Overview" component={MealsOverviewScreen} options={({route, navigation})=>{
          const catName = route.params.categoryName;
          return {
            title: catName
          };
        }}/> */}
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    backgroundColor:"#000"
  }
})