import React from 'react';
import { Header } from 'react-native-elements';

function AppHeader(props) {
    return (
        <Header
            leftComponent={props.leftComponent}
            centerComponent={{
                text: props.headerTitle, style: {
                    color: '#000',
                    fontSize: 16,
                }
            }}
            // rightComponent={{ text: 'Go next button', style: { color: '#fff' } }}
            containerStyle={{
                backgroundColor: 'deepskyblue',
                justifyContent: 'space-around',
            }}
        />
    )
}

export default AppHeader;