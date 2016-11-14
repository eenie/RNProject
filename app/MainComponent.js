/**
 * Created by Eenie on 2016/11/14.
 */


import React, {Component, PropTypes} from 'react';


import {
    Text,
    View,
    StyleSheet,
    ToastAndroid,
    TouchableHighlight,
    Navigator,

} from 'react-native';
export default class MainComponent extends Component {


    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
    };


    render() {
        return (<View style={style.container}>
            <TouchableHighlight style={style.item} underlayColor={'lightblue'} onPress={()=> {
                if (this.props.navigator != null) {
                    this.props.navigator.push({title: 'Props Practice', index: 1});
                }
            }}>
                <Text>props、state、style</Text>
            </TouchableHighlight>
            <TouchableHighlight style={style.item} underlayColor={'lightblue'} onPress={()=> {
                ToastAndroid.show("item click", 1000);
            }}>
                <Text >flex</Text>

            </TouchableHighlight>
            <TouchableHighlight style={style.item} underlayColor={'lightblue'} onPress={()=> {

                ToastAndroid.show("item click", 1000);

            }}>
                <Text >View、Text</Text>
            </TouchableHighlight>
        </View>);
    }
};


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
