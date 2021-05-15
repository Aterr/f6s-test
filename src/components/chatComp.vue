<template>
  <div class="chat">
    <Messages :data="conversation" :currentUser="currentUser" />
    <SendMessage @sendMessage="sendMessage" />
  </div>
</template>

<script>
// @ is an alias to /src
import Messages from "@/components/messagesComp";
import SendMessage from "@/components/sendMessagesComp";
import { currentUser, conversation } from "@/data/mockup.js";

export default {
  name: "Chat",
  components: {
    Messages,
    SendMessage,
  },
  data() {
    return {
      currentUser: JSON.parse(currentUser),
      conversation: JSON.parse(conversation),
    };
  },
  methods: {
    sendMessage(e) {
      const obj = {
        message: e.message,
        date: e.date,
        from: this.currentUser,
      };
      this.conversation.push(obj);

      console.log(obj);

      console.log(this.conversation);
    },
  },
};
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
}
</style>
