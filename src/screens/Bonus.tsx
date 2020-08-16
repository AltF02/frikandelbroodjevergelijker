import React from "react";
import Winkel from "../components/Winkel";
import {ScrollView, Image, Text, View} from "react-native";

export default class Bonus extends React.Component<any, any> {
    render() {
        return (
            <View>
                <ScrollView>
                    <Winkel
                        text="Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Vivamus gravida, metus eleifend
                        vulputate fringilla, ligula odio vehicula tortor,
                        ut iaculis nulla eros id turpis."
                        winkel="ah"
                    />
                </ScrollView>
            </View>
        )
    }
}
