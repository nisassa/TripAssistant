import { StyleSheet } from 'react-native';

export const userAccountStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 40,
    paddingTop: 0,  
    justifyContent: 'center',
    zIndex: 9,
    overflow: 'hidden'

  },
  currentAction: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: '#f8f9fa',
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
    paddingHorizontal: 20,
    width: 80,
    alignSelf: "center"
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
    position: "absolute",
    top: 0,
    paddingTop: 30,
    zIndex: 10,
    backgroundColor: "#f8f9fa",
    alignSelf: 'center',
    width: "100%"
  },
  errorText: {
    margin: 5,
    color: 'indianred'
  },
  errorMessage: {
    fontSize: 18,
    color: "indianred",
    textAlign: "center",
    justifyContent: "center"
  },
  successMessage: {
    fontSize: 18,
    color: "darkgreen",
    textAlign: "center",
    justifyContent: "center"
  },
  lottie: {
    width: 100,
    height: 100
  }
  
});