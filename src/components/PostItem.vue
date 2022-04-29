<template>
  <div class="post">
    <div class="post_description">
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">open</my-button>
      <my-button @click="$emit('remove', post)">remove</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post_description {
}

.post_btns {
  justify-content: space-between;
  display: flex;
}
</style>