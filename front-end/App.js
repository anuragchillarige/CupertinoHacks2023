import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateEventScreen from "./screens/CreateEventScreen";
import Login from "./screens/Login";
import Settings from "./screens/Settings";
import SignUp from "./screens/SignUp";

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
					name="Settings"
					component={Settings}
					options={{ title: "Settings" }}
				/>

				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ title: "Login" }}
				/>

				<Stack.Screen
					name="Sign Up"
					component={SignUp}
					options={{ title: "Sign Up" }}
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
