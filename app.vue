<template>
  <div>
    <v-container class="grey lighten-5 container">
      <v-row class="mb-2" justify="center" no-gutters>
        <h3 class="title" >{{titulo}} </h3>
        <v-divider></v-divider>
      </v-row>

      <template v-for="r in rows" :key="r">
        <v-row justify="center" no-gutters>
          <v-col lg="3" v-for="c in cols" :key="r+c">
              <flipcard 
                :id="cards[matriz[r-1][c-1]].id"
                :img="cards[matriz[r-1][c-1]].image"
                :canFlip="cards[matriz[r-1][c-1]].canFlip"
                :flipped="cards[matriz[r-1][c-1]].flipped"
                :disabledAll="disabledAllFlips"
                @flipcard="checkPair"
              ></flipcard>
          </v-col>
        </v-row>        
      </template>
      <div class="text-center">
        <v-btn class="mt-5" prepend-icon="mdi mdi-plus" color="info" @click="novojogo">NOVO JOGO</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const titulo = ref(null)
const rows = ref(null)
const cols = ref(null)
const cards = ref([])
const matriz = ref([]);

//regras do jogo
const disabledAllFlips = ref(false);
const checkFlipPair =ref([]);

const novojogo = () => {
  //utilizar botão ou F5 para reiniciar
  window.location.reload();
}

onMounted( async () =>{
  const { data } = await useFetch('/data/cards.json');
  //console.log('res', data.value);
  
  if(data.value.rows){
    titulo.value = data.value.titulo
    rows.value = data.value.rows
    cols.value = data.value.cols

    //as imagens são adicionadas duas vezes
    cards.value = data.value.cards
    //cards.value.push(...data.value.cards)

    //randomize images
    cards.value = cards.value
                          .map(value => ({ value, sort: Math.random() }))
                          .sort((a, b) => a.sort - b.sort)
                          .map(({ value }) => value)
    //matriz
    let index = 0;
    for (let i = 0; i < data.value.rows; i++) {
      let arr = [];
      for (let j = 0; j < data.value.cols; j++) {
        arr.push(index);
        index++;
      } 
      matriz.value.push(arr);
    }
    //console.log('arr', matriz)
  }
  
})

const checkPair = (id) => {
  
  //adicionar card ao array
  if(checkFlipPair.value.length < 2){
    checkFlipPair.value.push(id);
    
    let c = cards.value.find(e => e.id == id)
    c.flipped = true
    c.canFlip = false
  }


  if(checkFlipPair.value.length == 2){
    disabledAllFlips.value = true;

    let c1 = cards.value.find(e => e.id == checkFlipPair.value[0])
    let c2 = cards.value.find(e => e.id == checkFlipPair.value[1])

    //verificar se as imagens são iguais
    if(c1.image == c2.image){
      //bloquear o par
      c1.canFlip = false
      c2.canFlip = false

      //limpar checkFlipPair
      checkFlipPair.value = []
      
      setTimeout(() => {
        disabledAllFlips.value = false
      },500)

    }else{
      //virar os cards novamente
      setTimeout(() => {
        //virar card novamente
        c1.flipped = false
        c2.flipped = false

        c1.canFlip = true
        c2.canFlip = true
        
        console.log('cards virados novamente')
        checkFlipPair.value = []
        disabledAllFlips.value = false
      },1000)
    }
  }else{
    disabledAllFlips.value = false
  }

}

</script>

<style scoped>
.v-container{
  padding: 5px !important;
}
.title{  
  color: #333;
  letter-spacing: 5px;
}

.container{
  max-width: 1000px;
}
</style>
