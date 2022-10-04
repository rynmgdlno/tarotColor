import ColorLib from 'color';
import { ChannelValue, RGBSet, ColorObj } from '@types';

export const getContrastingColor = (color: RGBSet): string =>
  ColorLib.rgb(...Object.values(color)).isLight()
    ? 'rgba(0,0,0,.5)'
    : 'rgba(255,255,255,.5)';

export const getHex = (color: RGBSet): string => {
  let hex = '#';
  for (const channel of Object.values(color)) {
    let channelHex = channel.toString(16);
    if (channelHex.length === 1) {
      channelHex = '0' + channelHex;
    }
    hex = (hex + channelHex).toUpperCase();
  }
  return hex;
};

export const getRandomChannelValue = (): ChannelValue => {
  const min = Math.ceil(0);
  const max = Math.floor(255);
  return Math.floor(Math.random() * (max - min) + min) as ChannelValue;
};

export const getRandomColorObj = (): ColorObj[] => {
  const colorObj = [];
  for (let i = 0; i < 5; i++) {
    colorObj.push({
      id: i,
      r: getRandomChannelValue(),
      g: getRandomChannelValue(),
      b: getRandomChannelValue()
    });
  }
  return colorObj;
};

// todo: audit these functions:
export const getRandomAlpha = () => Math.random().toFixed(2);

export const getRandomColorString = (hasAlpha: boolean): string => {
  return hasAlpha
    ? `rgba(${getRandomChannelValue()}, ${getRandomChannelValue()}, ${getRandomChannelValue()}, ${getRandomAlpha()})`
    : `rgb(${getRandomChannelValue()}, ${getRandomChannelValue()}, ${getRandomChannelValue()})`;
};
