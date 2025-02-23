import { View,Text } from "react-native";
import { useAuthStore } from "./store";
import { useEffect } from "react";
import { router } from "expo-router";


export default function HomeScreen(){
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    useEffect(() => {
        if (!isAuthenticated) {
          router.replace('/'); 
        }
      }, [isAuthenticated]);
    return(
        <View>
            <Text>Welcome to Home </Text>
        </View>
        
    );

}