import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import SignUp from "./screens/SignUp";
import CreateEventScreen from "./screens/CreateEventScreen";
import Settings from "./screens/Settings";
import MyEventScreen from "./screens/MyEventScreen";
import CheckInternetScreen from "./screens/CheckInternetScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="CheckInternet"
					component={CheckInternetScreen}
					options={{headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ title: "Nice", headerShown: false }}
				/>
				<Stack.Screen
					name="CreateEvent"
					component={CreateEventScreen}
					options={{ title: "CreateEvent", headerShown: false }}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUp}
					options={{ title: "Sign Up", headerShown: false }}
				/>
				<Stack.Screen
					name="Settings"
					component={Settings}
					options={{ title: "Settings" }}
				/>

				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ title: "Login", headerShown: false }}
				/>

				<Stack.Screen
					name="Sign Up"
					component={SignUp}
					options={{ title: "Sign Up" }}
				/>
				<Stack.Screen
					name = "MyEvents"
					component = {MyEventScreen}
					options = {{title: "MyEvents", headerShown: false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
