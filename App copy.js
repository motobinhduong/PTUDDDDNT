import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,  } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Xử lý đăng nhập
  };

  return (
    <View style={styles.container}>
      
      <Image
        style={{width:300, height:300}}
        source={require('E:\PTUDDNT\logoreact.png')}
        
      />
      <Text style={styles.title}>Pokémon</Text>
      <Text style={styles.subTitle}>REGISTER</Text>
      <TextInput
        style={styles.input}
        placeholder="USERNAME"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="LOGIN" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default App;
