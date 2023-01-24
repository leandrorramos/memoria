<template>
    <div>
        <div class="flip-card mb-3 mr-2" :class="[flipped?'flipped':'']" @click="flip()">
          <div class="flip-card-inner">
            <div class="flip-card-back">
              <img src="/img/bg_02.jpg" alt="card">
            </div>
            <div class="flip-card-front d-flex flex-column align-center justify-center">
              <img :src="img" alt="card">
            </div>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        id: Number,
        img: String,
        canFlip:Boolean,
        flipped:Boolean,
        disabledAll:Boolean
    })
    const emit = defineEmits('flipCard')

    const flip = () => {
        if(props.canFlip && !props.disabledAll){
            emit('flipcard', props.id);
        }
    }
</script>

<style scoped>
    .flip-card {
        background-color: transparent;
        width: 170px;
        height: 170px;
        perspective: 1000px;
        margin: auto;
    }
    .flip-card-inner {
        border-radius: 20px;
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
    }
    .flip-card.flipped .flip-card-inner {
        transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
        border-radius: 20px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .flip-card-front {
        background-color: #e8ebed;
        color: black;
        transform: rotateY(180deg);
        border: solid 7px #eFeFeF;
    }
    .flip-card-back {
        background-color: #e8ebed;
        color: white;
        border: solid 10px #dae4ea;
    }
    .flip-card-back img, .flip-card-front img {
        width:100%;
        height:100%;
        border-radius: 20px;
    }
</style>