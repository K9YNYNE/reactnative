import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
 
const numColumns = 2; // Número de colunas
const size = Dimensions.get('window').width / numColumns; // Tamanho das células
 
const App = () => {
  const compras = [
    { id: '1', title: 'Leite', comprado: true },
    
    { id: '3', title: 'Ovos', comprado: true },
    { id: '5', title: 'Açúcar', comprado: true },
    { id: '6', title: 'Manteiga', comprado: true },
    { id: '8', title: 'Arroz', comprado: false },
    { id: '2', title: 'Feijão', comprado: false },
    { id: '4', title: 'Café', comprado: false },
    { id: '7', title: 'Pão', comprado: false },
  ];
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <FlatList
        data={compras}
keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={item.comprado ? styles.itemComprado : styles.itemNaoComprado}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        numColumns={numColumns}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 50,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  itemComprado: {
    backgroundColor: '#4caf50', 
    justifyContent: 'center',
    alignItems: 'center',
    width: size, 
    height: size, 
    margin: 10, 
  },
  itemNaoComprado: {
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    margin: 10,
  },
  itemText: {
    fontSize: 18,
    color: '#fff', 
  },
});
 
export default App;
