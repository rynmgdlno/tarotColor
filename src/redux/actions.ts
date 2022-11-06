import {
  toggleDarkMode,
  toggleMenu,
  toggleSplash,
  toggleSubMenus
} from './UI/navigation.slice';
import { setPaletteData, setActiveEditor } from './UI/paletteEditor.slice';
import { setCurrentUser, setThirdParty } from './DATA/user.slice';
import { setSavedPalettes } from './DATA/palettes.slice';

export {
  setActiveEditor,
  setCurrentUser,
  setPaletteData,
  setSavedPalettes,
  setThirdParty,
  toggleDarkMode,
  toggleMenu,
  toggleSplash,
  toggleSubMenus
};
