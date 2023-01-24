<template>
    <div>
        <div class="flip-card" :class="[cardFlipped?'flipped':'']" @click="flip()">
          <div class="flip-card-inner">
            <div class="flip-card-back">
              <img src="/img/bg_01.png" alt="card">
            </div>
            <div class="flip-card-front d-flex flex-column align-center justify-center pa-1">
              <img :src="img" alt="card">
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        img: String,
    })

    const cardFlipped = ref(false);
    
    const flip = () => {
        cardFlipped.value = !cardFlipped.value;
    }
</script>

<style scoped>
    .flip-card {
        background-color: transparent;
        width: 200px;
        height: 200px;
        perspective: 1000px;
        margin: auto;
    }
    .flip-card-inner {
        border-radius: 10px;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .flip-card.flipped .flip-card-inner {
        transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
        border-radius: 10px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .flip-card-front {
        background-color: #fafafa;
        color: black;
        transform: rotateY(180deg);
        border: solid 10px #eFeFeF;
    }
    .flip-card-back {
        background-color: #e8ebed;
        color: white;
        border: solid 10px #dae4ea;
    }
    .flip-card-back img {
        width:100%;
        height:100%;
        border-radius: 10px;
    }
</style>