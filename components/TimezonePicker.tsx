import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { accountStyles } from '@/assets/styles/accountStyles';
import { colors } from '@/constants/Colors';
import { useSettings } from '@/hooks/useSettings';

export const TimezonePicker = () => {
  const { timezone, setTimezone, timezoneOptions } = useSettings();

  return (
    <View style={accountStyles.optionsWrapper}>
      <Text style={accountStyles.optionsText}>Часовий пояс</Text>
      <View style={accountStyles.optionsSelectWrapper}>
        <RNPickerSelect
          style={{
            placeholder: { color: colors.textColor },
            inputAndroid: { color: colors.textColor },
            inputIOS: { color: colors.textColor },
          }}
          placeholder={{
            label: 'Виберіть місто',
            value: null,
          }}
          onValueChange={(value) => setTimezone(value)}
          items={timezoneOptions || []}
          value={timezone}
        />
      </View>
    </View>
  );
};
