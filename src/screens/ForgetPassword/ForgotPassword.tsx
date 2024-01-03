// import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
// import React from 'react'
// import backIcon from '../assets/images/backIcon.png'
// import logo1 from '../assets/images/logo1.png'
// import fonts from 'src/assets/fonts'
// import { useNavigation } from '@react-navigation/native'



// const ForgotPassword = () => {

//     const navigation = useNavigation()
//   return (
//       <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
          
//           <TouchableOpacity onPress={()=> {navigation.goBack()}} style={styles.imageView}>
//               <Image source={backIcon} />
//           </TouchableOpacity>

//           <View style={styles.logoView}>
//               <Image source={logo1} />
//           </View>

//           <View style={styles.mainTextView}>
//               <Text style={styles.MianText}>
//                   Forgot password
//               </Text>

//               <View style={styles.fillInstructionView}>
//                   <Text style={styles.fillText}>
//                       Please fill in this information to create and account.
//                   </Text>
//               </View>

//               <View style={styles.inputView}>
//                   <TextInput style={styles.input} placeholderTextColor={"#9099A3"} placeholder='Email' />
//               </View>

//               <View style={styles.bottomTextView}>
//                   <Text style={styles.bottomText}>
//                       Your confirmation link will be sent to your email address.
//                   </Text>
                  
//               </View>
//           </View>

//           <View style={styles.buttonView}>
//               <TouchableOpacity onPress={()=> {navigation.navigate("ResetPassword")}}  style={styles.button}>
//                   <Text style={styles.buttonText}>
//                       Send Request
//                   </Text>
//               </TouchableOpacity>
//           </View>
   
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     buttonText: {
//         fontSize: 16,
//         color: '#ffffff',
//         fontFamily: fonts.CatamaranMedium
//     },

//     button: {
//         width: "100%", justifyContent: 'center', alignItems: "center",
//         backgroundColor: '#51B2BC', height: 54,
//         borderRadius: 4,
//     },
//     buttonView: {
//         width: "100%",
//         paddingHorizontal: 20,
//         marginTop: 15

//     },
//     bottomText: {
//         color: '#9099A3',
//         fontFamily: fonts.CatamaranRegular,
//         fontSize:14
//     },
//     bottomTextView: {
//         marginTop: 10, 
//         width:'100%',
//     },
//     input: {
//         color:'#093057', fontSize:16, fontFamily:fonts.CatamaranRegular
//     },
//     inputView: {
//         width: '100%', marginTop: 30,
//         height: 54, backgroundColor:'#F4F4F4', borderRadius:4, justifyContent:"center", paddingStart:16
//     },
//     fillText: {
//         fontFamily: fonts.CatamaranRegular,
//         color:"#093057", fontSize:16
//     },
//     fillInstructionView: {
//         marginTop: 20, 
//     width:'100%'
//     },
//     MianText: {
//         color: '#093057',
//         fontSize: 30,
//         fontFamily:fonts.CormorantGaramondBold
        
//     },
//     mainTextView: {
//         width: "100%", marginTop: 39.52,
//         paddingHorizontal:20, 
// },
    

//     logoView: {
// marginTop:26, width:'100%', paddingHorizontal:20
//     },
//     imageView: {
//         width: '100%', marginTop: 40, 
//         paddingHorizontal:20
//     }
// })

// export default ForgotPassword
import { View, Text } from 'react-native'
import React from 'react'

const ForgotPassword = () => {
  return (
    <View>
      <Text>ForgotPassword</Text>
    </View>
  )
}

export default ForgotPassword