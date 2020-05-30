import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f8f9fa',
    paddingTop: 20
  },
  touchableOpacityCenter: {
    borderWidth:1,
    borderColor:'darkgray',
    alignItems:'center',
    justifyContent:'center',
    width: 50,
    height: 50,
    backgroundColor:'#fff',
    borderRadius: 50,
    alignSelf: 'flex-end',
    position: "absolute",
    bottom: 20,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
  addButton: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
  },
  goBackButtton: {
    fontSize: 35,
    paddingHorizontal: 20,
    width: 80,
    alignSelf: "center"
  }
});