<template>
  <div class="send-message-wrapper">
    <textarea-autosize
      class="textarea"
      placeholder="Type message"
      ref="message"
      v-model="message"
      :min-height="30"
      :max-height="50"
    />

    <button
      class="send-button"
      @click.prevent="sendMessage"
      :disabled="message === ''"
    >
      Send
    </button>
  </div>
</template>

<script>
export default {
  name: "SendMessage",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    sendMessage() {
      const message = {
        from: this.$store.state.currentUser,
        message: this.message,
        date: new Date().toLocaleString(),
      };
      this.$store.commit("SET_NEW_MESSAGE", message);
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.send-message-wrapper {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  padding: 0 12px;

  .textarea {
    border: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0;
    display: flex;
    width: calc(100% - 72px);
    resize: none;
    overflow: auto;
    padding: 4px 8px 0;
    box-sizing: border-box;
    line-height: 20px;
    text-align: left;
    align-self: flex-end;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }

  .send-button {
    border: none;
    padding: 0;
    margin: 0;
    width: 60px;
    height: 100%;
    border-radius: 8px;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>
