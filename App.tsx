import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Screen1 = (props: NativeStackScreenProps<any>) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    paddingBottom: interpolate(progress.value, [0, 1], [0, 200]),
  }));

  return (
    <Animated.View style={[styleSheet.screen1, animatedStyle]}>
      <Text>Screen 1</Text>
      <TouchableOpacity
        style={styleSheet.animateButton}
        onPress={() =>
          (progress.value = withTiming(progress.value === 0 ? 1 : 0))
        }>
        <Text>ANIMATE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('screen2')}
        style={styleSheet.button1}>
        <Text>Go to screen 2</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Screen2 = (props: NativeStackScreenProps<any>) => {
  return (
    <Animated.View style={styleSheet.screen2}>
      <Text>Screen 2</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('screen1')}
        style={styleSheet.button2}>
        <Text>Go to screen 1</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="screen1" component={Screen1} />
          <Stack.Screen name="screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styleSheet = StyleSheet.create({
  container: {flex: 1},
  screen1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  screen2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green',
  },
  animateButton: {backgroundColor: 'white', padding: 16},
  button1: {backgroundColor: 'yellow', padding: 48},
  button2: {backgroundColor: 'blue', padding: 48},
});
