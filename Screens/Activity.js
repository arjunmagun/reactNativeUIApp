import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const { width, height } = Dimensions.get('window');

const activities = [
    {
        personimage: "https://images.unsplash.com/photo-1606828368219-df8086d2f9a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        activityMsg: "Ishan.arora commented on your picture: Nice pic",
        activityImage: "https://images.unsplash.com/photo-1606822366843-ddbe57506e98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
        personimage: "https://images.unsplash.com/photo-1606802523486-7fb118e84b8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        activityMsg: "Tagged you in his picture",
        activityImage: "https://images.unsplash.com/photo-1586695263077-6a2f79de6b09?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
    }
]

export default function Activity() {

    return (
        <View>
        {activities.map(activity=> {
        return (
            <View style={styles.contianer}>
            <View style={styles.activityContainer}>
                <Image style={styles.dp} source={{uri: activity.personimage}} />
                <Text style={styles.activityText}>{activity.activityMsg}</Text>
                <Image style={styles.activityImage} source={{uri: activity.activityImage}}/>
            </View>
            </View>
        )
        })}
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        backgroundColor: "#EEEEEE",
        // width: width,
        // height: height
    },
    activityContainer: {
        width: width / 0.4,
        height: height / 12,
        backgroundColor: "#cfd3ce",
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 1
    },
    dp: {
        width: width / 6,
        height: 65,
        borderRadius: 50,
        marginHorizontal: 10
    },
    activityText: {
        width: width / 1.7,
        fontSize: 15,
        marginVertical: 5
    },
    activityImage: {
        width: width / 6.5,
        height: 60,
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    }
})