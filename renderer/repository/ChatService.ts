import ChatRepository from "./ChatRepository";

class ChatService {
  async createChatRoom(myEmail: string, friendEmail: string) {
    return ChatRepository.createChatRoom(myEmail, friendEmail);
  }

  async searchMyChatRoom(myEmail: string) {
    return ChatRepository.searchMyChatRoom(myEmail);
  }

  async sendMessage(message: string) {
    return ChatRepository.sendMessage(message);
  }
}

export default new ChatService();
