import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore();

class ChatRepository {
  async createChatRoom(myEmail: string, friendEmail: string) {
    const response = await setDoc(doc(collection(db, "ChatRoom")), {
      members: [myEmail, friendEmail],
      messages: [],
    });
  }

  async searchMyChatRoom(myEmail) {}

  async sendMessage(message: string) {}
}

export default new ChatRepository();
