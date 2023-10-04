import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  input: {
    width: "100%",
    height: 56,
    borderWidth: 2,
    borderColor: "#94a3b8",
    borderRadius: 4,
    padding: 16,
    fontSize: 18,
    marginBottom: 16,
    color: "#e2e8f0",
  },

  button: {
    backgroundColor: "#c026d3",
    width: "100%",
    height: 56,
    borderRadius: 4,
    fontSize: 18,

    alignItems: "center",
    justifyContent: "center",
  },

  buttonTitle: {
    color: "#f1f5f9",
    fontSize: 18,
  },

  message: {
    marginTop: 32,
    fontSize: 18,
    color: "#16a34a",
  },
})
