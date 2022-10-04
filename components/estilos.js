import * as React from 'react';
import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#FCFAFF',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    lineHeight: 12,
    marginLeft: 8,
  },
  opcaoUsuario: {
    borderBottomColor: '#DEE2E6',
    borderBottomWidth: 1,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  opcaoSenha: {
    borderBottomColor: '#DEE2E6',
    borderBottomWidth: 1,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  opcaoPagamento: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25,
  },
  icone: {
    backgroundColor: '#776ABC',
    padding: 12,
    borderRadius: 10,
  },
});

export default estilos;
