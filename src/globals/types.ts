// creating a range type for RGB values i.e. 0 <= n <= 255
type Ran<T extends number> = number extends T ? number : _Range<T, []>;

type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R[number]
  : _Range<T, [R['length'], ...R]>;

export type ChannelValue = Ran<256>;

export interface RGBSet {
  r: ChannelValue, 
  g: ChannelValue, 
  b: ChannelValue
};

export interface ColorObj extends RGBSet {
  id: number;
};
