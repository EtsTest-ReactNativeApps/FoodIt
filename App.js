import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{fontWeight: 'bold'}}>Login Page</Text>
      <View>
        <Text>Here user will login</Text>
        <Image
          source={{
            uri: 'https://www.pinclipart.com/picdir/middle/86-862588_mobi-food-logo-gif-clipart.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue="LoginId"
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 2
        }}
        defaultValue="Password"
      />
    </ScrollView>
  );
}

export default App;
