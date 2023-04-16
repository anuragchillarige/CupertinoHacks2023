import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateEventScreen from "./screens/CreateEventScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
        <Stack.Screen
					name="CreateEvent"
					component={CreateEventScreen}
					options={{ title: "CreateEvent" , headerShown: false}}
				/>
        <Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{ title: "Login" , headerShown: false}}
				/>
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ title: "Login" }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Nice", headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
