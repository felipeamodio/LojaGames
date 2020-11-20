import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Details from './pages/Details';
import Crash from './pages/Crash';
import Spider from './pages/Spider';
import Assassins from './pages/Assassins';
import Ellie from './pages/Ellie';
import Pokemon from './pages/Pokemon';
import Mario from './pages/Mario';
import Jedi from './pages/Jedi';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Nome"
                    //vai renderizar qual componente
                    //quando entrarmos nessa tela q é o Home
                    component={Home}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Details"
                    component={Details}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Crash"
                    component={Crash}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Spider"
                    component={Spider}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Assassins"
                    component={Assassins}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Ellie"
                    component={Ellie}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Pokemon"
                    component={Pokemon}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Mario"
                    component={Mario}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

                <Stack.Screen 
                    name="Jedi"
                    component={Jedi}
                    options={{
                        headerRight: () => (
                            <TouchableOpacity style={{ marginRight: 15 }}>
                                <Feather 
                                    name="shopping-cart"
                                    size={24}
                                    color="#000000"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />

            </Stack.Navigator>
            
        </NavigationContainer>

        
    )
}

export default Routes;