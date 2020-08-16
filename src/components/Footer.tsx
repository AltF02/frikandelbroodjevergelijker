import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnimatedTabBar, { TabsConfig } from '@gorhom/animated-tabbar'
import Winkels from "../screens/Winkels";
import Bonus from "../screens/Bonus";
import HomeSVG from "../svg/StoreSVG";
import BonusSVG from "../svg/BonusSVG";

const Tab = createBottomTabNavigator();

export default class Footer extends React.Component<any, any> {
    tabs: TabsConfig<any, any>
    options: any
    constructor(props: any) {
        super(props);
        this.tabs = {
            Home: {
                labelStyle: {
                    color: '#ffffff',
                },
                icon: {
                    component: HomeSVG,
                    activeColor: 'rgb(91,55,183)',
                    inactiveColor: 'rgba(0,0,0,1)',
                },
                background: {
                    activeColor: '#4c4a4a',
                    inactiveColor: 'rgba(223,215,243,0)',
                },
            },
            Bonus: {
                labelStyle: {
                    color: '#ffffff'
                },
                icon: {
                    component: BonusSVG,
                    activeColor: 'rgb(255,255,255)',
                    inactiveColor: 'rgba(0,0,0,1)'
                },
                background: {
                    activeColor: '#4c4a4a',
                    inactiveColor: 'rgba(247,215,243,0)',
                },
            }
        };

        this.options = {
            style: {
                backgroundColor: '#121212'
            }
        }
    }
    render() {
        return (
            <Tab.Navigator
                tabBar={props => (
                    <AnimatedTabBar iconSize={20} tabs={this.tabs} {...props} />
                )}
                tabBarOptions={this.options}
            >
                <Tab.Screen name="Home" component={Winkels} options={{title: "Winkels"}}/>
                <Tab.Screen name="Bonus" component={Bonus} />
            </Tab.Navigator>
        )
    }
}
