import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Button, Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';


Notifications.setNotificationHandler({
    handleNotifications: async ()=> ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export function NotifyMe() {
    const [pushToken, setPushToken] = useState('')
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListerner = useRef();

    useEffect(() => {
        registerForPushNotificationAsync().then(token => setPushToken(token));

        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification)
        })

        responseListerner.current = Notifications.addNotificationResponseReceivedListener(response=> {
            console.log(response);
        })
        return () => {
            Notifications.removeNotificationSubscription(notificationListener)
            Notifications.removeNotificationSubscription(responseListerner)
        }
    }, [])

    const handle = () => {
        console.log(Constants.isDevice);
    }

    return (
        <View>
            <Text> Your expo push token: {pushToken}</Text>
            <Button title='Send Notification' onPress={async ()=> {
                await sendPushNotification(pushToken)
            }} />
        </View>
    )
}


export async function sendPushNotification(pushToken){
    const message = {
        to: pushToken,
        sound: 'default',
        title: 'SOMEONE FOLLOWED U ON THIS NEW APP',
        body: 'This is my first notification',
        priority: 'high',
        data: {data: 'goes here'},
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message),
    });
}

async function registerForPushNotificationAsync(){
    let token;
    if(Constants.isDevice){
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if(existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if( finalStatus !== 'granted'){
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('this is not a physical device or a smartphone');
    }

    if(Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'defualt',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C', 
        });
    }

    return token;
}