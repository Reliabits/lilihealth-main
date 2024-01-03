import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from 'src/styles/theme';
import { Spacer10, Spacer20, Spacer40 } from 'src/utils/Spacing';
import fonts from 'src/assets/fonts';

const SymptomsTrackingHeader = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = (item: any) => {
      setSelectedItem(item);
    };
    const items = [
        { id: 1, label: 'Hair Growth & more' },
        { id: 2, label: 'Weight' },
        { id: 3, label: 'Lab Result' },
    ];
    
    const [selectedText, setSelectedText] = useState(null);
    
    const handleTextClick = (item: any) => {
    setSelectedText(item)
    }
  const problems = [
    { id: 1, label: 'Hair Growth' },
    { id: 2, label: 'Hair Loss' },
    { id: 3, label: 'Acne' },
    { id: 4, label: 'Mood' },
    { id: 5, label: 'Mental Health' },
  ];

    return (
      
        <View>
    <View style={styles.main}>
      <Spacer10 />
      <Spacer40 />

      <Text style={styles.topText}>Symptoms Tracking</Text>
      <View style={styles.horizontalView}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.innerView}>
            {items.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.itemView,
                  selectedItem === item.id ? styles.selectedItem : styles.unselectedItem,
                ]}
                onPress={() => handleItemClick(item.id)}
              >
                <Text
                  style={[
                    styles.itemtext,
                    selectedItem === item.id ? styles.selectedText : styles.unselectedText,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
          </View>
          <Spacer20 />

          
            </View>
            {/* <Spacer10 /> */}

            <View style={styles.secondScrollView}>


                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.innerSecond}>
                        {problems.map((item) => (
                                <Text key={item.id}
                                onPress={() => handleTextClick(item)}
                                style={[
                                    styles.innertext,
                                    selectedText && selectedText.id === item.id && styles.selectedInnerText,
                                ]}
                            >{item.label}</Text>
                           
                        ))}
                    </View>
                </ScrollView>
            </View>


        </View>
  );
};

const styles = StyleSheet.create({
 
    selectedInnerText: {
        fontSize: 15,
        color: theme.colors.primary,
        fontFamily: fonts.CatamaranMedium,
    },
   
  innertext: {
    fontSize: 15,
    color: theme.colors.textForeground,
    fontFamily: fonts.CatamaranMedium,
  },
  innerSecond: {
    width: '100%',
    gap: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondScrollView: {
    width: '100%',
      height: 63,
    //   paddingVertical: 10,
        alignItems:"center",
    
    backgroundColor: theme.colors.secondaryLight,
    flexDirection: 'row',
    
    
    paddingHorizontal: theme.spacing.appPadding,
  },
  selectedText: {
    color: theme.colors.white,
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
  },
  unselectedText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
    color: theme.colors.textForeground,
  },

  selectedItem: {
    backgroundColor: theme.colors.primary,
  },
  unselectedItem: {
    backgroundColor: 'white',
  },
  itemtext: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 14,
    color: theme.colors.white,
  },
  itemView: {
    paddingHorizontal: 17,
    paddingVertical: 4,
    backgroundColor: theme.colors.primary,
    borderRadius: 64,
  },
  innerView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  horizontalView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 17,
  },
  topText: {
    fontFamily: fonts.CatamaranSemiBold,
    fontSize: 18,
    color: theme.colors.secondary,
  },
  main: {
    height: 138,
    paddingHorizontal: theme.spacing.appPadding,
    backgroundColor: theme.colors.white,
      elevation:5,
    
  },
});

export default SymptomsTrackingHeader;
