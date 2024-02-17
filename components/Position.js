import * as Location from 'expo-location';
import Weather from './Weather'
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Position() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [message, setMessage] = useState('Retrieving location...');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            try {
                if (status != 'granted') {
                    setMessage("Location not permitted.")
                } else {
                    const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
                    setLongitude(position.coords.longitude)
                    setLatitude(position.coords.latitude)
                    setMessage('Location retrieved')
                }
            } catch (error) {
                setMessage("Error retrieving location.")
                console.log(error);
            }
            setIsLoading(false)
        })()
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.coords}>{latitude.toFixed(3)},{longitude.toFixed(3)}</Text>
            <Text style={styles.message}>{message}</Text>
            {isLoading === false &&
                <Weather latitude={latitude} longitude={longitude} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coords: {
        fontSize: 18,
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: 'gray',
    },
})


