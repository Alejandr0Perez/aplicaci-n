import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Appbar, Card, Button } from 'react-native-paper';

const SubscriptionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Plan Suscripción" />
      </Appbar.Header>

      <View style={styles.content}>
        <Text style={styles.title}>
          ¡Disfruta de los múltiples beneficios con nuestras planes de suscripción!
        </Text>

        {/* Plan Mensual */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.planHeader}>
              <Text style={styles.planTitle}>PLAN MENSUAL</Text>
              <Text style={styles.price}>$50</Text>
            </View>
            <Text style={styles.planDescription}>
              ¡Adiós Anuncios! Al ser miembro mensual, se eliminan completamente los anuncios, así como recibirás descuentos exclusivos en los servicios extra que ofrecemos.
            </Text>
            <Button mode="contained" style={styles.button}>
              Ver más
            </Button>
          </Card.Content>
        </Card>

        {/* Plan Semestral */}
        <Card style={styles.card}>
          <Card.Content>
            <View style={styles.planHeader}>
              <Text style={styles.planTitle}>PLAN SEMESTRAL</Text>
              <Text style={styles.price}>$200</Text>
            </View>
            <Text style={styles.planDescription}>
              ¡Number One y Adiós Anuncios! Al ser miembro semestral, se eliminan completamente los anuncios, así como recibirás descuentos exclusivos en los servicios extra que ofrecemos.
            </Text>
            <Button mode="contained" style={styles.button}>
              Ver más
            </Button>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  planDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#2196F3',
  },
});

export default SubscriptionScreen;
