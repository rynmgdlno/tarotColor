type Ran<T extends number> = number extends T ? number :_Range<T, []>;

type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;



type ColorValue = Ran<256>;

type Color = {
  id: number;
  red: ColorValue;
  green: ColorValue;
  blue: ColorValue;
}

export const initColor: Color[] = [
  {
    id: 0, 
    red: 235,
    green: 241,
    blue: 205
  }, 
  {
    id: 1,
    red: 50,
    green: 133,
    blue: 123
  }, 
  {
    id: 2,
    red: 93,
    green: 180,
    blue: 164
  }, 
  {
    id: 3,
    red: 220,
    green: 202,
    blue: 128
  }, 
  {
    id: 4,
    red: 220,
    green: 154,
    blue: 70
  }
]