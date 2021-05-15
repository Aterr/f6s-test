<template>
  <div class="messages" ref="msgContainer">
    <div
      class="message-wrapper"
      v-for="(message, i) in data"
      :key="`message-${i}`"
      :class="message.from.id === currentUser.id ? 'self' : ''"
    >
      <img
        :src="message.from.thumbnail"
        class="thumbnail"
        :title="message.from.firstName"
      />
      <div class="message" :title="message.date">
        {{ message.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: {
    data: {
      type: Array,
      default: [],
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  updated() {
    this.scrollToBottom();
  },
  mounted() {
    this.scrollToBottom();
  },
  methods: {
    scrollToBottom() {
      this.$refs.msgContainer.scrollTop = this.$refs.msgContainer.scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.messages {
  width: 100%;
  max-height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex-grow: 1;

  .message-wrapper {
    max-width: 60%;
    text-align: left;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    margin: 6px 0;

    .thumbnail {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: 0 12px;
    }

    .message {
      background: rgba(0, 0, 0, 0.05);
      padding: 8px;
      border-radius: 8px;

      white-space: pre-line;
    }

    &.self {
      align-self: flex-end;
      flex-direction: row-reverse;
      margin-right: 16px;

      .message {
        background: rgba(0, 191, 255, 0.3);
      }
    }
  }
}
</style>
