import React from 'react';
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native';

import Button from '../Button';
import { formatTime } from '../Utils';

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { time: 60 };
    }

    render() {
        const startTimer = () => {
            Alert.alert('You tapped the button!')
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {formatTime(this.state.time)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName={'play-circle'} onPress={startTimer} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        color: '#ffffff',
        fontSize: 120,
        fontWeight: '100'
    }
});

export default Timer;