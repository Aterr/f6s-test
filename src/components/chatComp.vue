<template>
  <div class="chat">
    <Messages />
    <SendMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import Messages from "@/components/messagesComp";
import SendMessage from "@/components/sendMessagesComp";

export default {
  name: "Chat",
  components: {
    Messages,
    SendMessage,
  },
  mounted() {
    this.$store.dispatch("GET_INFO");
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
