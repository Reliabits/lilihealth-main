import { View, Text, StyleSheet, ScrollView, ImageBackground, PanResponder, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { theme } from 'src/styles/theme'
import SymptomsTrackingHeader from '../components/SymptomsTrackingHeader'
import fonts from 'src/assets/fonts'
import { Spacer10, Spacer20, Spacer30 } from 'src/utils/Spacing'
import DatePicker, { DatePickerPrimary } from 'src/components/DatePicker'
import Assets from 'src/utils/Assets'
import { Image } from 'src/components/Image'
import Utils from 'src/utils/Utils'
import Slider from '@react-native-community/slider';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const grapghWidth = screenWidth * 0.9;





const data = {
    labels: ["Jan", "Feb", "Mar", "April", "May", "June"],
    datasets: [
        {
            data: [10, 20, 30, 40, 60, 100]
        }
    ],
    xlabledata: [10, 20, 30, 40, 100]
};


const HairGrowth = () => {


    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, gestureState) => {
            const { dx } = gestureState;
            const width = 300; // Width of the slider image
            const max = 100; // Maximum value
            const newValue = Math.round((dx / width) * max);
            if (newValue >= 0 && newValue <= max) {
                setValue(newValue);
            }
        },
    });

    const [value, setValue] = useState(0);

    const handleSliderChange = (sliderValue: any) => {
        setValue(sliderValue);
    };
    const [dob, setDob] = useState<string>();

    const acnedata = [
        { title: 'VeryLow', image: Assets.images.face_very_low },
        { title: 'Low', image: Assets.images.face_low },
        { title: 'middle', image: Assets.images.face_middle },
        { title: 'high', image: Assets.images.face_high },
        { title: 'VeryHigh', image: Assets.images.face_very_high },
    ]

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#ffffff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(98, 186, 195, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        style: {
            borderRadius: 16
        },



        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={styles.main}>
            <SymptomsTrackingHeader />


            <ScrollView >
                <View style={styles.dateView}>
                    <View style={styles.todayDate}>
                        <Text style={styles.datetext}>Mar, 2023</Text>
                    </View>

                    <View style={styles.calender}>

                        <DatePickerPrimary
                            label=""
                            value={dob ? Utils.parseDate(dob) : new Date()}
                            onChange={(val) => setDob(Utils.formateDate(val || new Date()))}
                        />
                        <View style={styles.todaytextView}>
                            <Text style={styles.todaytext}>Today</Text>
                        </View>

                    </View>
                </View>


                <Spacer20 />

                <View style={styles.bigDateView}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.afterscroll}>
                            <View style={styles.dateandday}>
                                <Text style={styles.day}>Mon</Text>

                                <Text style={styles.date}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>

                            <View style={styles.dateandday1}>
                                <Text style={styles.day1}>Mon</Text>

                                <Text style={styles.date1}>27</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Spacer30 />

                <View style={styles.hairView}>
                    <Text style={styles.hairtext}>
                        How Would You Rate Your Mood Today?
                    </Text>
                    <Spacer20 />

                    <View style={styles.acneView}>
                        {acnedata.map((item) =>


                            <View style={styles.acnedata}>
                                <Image height={63.88} width={50.9} source={item.image} />

                                <Text style={{ fontFamily: fonts.CatamaranBold, fontSize: 12, color: theme.colors.primaryDark }}>
                                    {item.title}
                                </Text>
                            </View>
                        )}

                    </View>

                    <Spacer10 />

                    <ImageBackground source={Assets.images.slider} style={{ width: '100%', height: 38 }}  {...panResponder.panHandlers} >

                        {/* <Image source={Assets.images.pointer} style={styles.pointer} height={39.6} width={39.6} /> */}

                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            value={value}
                            onValueChange={handleSliderChange}
                            minimumTrackTintColor="transparent"
                            thumbImage={Assets.images.pointer}
                            maximumTrackTintColor="transparent"
                        />

                        <Text style={styles.pointerValue}>{value}</Text>

                    </ImageBackground>

                </View>

                <Spacer30 />

                <View style={styles.graphView}>

                    <View style={styles.graphinnerView}>

                        <View style={styles.firstView}>

                            <View style={styles.view1}>
                                <Text style={styles.view1Text}>
                                    Acne Stats
                                </Text>
                                <Text style={styles.dateView1}>
                                    Jan 2023 - Jun 2023
                                </Text>

                            </View>

                            <View style={styles.view2}>

                                <Text style={styles.monthsText}>
                                    6 months
                                </Text>
                                <Image height={6} width={10} source={Assets.images.down} />

                            </View>

                        </View>

                        <Spacer10 />

                        <View style={styles.secondView}>
                            <Text style={styles.percentText}>
                                40%
                            </Text>

                            <Text style={styles.smalltext}>
                                Improvement
                            </Text>
                        </View>


                        <Spacer20 />
                        <View style={styles.graph}>

                            <BarChart
                                style={styles.graphStyle}
                                data={data}
                                width={grapghWidth}
                                height={220}
                                yAxisLabel={'$'}
                                chartConfig={chartConfig}

                                verticalLabelRotation={30}
                            />

                        </View>
                    </View>

                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    graphStyle: {
        width: '80%', justifyContent: "center"

    },
    graph: {
        width: '100%', justifyContent: "center"
    },
    smalltext: {
        fontFamily: fonts.CatamaranMedium, fontSize: 14, color: theme.colors.textForeground
    },
    percentText: {
        fontFamily: fonts.CatamaranSemiBold, fontSize: 23, color: theme.colors.primary,

    },

    secondView: {

        flexDirection: "row", width: '100%', gap: 6, alignItems: 'center'

    },
    monthsText: {
        fontFamily: fonts.CatamaranSemiBold, fontSize: 14, color: theme.colors.white
    },
    view2: {
        paddingVertical: 4, paddingHorizontal: 14, borderRadius: 27, backgroundColor: theme.colors.primary, flexDirection: 'row', alignItems: 'center', gap: 8


    },
    dateView1: {
        fontFamily: fonts.CatamaranMedium, fontSize: 14, color: theme.colors.textForeground
    },
    view1Text: {
        fontFamily: fonts.CormorantGaramondSemiBold, fontSize: 20, color: theme.colors.secondary

    },

    view1: {


    },
    firstView: {

        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'


    },
    graphinnerView: {

        width: '100%', backgroundColor: theme.colors.white,
        paddingHorizontal: 18,
        paddingVertical: 25,
        borderRadius: 10


    },
    graphView: {

        width: '100%', paddingHorizontal: theme.spacing.appPadding

    },

    value: {
        fontSize: 24,
        marginBottom: 20,
    },
    sliderContainer: {
        width: '80%',
        height: 40,
        overflow: 'hidden',
    },
    sliderBackground: {
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slider: {
        height: 40,

    },
    pointer: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        position: 'absolute',
        transform: [{ translateX: -15 }, { translateY: 5 }], // Adjust the position of the pointer on the image
    },
    pointerValue: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    acnedata: {
        gap: 10, alignItems: 'center'

    },
    acneView: {
        width: "100%", flexDirection: "row",
        // gap:20
        justifyContent: 'space-between', alignItems: "center"
    },
    hairtext: {
        fontFamily: fonts.CormorantGaramondBold,
        fontSize: 20,
        color: theme.colors.secondary

    },
    hairView: {
        width: "100%",
        paddingHorizontal: theme.spacing.appPadding

    },
    addicon: {
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        width: 32,
    },
    bigDateView: {
        width: '100%',
        paddingHorizontal: theme.spacing.appPadding,
    },
    todaytext: {
        fontFamily: fonts.CatamaranSemiBold,
        fontSize: 14,
        color: theme.colors.textForeground,
    },
    todaytextView: {
        backgroundColor: theme.colors.white,
        height: 32,
        width: 72,
        justifyContent: 'center',
        alignItems: 'center',
    },
    datetext: {
        fontFamily: fonts.CatamaranMedium,
        fontSize: 18,
        color: theme.colors.secondary,
    },
    calender: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 16,
        width: '50%',
        alignItems: 'center',
    },
    todayDate: {},
    dateView: {
        width: '100%',
        paddingHorizontal: theme.spacing.appPadding,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    afterscroll: { gap: 12, justifyContent: 'center', flexDirection: 'row', width: '100%' },
    date1: {
        fontFamily: fonts.CatamaranMedium,
        fontSize: 18,
        color: theme.colors.textForeground,
    },
    day1: {
        fontFamily: fonts.CormorantGaramondBold,
        fontSize: 14,
        color: theme.colors.textForeground,
    },

    dateandday1: {
        width: 54,
        height: 66,
        backgroundColor: '#E8F7FA',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    date: {
        fontFamily: fonts.CatamaranMedium,
        fontSize: 18,
        color: theme.colors.white,
    },
    day: {
        fontFamily: fonts.CormorantGaramondBold,
        fontSize: 14,
        color: theme.colors.white,
    },
    dateandday: {
        width: 54,
        height: 66,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    main: {
        flex: 1,
        backgroundColor: theme.colors.secondaryLight

    }
})

export default HairGrowth