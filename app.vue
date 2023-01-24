<template>
  <div>
    <v-container class="grey lighten-5">
      <v-row class="mb-10" justify="center" no-gutters>
        <h2>{{titulo}}</h2>
        <v-divider></v-divider>
      </v-row>

      <v-row v-if="tabela" class="mb-3 title" justify="center" no-gutters>
        <v-col lg="auto">
          <h3 style="margin: 0 5px">#</h3>
        </v-col>
        <v-col v-for="r in rows" :key="r" lg="3" class="text-center">
          <span>{{alfabeto[r-1]}}</span>
        </v-col>        
      </v-row>

      <template v-for="r in rows" :key="r">
        <v-row class="mb-3" justify="center" no-gutters>
          <v-col v-if="tabela" lg="auto" class="col-number d-flex justify-center flex-column">
            <h3>{{r}}</h3>
          </v-col>
          <v-col lg="3" v-for="c in cols" :key="r+c">
              <flipcard :img="cards[matriz[r-1][c-1]]"
              ></flipcard>
          </v-col>
        </v-row>        
      </template>
  
    </v-container>
  </div>
</template>

<script setup lang="ts">
const alfabeto = ref([
  "A","B","C","D","E","F","G","H","I",
  "J","K","L","M","N","O","P","Q","R",
  "S","T","U","W","X","Y","Z"
])
const tabela = ref(false);
const titulo = ref(null)
const rows = ref(null)
const cols = ref(null)
const cards = ref([])
const matriz = ref([]);

onMounted( async () =>{
  const { data } = await useFetch('/data/cards.json');
  //console.log('res', data.value);
  
  if(data.value.rows){
    titulo.value = data.value.titulo
    rows.value = data.value.rows
    cols.value = data.value.cols
    cards.value = data.value.cards
    tabela.value = data.value.tabela
    
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

</script>

<style scoped>

.title div.v-col {
  border: solid 2px #eee;
  background-color: #ccc;
}
.col-number {
  height: auto;
  background-color: #ccc;
}
.col-number h3 {
  margin: 0 5px;
}
</style>
