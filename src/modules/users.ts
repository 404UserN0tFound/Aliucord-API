import { Profile, User } from "../types/users";

/**
 * Fetch currently logged in user
 */
async function fetchCurrentUser(): Promise<User> {
  return window.aliucord.users.fetchCurrentUser();
}

/**
 * Fetch a profile 
 */
async function fetchProfile(userID: string): Promise<Profile> {
  return window.aliucord.users.fetchProfile(userID);
}

/**
 * Get an user
 */
async function getUser(userID: string): Promise<User> {
  return window.aliucord.users.getUser(userID);
}

export {
  fetchCurrentUser,
  fetchProfile,

  getUser
}