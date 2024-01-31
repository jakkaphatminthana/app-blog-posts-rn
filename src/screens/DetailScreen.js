import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
// import { Context as blogContext } from "../context/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const DetailScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const targetId = navigation.getParam('id');
    const blogPost = state.find((blog) => blog.id === targetId);

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

DetailScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() =>
                navigation.navigate('Edit', { id: navigation.getParam('id') })
            }>
                <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>
        ),
    };
}

const style = StyleSheet.create({});

export default DetailScreen;