import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import MyAds from './screens/MyAds';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DrawerItems from './constants/DrawerItems';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
            drawerType="front"
            initialRouteName="MyAds"
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: { marginVertical: 10 },
            }}

      >

      {
        DrawerItems.map(drawer=>
          <Drawer.Screen
            key={drawer.name}
            name={drawer.name}
          />
        )
       }

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
