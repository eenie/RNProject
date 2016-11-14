import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    TouchableHighlight,
    Navigator
} from 'react-native';

import MainComponent from './MainComponent';
import PropsPractice from './PropsPractice';
import FirstScene from './FirstScene';


class Splash extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title: 'MainComponent', index: 0}}
                style={style.container}
                renderScene={this.renderNav}

                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper{
                    {
                        LeftButton: ()=> {
                            return (<Text>Cancel</Text>);
                        }
                    }

                    }

                        style={{backgroundColor: 'white'}}
                    />
                }
            >

            </Navigator>
        );
    }

    renderNav(route, navigator) {
        switch (route.index) {
            case 0:
                return <MainComponent title={"Props Practice"} navigator={navigator}/>;
            case 1:
                return <FirstScene onBack={()=> {
                    navigator.pop()
                }}/>;

        }
    }
}


var style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',

    },
});


export default Splash;