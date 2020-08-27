import { StyleSheet } from 'react-native';

export const tripStyles = StyleSheet.create({
  tripTypeContainer: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
    paddingHorizontal: 60
  },
  tripPurpose: {
    fontSize: 20,
    paddingBottom: 20,
    textAlign: "center",
    lineHeight: 30
    
  },
  tripTypebutton: {
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "darkgray",
    borderWidth: 2,
    borderColor: "darkgray",
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: '#fff'
  }
})