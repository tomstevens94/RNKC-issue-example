import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TextInput, TouchableOpacity} from 'react-native';
import {
  KeyboardAvoidingView,
  KeyboardProvider,
} from 'react-native-keyboard-controller';

const Screen1 = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
      }}>
      <Text>Screen 1</Text>
      <TouchableOpacity style={{backgroundColor: 'yellow', padding: 48}}>
        <Text>TEST BUTTON</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('screen2')}
        style={{backgroundColor: 'green', padding: 48}}>
        <Text>Go to screen 2</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const Screen2 = props => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
      }}>
      <Text>Screen 2</Text>
      <TextInput style={{backgroundColor: 'white', padding: 32, width: 100}} />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('screen1')}
        style={{backgroundColor: 'blue', padding: 48}}>
        <Text>Go to screen 1</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <KeyboardProvider statusBarTranslucent>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </KeyboardProvider>
  );
}

export default App;
