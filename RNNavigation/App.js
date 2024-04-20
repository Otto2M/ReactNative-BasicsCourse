import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./screens/ProfileScreen";
import CourseListScreen from "./screens/CourseListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";
import { DrawerMenu } from "./AppDrawer";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarLabelPosition: "below-icon",
            tabBarShowLabel: true,
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray"
        }}>
            <Tab.Screen name="Course List" component={CourseListScreen} 
                options={{
                    tabBarBadge: 2,
                    tabBarIcon: ({color, size}) => <Ionicons name="list" size={size} color={color}/>
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarLabel: "Moj profil",
                    tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color}/>
            }}/>
            <Tab.Screen name="Settings" component={SettingsScreen} 
                options={{
                    tabBarLabel: "Postavke",
                    tabBarIcon: ({color, size}) => <Ionicons name="settings" size={size} color={color}/>
            }}/>
            <Tab.Screen name="About Stack" component={AboutStack} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name="help" size={size} color={color}/>
                }}/>
            <Tab.Screen name="Drawer Menu" component={DrawerMenu} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => <Ionicons name="menu" size={size} color={color}/>
                }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}