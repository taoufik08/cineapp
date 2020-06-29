
import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';
import Search from '../Components/Search'
import Accueil from '../Components/Accueil'
import DetailsScreen from '../Components/FilmDetail'



function Research({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Search/>
      <Button transparent full
        title="Accueil"
        onPress={() => navigation.navigate('Home')}
      >
            <Text style={{color:'black'}}><Icon name='home' />  Accueil</Text>
      </Button>
    </View>
  );
}
function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
        <Button transparent full
          title="Recherche"
          onPress={() => navigation.navigate('Recherche')}
        >
              <Text style={{color:'black'}}><Icon name='search' />  Recherche</Text>
        </Button>
        <Accueil/>
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  React.useEffect(() => {
    return () => (isReadyRef.current = false);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}  onReady={() => { isReadyRef.current = true; }} >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'CineApp',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: 'black',
        }}/>
        <Stack.Screen name="Recherche" component={Research}
        options={{
          title: 'Recherche',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: 'black',
        }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
