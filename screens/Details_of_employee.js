import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Details_of_employee = ({ route }) => {
    const { email, gender, name } = route.params
    return (
        <View style={styles.conatiner}>
            <Text style={styles.headertxt}>{name}</Text>
            <View style={styles.card}>
                <Text style={styles.innertxt}>Mail: {email}</Text>
                <Text style={styles.innertxt}>Gender: {gender}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headertxt: {
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        marginBottom: 10

    },
    innertxt: {
        color: 'black',
        fontSize: 18,
        marginStart:20,
        marginTop:10
    },

    card: {
        height: 120,
        width: 400,
        borderRadius: 10,
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: '#FFB6C1',


    }
})

export default Details_of_employee