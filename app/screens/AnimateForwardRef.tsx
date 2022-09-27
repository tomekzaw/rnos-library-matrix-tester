import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Button, StyleSheet, View} from 'react-native';

import React from 'react';

export type ChildHandle = {
  toggleState: () => void;
};

type ChildProps = {};

const Child = React.forwardRef<ChildHandle, ChildProps>((_, ref) => {
  const [state, setState] = React.useState(0);

  const toggleState = () => {
    setState(s => 1 - s);
  };

  const size = 50 + 50 * state;
  const backgroundColor = state ? 'lime' : 'red';

  React.useImperativeHandle(ref, () => {
    return {toggleState};
  });

  return (
    <View
      style={[styles.child, {width: size, height: size, backgroundColor}]}
    />
  );
});

export function AnimateForwardRef() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const ref = React.useRef<ChildHandle>(null);

  const style = useAnimatedStyle(() => {
    return {left: 200 * x.value, top: 200 * y.value};
  }, []);

  const handleToggleSharedValue = () => {
    x.value = withTiming(Math.random(), {duration: 500});
    y.value = withTiming(Math.random(), {duration: 500});
  };

  const handleToggleState = () => {
    ref.current?.toggleState();
  };

  return (
    <>
      <View style={styles.container}>
        <Animated.View style={[styles.parent, style]}>
          <Child ref={ref} />
        </Animated.View>
      </View>
      <Button onPress={handleToggleSharedValue} title="Toggle shared value" />
      <Button onPress={handleToggleState} title="Toggle state" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
  },
  parent: {
    alignSelf: 'flex-start',
    backgroundColor: 'black',
  },
  child: {
    margin: 15,
  },
});
