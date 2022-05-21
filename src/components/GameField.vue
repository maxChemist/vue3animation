<template>

    <div class="field"
    id="gameField"
    >
        <slot></slot>
    </div>
  
</template>
<script>

</script>
<style scoped>
.field {
  left: 50px;
  top: 50px;
  width: 400px;
  height: 400px;
  position: relative;
  background-color: rgb(204, 242, 229);
}
</style>