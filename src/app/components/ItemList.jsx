import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { AntDesign } from '@expo/vector-icons';
// para ter acesso as bibliotecas de ícones, entrar no link: https://icons.expo.fyi/Index

export default function Item({ navigation, title }) {

    const onPress = (name) => {
        navigation.navigate('details', name);
    }
    return (

        <TouchableOpacity onPress={() => { onPress(title) }}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <AntDesign name="right" size={25} color="#287271" />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#fbfbfb',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 4,
        borderWidth: 1,
        borderColor: '#287271',
        borderRadius: 15
    },
    title: {
        fontSize: 22,
    },
});