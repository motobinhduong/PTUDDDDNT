import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Modal } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //1
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogin = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./assets/logoreact.png')} 
        style={styles.backgroundImage}
        resizeMode="stretch"  
      />

      
      <View style={styles.contentContainer}>
        <Image
          source={require('./assets/logoreact.png')} 
          style={styles.pokemonLogo}
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
       
      <Modal
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Thông tin đăng nhập:</Text>
          <Text style={styles.modalText}>Tên người dùng: {username}</Text>
          <Text style={styles.modalText}>Mật khẩu: {password}</Text>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonLogo: {
    marginBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"#FFFFFF" 
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'right',
    color:"#FFFFFF"
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    color:"#FFFFFF"
  },

  modal: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    padding: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default App;
