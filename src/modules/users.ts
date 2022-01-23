import { getModule } from "./module";
import { Profile, User } from "../types/users";

const userModule = getModule(m => m.fetchProfile);

/**
 * Fetch currently logged in user
 */
async function fetchCurrentUser(): Promise<User> {
  return new Promise((resolve, reject) => {
    userModule.fetchCurrentUser().then((user: any) => {
      resolve(user as User);
    }).catch(reject);
  });
}

/**
 * Fetch a profile 
 */
async function fetchProfile(userID: string): Promise<Profile> {
  return new Promise((resolve, reject) => {
    userModule.fetchProfile(userID).then((profile: any) => {
      resolve(profile as Profile);
    }).catch(reject);
  });
}

/**
 * Get an user
 */
async function getUser(userID: string): Promise<User> {
  return new Promise((resolve, reject) => {
    userModule.getUser(userID).then((user: any) => {
      resolve(user as User);
    }).catch(reject);
  });
}

export {
  fetchCurrentUser,
  fetchProfile,

  getUser
}