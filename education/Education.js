import React from 'react';

import {Text, View, SafeAreaView, Button} from 'react-native';

const Education = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HI this is a Education page</Text>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
        <Button
          title="Go Summary"
          onPress={() => props.navigation.navigate('Summary')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Education;
