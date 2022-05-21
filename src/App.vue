<template>
  <div>
    <button @click="addBall">Add Ball</button>
    <button @click="startMove">{{ btnName }}</button>
    <h3> Total Balls:{{ballsArr.length}}</h3>
  <p>Click on Ball to dellete it</p>
    <game-field>
      <some-ball
        v-for="ball in ballsArr"
        :ball="ball"
        @ballClicked="ballClicked"
      >
      </some-ball>
    </game-field>
  </div>
</template>
<script>
import GameField from "@/components/GameField.vue";
import SomeBall from "@/components/SomeBall.vue";
import { Ball } from "@/Classes/Ball";

export default {
  data() {
    return {
      btnName: "Go!",
      timerId: 0,
      ballsArr: [],

      gameField: { width: 500, height: 500, color: "rgb(40, 40, 0,1)" },
    };
  },
  components: { GameField, SomeBall, Ball },
  methods: {
    addBall() {
      const newBall = new Ball({
        id: Date.now(),
        color:
          "rgb(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          ", 0.9)",
        radius: Math.floor(Math.random() * 20 + 5),
        cordX: Math.floor(Math.random() * 100 + 10),
        cordY: Math.floor(Math.random() * 100 + 10),
        velocityX: Math.floor(Math.random() * 3 + 1),
        velocityY: Math.floor(Math.random() * 3 + 1),
        directionX: Math.random() > 0.5 ? -1 : 1,
        directionY: Math.random() > 0.5 ? -1 : 1,
      });
      this.ballsArr.push(newBall);
    },

    startMove() {
      if (this.timerId) {
        clearInterval(this.timerId);
        this.timerId = 0;
        this.btnName = "Go!";
      } else {
        this.timerId = setInterval(this.moving, 50);
        this.btnName = "Stop";
      }
    },

    moving() {
      const elemField = document.getElementById("gameField");
      const fieldCords = elemField.getClientRects();

      for (let i = 0; i < 10; i++) {
        this.ballsArr.forEach((el) => {
          el.moveIt(fieldCords["0"]);
        });
      }
    },

    ballClicked(id) {
     this.ballsArr = this.ballsArr.filter(el => String(el.id)!==String(id) )
    },
  },
};
</script>

<style>
.field {
  left: 50px;
  top: 50px;
  width: 400px;
  height: 400px;
  position: relative;
  background-color: rgb(166, 236, 212);
}
</style>
