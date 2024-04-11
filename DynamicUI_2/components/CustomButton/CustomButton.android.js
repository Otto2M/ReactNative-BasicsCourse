import React from "react";
import {Text, View, Pressable} from "react-native"

const CustomButton = ({ onPress, title}) => {
    <Pressable
    onPress={onPress}
    style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 5,
        padding: 10,
    }}
    >
        <Text style={{color: "gray", fontSize: 18}}>{title}</Text>
    </Pressable>
};

export default CustomButton;