import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';




const App = () => {

  const [data, setData] = useState([{id:1},{id:2},{id:3},{id:4}]);

  const AnimatedHeaderValue = React.useRef(new Animated.Value(0)).current;



    const Header_Max_Height = 350;
    const Header_Min_Height = 300;
    const animateHeaderBackgroundHeight = AnimatedHeaderValue.interpolate({
      inputRange:[0,Header_Max_Height-Header_Min_Height],
      outputRange:[Header_Max_Height,Header_Min_Height],
      extrapolate:'clamp'
    })


  return (
    <SafeAreaView>
       <Animated.FlatList
          horizontal

            data={data}
            keyExtractor={item => `key-${item.id}`}
            renderItem={(item)=>(
              <Animated.View style={
                [{
                  backgroundColor:'red',
                  width:250,
                  height:animateHeaderBackgroundHeight,
                  marginEnd:10,
                  
                },
              
                ]
              }>
              
               
              </Animated.View>
            )}
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent :{contentOffset:{x:AnimatedHeaderValue}}
                }
              ],
              {useNativeDriver:false}
            )}
          />
    </SafeAreaView>
  );
};



export default App;
