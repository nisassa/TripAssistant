import { StyleSheet } from 'react-native';

export const formStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: '#f8f9fa',
  },
  headerBar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignSelf: "stretch",
    alignItems: "stretch",
    paddingVertical: 5,
  },
  headerBarContainer: {
    paddingHorizontal: 3,
    height: 85,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3.65,
    elevation: 2,
  },
  tripItem: {
    fontSize: 22,
    width: 70,
    paddingVertical: 5,
    height: 70,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'darkgray',
    backgroundColor:'#fff',
    marginLeft: 5,
    marginRight: 5
  },
  tripContainer: {
    paddingVertical: 10
  },
  simpleText: {
    fontSize: 16,
    marginLeft: 10
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  addItemModal: {
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    borderRadius: 10,
    // marginTop: 60
  },
  addItemModalMask: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    borderTopWidth: 2,
    borderTopColor: "darkgray",
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    alignItems: 'center',
    justifyContent: "space-around",
  },
  tripItemContainer: {
      paddingVertical: 40,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: "stretch"
  },
  itemIcon: {
    color: "deepskyblue"
  },
  itemInput: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    backgroundColor: "#fff",
    alignSelf: "stretch",
    marginTop: 10,
    marginBottom: 10
  },
  successButon: {
    backgroundColor: "deepskyblue"
  },
  fullWidhtContainer: {
    width: '100%'
  }
})