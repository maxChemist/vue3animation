<template>
  <div
    class="balls"
    :style="cssProps"
    :id="setId"
    :key="ball.id"
    @click="ballClicked"
  ></div>
</template>
<script>
export default {
  props: {
    ball: {
      type: Object,
      requirement: true,
    },
  },
  data() {
    return {
      color: "red",
    };
  },
  computed: {
    cssProps() {
      return (
        "background-color:" +
        this.ball.color +
        "; width:" +
        this.ball.radius +
        "px; height:" +
        this.ball.radius +
        "px;  border-radius:" +
        this.ball.radius +
        "px; top:" +
        this.ball.cordY +
        "px; left:" +
        this.ball.cordX +
        "px;"
      );
    },
    setId() {
      return this.ball.id;
    },
  },
  methods: {
    ballClicked(event) {
      this.$emit("ballClicked", event.target.id);
    },
  },
};
</script>
<style scoped>
.balls {
  position: absolute;
}
</style>
