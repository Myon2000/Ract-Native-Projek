import {Text, TextInput} from "react-native";

const InputTeks = (props) => {
    const {label, children, isPassword = false} = props
    return (
        <>
        <Text>{label}</Text>
        <TextInput style={{ 
          borderWidth: 2,
          borderColor: 'black',
          padding: 5,
          width: 250,
          borderRadius: 30
         }}
         placeholder = {children}
         secureTextEntry = {isPassword}></TextInput>
         </>
    )
}

export default InputTeks;