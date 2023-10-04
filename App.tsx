import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setIsValid] = useState(false)

  function handleSignIn() {
    if (email === "erik@gmail.com" && password === "1104") {
      setIsValid(true)
    } else {
      Alert.alert("E-mail ou senha inválido!")
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={setEmail}
        testID="input-email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#94a3b8"
        value={password}
        onChangeText={setPassword}
        testID="input-password"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleSignIn}
        testID="button-signIn"
      >
        <Text style={styles.buttonTitle}>Entrar</Text>
      </TouchableOpacity>

      {isValid && <Text style={styles.message}>Acesso liberado!</Text>}
    </View>
  )
}
