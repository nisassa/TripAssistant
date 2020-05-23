import { StyleSheet } from 'react-native';

export const userAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
    padding: 40,
    justifyContent: 'center',
  },
  currentAction: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'pink',
    padding: 20
  },
  button: {
    backgroundColor: 'deepskyblue',
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 80,
    marginTop: 10,
    justifyContent: "center",
    textAlign: "center"
  },
  goBackButtton: {
    fontSize: 50,
    justifyContent: "flex-start",
  },
  continueButton: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: "deepskyblue",
    marginTop: 10,
    textAlign: "center"
  },
  inputBox: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    backgroundColor: "#fff"
  },
  containerTitle: { 
    fontSize: 22,
    fontWeight: "bold",
    paddingVertical: 20,
    textAlign: "center"
  },
  orLoginText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: "center"
  },
  header: {
    padding:0,
    position: 'absolute',
    top: 20,
    paddingHorizontal: 40
  }
});