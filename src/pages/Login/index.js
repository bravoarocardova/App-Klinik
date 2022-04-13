import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors, fonts } from '../../utils';

export default function Login({ navigation }) {
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}>Masuk Dan Mulai Konsultasi</Text>
            <Input label="Email Address" />
            <Gap height={24} />
            <Input label="Password" />
            <Gap height={10} />
            <Link title="Forget My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
            <Gap height={30} />
            <Link
                title="Create My Account"
                size={16}
                align="center"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.white,
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153,
    },
})