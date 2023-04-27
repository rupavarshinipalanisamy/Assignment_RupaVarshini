import EmployeeNameList from "./screens/employee_name_list";
import Details_of_employee from "./screens/Details_of_employee";
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const NavigationPage = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="employee_name_list" component={EmployeeNameList} options={{ headerShown: false }} />
                <Stack.Screen name="details_of_employee" component={Details_of_employee} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationPage