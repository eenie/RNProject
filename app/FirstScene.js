/**
 * Created by Eenie on 2016/11/7.
 */


import React, {Component, PropTypes} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';


class FirstScene extends Component {


    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func,
        onBack: PropTypes.func
    };


    static get defaultProps() {
        return {
            title: 'FirstScene'
        };
    }

    render() {


        return (

            <View style={{flex: 1}}>
                <Text>Hi! This page is {this.props.title}.</Text>
                <TouchableHighlight onPress={this.props.onForward}
                underlayColor={'skyblue'}
                >
                    <Text>onForward</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onBack}
                                    underlayColor={'skyblue'}>
                    <Text>onBack</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default FirstScene;