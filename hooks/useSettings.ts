import { useEffect, useCallback, useState } from 'react';
import { useApi } from './useApi';
import locationTimezone from 'node-location-timezone';

interface ITimezone {
  label: string;
  value: string | null;
}

export const useSettings = () => {
  const { get, put } = useApi();

  const [timezone, setTimezone] = useState<string | null>(null);
  const [timezoneOptions, setTimezoneOptions] = useState<Array<ITimezone>>([]);

  const fetchTimezoneOptions = useCallback(
    () =>
      locationTimezone
        .getCapitals()
        .map((item) => ({
          label: item.name,
          value: item.timezone,
        }))
        .filter((item) => item.value && item.label)
        .sort((a, b) => (a.label > b.label ? 1 : -1)),
    []
  );

  const findAndSaveTimezone = (value: string) => {
    const timezoneOption = timezoneOptions.find(
      (item) => item.value === value
    )?.value;

    if (timezoneOption) setTimezone(timezoneOption);
  };

  const getSettings = async () => {
    if (!timezoneOptions) return;

    const response = await get({ url: 'settings' });
    findAndSaveTimezone(response?.data?.attributes?.timezone);
  };

  const updateSettings = async () => {
    if (!timezone) return;

    const response = await put({
      url: 'settings',
      body: { timezone },
    });
    findAndSaveTimezone(response?.data?.attributes?.timezone);
  };

  useEffect(() => {
    setTimezoneOptions(fetchTimezoneOptions());
  }, []);

  useEffect(() => {
    getSettings();
  }, [timezoneOptions]);

  useEffect(() => {
    updateSettings();
  }, [timezone]);

  return {
    timezone,
    setTimezone,
    timezoneOptions,
  };
};
