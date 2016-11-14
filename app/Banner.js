/**
 * Created by Eenie on 2016/11/4.
 */


import React, {Component} from 'react';
import {Text} from 'react-native';

class Banner extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}




export default Banner;
