import {
  collection,
  setDoc,
  query,
  doc,
  where,
  getDocs,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const db = getFirestore();

interface JoinUserInterface {
  email: string;
  userName: string;
}

class UserRepository {
  async joinUser({ email, userName }: JoinUserInterface) {
    try {
      await setDoc(doc(db, "User", email), {
        email,
        userName,
        imageUrl: null,
        friendsList: [],
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }

  async loginUser(email: string) {
    try {
      const userDocSnap = await getDoc(doc(db, "User", email));
      if (userDocSnap.exists()) {
        return userDocSnap.data();
      }
    } catch (e) {}
  }

  async searchUser(email: string) {
    // 이메일로 usercollection에서 찾는다.
    try {
      const userDocSnap = await getDoc(doc(db, "User", email));

      if (userDocSnap.exists()) {
        return userDocSnap.data();
      }

      // 없는 경우
      return null;
    } catch (e) {
      console.log("Error search User: ", e);
    }
  }

  async addFriend(myEmail: string, friendObject: any) {
    try {
      const userRef = await doc(db, "User", myEmail);
      const userSnapShot = await getDoc(userRef);
      const { friendsList } = userSnapShot.data();
      await updateDoc(userRef, {
        // mapping
        friendsList: [...friendsList, friendObject],
      });
    } catch (e) {
      console.log("Error add User: ", e);
    }
  }
}

export default new UserRepository();
