/**
 * Created by Eenie on 2016/11/7.
 */


import React, {Component} from 'react';
import {View, Text} from 'react-native'

class PropsPractice extends Component {

    static get defaultProps() {
        return {
            title: 'PropsPractice'
        };
    }

    render() {
        return (
            <View>
                <Text>Hi! this page is {this.props.title}.</Text>
            </View>
        )
    }
}

export default PropsPractice;