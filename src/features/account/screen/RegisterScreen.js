import React, { useContext } from "react";
import {Text} from '../../../components/typography/TextComponent'
import { useState } from "react/cjs/react.development";
import { SpacerComponent } from "../../../components/spacer/SpacerComponent";
import { AuthenticationContext } from "../../../services/authentication/AuthenticationContex";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AuthInput } from "../components/AccountStyles";
import { Title } from "react-native-paper";


export const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const { onRegister, error } = useContext(AuthenticationContext);


    return (
        <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
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
        <SpacerComponent size="large">
          <AuthInput
            label="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
        </SpacerComponent>
        {error && (
          <SpacerComponent size="large">
            <Text variant="error">{error}</Text>
          </SpacerComponent>
        )}
        <SpacerComponent size="large">
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
          </AuthButton>
        </SpacerComponent>
      <SpacerComponent size="large">
          <AuthButton mode='contained' onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
      </SpacerComponent>
      </AccountContainer>
    </AccountBackground>
    )
}