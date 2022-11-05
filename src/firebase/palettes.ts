// import { useDispatch } from "react-redux";
import { firestore } from './config';

import { PaletteObject } from '@types';

// Save Palette
export const savePalette = async ({ id, palette, name }: PaletteObject) => {
  const nameCheck = firestore
    .collection(`users/${id}/palettes`)
    .where('name', '==', name);
  const snapShot = await nameCheck.get();
  if (snapShot.size === 1) {
    return 'There is already a palette by that name :(';
  } else if (!snapShot.size) {
    try {
      await firestore.collection(`users/${id}/palettes`).add({
        name: name,
        palette: palette
      });
      return 'Success!';
    } catch (error) {
      alert('Error saving palette, please try again later.');
      return error;
    }
  }
};

// Delete Palette
export const deletePalette = async (
  { name }: PaletteObject,
  userId: string
) => {
  const docRef = firestore
    .collection(`users/${userId}/palettes/`)
    .where('name', '==', name);
  const snapShot = await docRef.get();
  const id = snapShot.docs[0].id;
  const docToDelete = firestore.doc(`users/${userId}/palettes/${id}`);
  try {
    await docToDelete.delete();
    return 'Success!';
  } catch (error) {
    return error;
  }
};

// Rename Palette
export const renamePalette = async (
  { name }: PaletteObject,
  userId: string,
  newPaletteName: string
) => {
  const docRef = firestore
    .collection(`users/${userId}/palettes/`)
    .where('name', '==', name);
  const snapShot = await docRef.get();
  const id = snapShot.docs[0].id;
  const docToUpdate = firestore.doc(`users/${userId}/palettes/${id}`);

  try {
    await docToUpdate.set(
      {
        name: newPaletteName
      },
      { merge: true }
    );
    return 'Success!';
  } catch (error) {
    return error;
  }
};

// Update Palette State Object from FireStore collection
// Called when: User login/out, Save, Delete, Rename
export const refreshPalettes = async (
  id: string
): Promise<PaletteObject[] | Error> => {
  const newSavedPalettes: PaletteObject[] = [];
  if (id) {
    try {
      const palettes = firestore.collection(`users/${id}/palettes/`);
      const snapShot = await palettes.get();
      snapShot.docs.forEach((doc) => {
        const { id, palette, name } = doc.data();
        newSavedPalettes.push({ id, palette, name });
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        return error;
      }
    }
  }
  return newSavedPalettes;
};
