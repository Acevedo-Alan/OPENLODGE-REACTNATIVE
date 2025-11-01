import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { COLORS, Icons } from '../constants';

import { authStyles as styles } from '../styles/auth.styles';

const FormInput = ({
  label,
  error,
  isPassword,
  showPassword,
  onTogglePassword,
  ...props
}) => {
  if (isPassword) {
    return (
      <View style={styles.inputContainer}>
        {label && <Text style={styles.inputLabel}>{label}</Text>}
        <View style={[styles.passwordContainer, error && styles.inputError]}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!showPassword}
            placeholderTextColor={COLORS.textSecondary}
            {...props}
          />
          <Pressable onPress={onTogglePassword} style={styles.togglePasswordButton}>
            {React.createElement(showPassword ? Icons.eye : Icons.eyeOff, {
              size: 20,
              color: COLORS.textSecondary,
            })}
          </Pressable>
        </View>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        placeholderTextColor={COLORS.textSecondary}
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default FormInput;