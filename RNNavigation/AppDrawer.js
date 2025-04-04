// App.js
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} 
                options={{title: "My Dashboard", 
                drawerLabel: "Dashboard label",
                drawerActiveTintColor: "#333",
                drawerActiveBackgroundColor: "white",
                drawerContentStyle: {
                    backgroundColor: "#c6cbef"
                }}}/>
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

export default function AppDrawer() {
    return (
        <NavigationContainer>
            <DrawerMenu />
        </NavigationContainer>
    )
}