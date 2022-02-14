import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import UserRepository from "./UserRepository";

const auth = getAuth();
class UserService {
  async createUser({ email, password }) {
    try {
      // google auth
      await createUserWithEmailAndPassword(auth, email, password);
      const userName = email.split("@")[0];

      await UserRepository.joinUser({ email, userName });
      await this.loginUser({ email, password });

      // for history
      return userName;
    } catch (e) {
      console.log("Error at UserService - createUser :", e);
      return;
    }
  }

  async loginUser({ email, password }) {
    try {
      const a = await setPersistence(auth, browserSessionPersistence);
      console.log(a);
      const response = await signInWithEmailAndPassword(auth, email, password);
      //
      if (response?.user) {
        return UserRepository.loginUser(email);
      }
    } catch (e) {
      console.log("Error at UserService - loginUser :", e);
    }
  }

  async logoutUser() {
    try {
      await signOut(auth);
    } catch (e) {
      console.log("Error at UserService - logoutUser :", e);
    }
  }

  async searchUser(email: string) {
    try {
      return await UserRepository.searchUser(email);
    } catch (e) {
      console.log("Error at UserService - searchUser :", e);
    }
  }

  async addFriend(myEmail: string, friendObject: any) {
    try {
      return UserRepository.addFriend(myEmail, friendObject);
    } catch (e) {
      console.log("Error at UserService - searchUser :", e);
    }
  }

  async currentUser() {
    const response = auth.currentUser;
    console.log(response);
  }
}

export default new UserService();
