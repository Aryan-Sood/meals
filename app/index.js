import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen';
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from '../screens/MealsOverviewScreen'; 


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer independent={true}>

      <Stack.Navigator initialRouteName="Meals Categories">
        <Stack.Screen  name="Meals Categories" component={CategoriesScreen}/>
        <Stack.Screen name="Meals Overview" component={MealsOverviewScreen}/>
      </Stack.Navigator>

      {/* <View style={styles.rootContainer}>  
    <CategoriesScreen/>
      </View> */}
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