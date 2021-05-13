import React from 'react';

import {Text, View, SafeAreaView, Button} from 'react-native';

const Profile = (props) => {
  console.log('navigation data', props.navigation.navigate);

  return (
    <SafeAreaView>
      <View>
        <Text>HI this is a profile page</Text>
        <Button
          title="Go Education"
          onPress={() => props.navigation.navigate('Education')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
