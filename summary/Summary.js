import React from 'react';

import {Text, View, SafeAreaView, Button} from 'react-native';

const Summary = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>HI this is a Summary page</Text>
        <Button title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default Summary;
