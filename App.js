import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Analytics, Auth } from 'aws-amplify';

const App = () => {

  const myTokenReceivedHandler = (token) => {
    // Do something with the received token
    console.log("Device Token:-----------", deviceToken);
    setDeviceToken(token);
  };

  const handleButtonClick = async () => {
    // Update the endpoint
    await Analytics.updateEndpoint({
      address: 'kirankkittuchamy@gmail.com',
      channelType: 'EMAIL',
      optOut: 'NONE',
      userAttributes: {
        username: ['Kiran K']
      },
      userId: 'kirankkittuchamy@gmail.com',
    })
    // Send event
    await Analytics.record({
      name: 'TestMotionLearningApp',
      attributes: { user_name: 'Boopathi Raja', user_id: '203510' },
    });
  }


  return (
    <View style={styles.container}>
      <Button title="Press Me" onPress={() => { handleButtonClick() }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;