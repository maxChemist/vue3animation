<template>
  <div class="myScale">
    <h5>{{ scaleName }}{{ ":  " }}{{ Math.round(scaleValue * 100) + "%" }}</h5>
    <meter @click="meterClick" class="myScaleLine" :value="scaleValue"></meter>
  </div>
</template>
<script>
export default {
  props: {
    scaleName: {
      type: String,
    },
    scaleValue: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      //   scaleValue: "0.1",
    };
  },
  methods: {
    meterClick(event) {
      let newValue = event.offsetX / event.srcElement.clientWidth;
      if (newValue < 0.01) {
        newValue = 0;
      }
      if (newValue > 0.99) {
        newValue = 1;
      }

      this.$emit("update:scaleValue", newValue);
    },
  },
};
</script>
<style scoped>
.myScale {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 0;
}
.myScaleLine {
  margin-top: -20px;
  width: 500px;
  height: 20px;
}
</style>
