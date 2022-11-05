import { userReAuth } from './auth';
import { auth } from './config';

export type ProfileUpdateResponse = {
  message: string;
  status: string;
};

export const updateUserName = async (
  newName: string
): Promise<ProfileUpdateResponse> => {
  const user = auth.currentUser;
  if (!user) return { status: 'failed', message: 'You are not logged in.' };
  try {
    await user.updateProfile({
      displayName: newName
    });
  } catch (err) {
    if (err instanceof Error) {
      return { status: 'failed', message: err.message };
    }
  }
  return { status: 'success', message: 'User name was updated successfully.' };
};

export const updateEmail = async (
  currentPassword: string,
  newEmail: string
): Promise<ProfileUpdateResponse> => {
  const user = auth.currentUser;
  if (!user) return { status: 'failed', message: 'You are not logged in.' };
  try {
    const reAuth = await userReAuth(currentPassword);
    if (!reAuth) {
      return {
        status: 'failed',
        message:
          'Could not authorize your request. Did you supply the correct password?'
      };
    } else {
      await user.updateEmail(newEmail);
    }
  } catch (err) {
    if (err instanceof Error) {
      return { status: 'failed', message: err.message };
    }
  }
  return { status: 'success', message: 'Email was updated successfully.' };
};

export const updatePassword = async (
  currentPassword: string,
  newPassword: string
): Promise<ProfileUpdateResponse> => {
  const user = auth.currentUser;
  if (!user) return { status: 'failed', message: 'You are not logged in.' };
  try {
    const reAuth = await userReAuth(currentPassword);
    if (!reAuth) {
      return {
        status: 'failed',
        message:
          'Could not authorize your request. Did you supply the correct password'
      };
    }
    await user.updatePassword(newPassword);
  } catch (err) {
    if (err instanceof Error) {
      return { status: 'failed', message: err.message };
    }
  }
  return { status: 'Success', message: 'Password was updated successfully.' };
};
