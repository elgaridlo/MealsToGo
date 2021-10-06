import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Text } from '../../../components/typography/TextComponent'
import { useState } from "react/cjs/react.development";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContex";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from "../components/AccountStyles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);


  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <SpacerComponent size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </SpacerComponent>
        {error && (
          <SpacerComponent size="large">
            <Text variant="error">{error}</Text>
          </SpacerComponent>
        )}
        <SpacerComponent size="large">
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </SpacerComponent>
      </AccountContainer>
      <SpacerComponent size="large">
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </SpacerComponent>
    </AccountBackground>
  )
}