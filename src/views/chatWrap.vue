<template>
  <div class="chat-wrapper">
    <Chat />
  </div>
</template>

<script>
import Chat from "@/components/chatComp";

export default {
  name: "ChatWrapper",
  components: {
    Chat,
  },
};
</script>

<style lang="scss" scoped>
.chat-wrapper {
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  overflow: auto;
}
</style>
