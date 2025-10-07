/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */


import { StyleSheet } from 'react-native';

export const styles= StyleSheet.create({

container: {
    flexGrow: 1,
    backgroundColor: "#190035ff",
    alignItems: "center",       
    justifyContent: "center",   
    padding: 20,
  },

  content: {
    alignItems: "center",       
    gap: 10,                    
  },

  nome: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  foto: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 40,  
    marginBottom: 20,
    borderWidth: 5,
    borderColor: "#fff",
  },

  subtitulo: {
    color: "#cccccc",
    fontSize: 16,
    textAlign: "center",
  },
});




