<template>
    <v-app >
      <v-parallax aspect-ratio="16/9"  dark src="https://i.ibb.co/Y2Bgtwv/IMG-2.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="black--text text-h3 font-weight-thin mb-4">
            Budnikov
          </h1>
          <h4 class="subheading black--text">
            Виконання меблів в стилі LOFT під індивідуальне замовлення
          </h4>
        </v-col>
      </v-row>         
      </v-parallax>
      <v-container>
        <v-row>
          <v-col v-for="(item,i) in cardSlots" :key="`slotsmax${i}`" class="hidden-sm-and-down">
          <v-hover>
          <template v-slot:default="{ hover }">
          <v-card align="center" outlined :class="`elevation-${hover ? 24 : 6}`" class="mx-auto pa-4 transition-swing">
            <v-parallax :src="item.src"></v-parallax>
          <v-card-title class="justify-center" v-text="item.title"></v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-caption" v-text="item.text"></v-card-text>
          </v-card>
          </template>
          </v-hover>
          </v-col>
            <v-row v-for="(item,i) in cardSlots" :key="`slotsmin${i}`" class="hidden-md-and-up pa-4">
           <v-hover>
          <template v-slot:default="{ hover }">
          <v-card align="center" outlined :class="`elevation-${hover ? 24 : 6}`" class="mx-auto pa-4 transition-swing">
            <v-parallax :src="item.src"></v-parallax>
          <v-card-title class="justify-center" v-text="item.title"></v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-card-text class="text-caption" v-text="item.text"></v-card-text>
          </v-card>
          </template>
          </v-hover>             
            </v-row>
        </v-row>
        <v-row>
    <v-card >
    
        <v-card-title class="justify-center hidden-sm-and-down"><h2>Якість - запорука успіху</h2></v-card-title>
        <v-card-title class="justify-center hidden-md-and-up"><h3 >Якість - запорука успіху</h3></v-card-title>
        <v-card-text class="text-center">
        Для пофарбування металу ми використовуємо технологію "Порошкове пофарбування". Фарба є порошком, який складається з смоли, пігментів, та різних добавок, які впливають на рівномірність розливу та створення плівки.
Фарбування починається з підготовки, очистки деталі хімічними та механічними способами. У процесі фарбування заряджені частинки порошку «прилипають» до металічної деталі і тримаються там до запікання виробу при температурі від 140 до 200 °C. 
Після чого метал охолоджується і перевіряється якість поверхні.
       </v-card-text>
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-item v-for="(item,i) in instaSlots" :key="`slots${i}`" >
    
          <v-card align="center" outlined height="400" width="400" class="pa-6 transition-swing">
            <v-img :src="item.src"></v-img>
            <v-card-title class="justify-center"  v-text="item.text"></v-card-title>
            <v-btn dark :to="item.route"><v-icon>mdi-image</v-icon>До галереї </v-btn>
          </v-card>
       
      </v-slide-item>
      </v-slide-group>         
     </v-card>
      </v-row>  
       </v-container>
</v-app>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */


export default {
  name: 'HomeView',
  components: {
  },
  computed:{
    cardSlots(){
      return[
        {
          src:'https://i.ibb.co/yBqKx7s/photo-2022-04-08-11-52-28.jpg',
          title:'Оснащення торгових закладів',
          text:'Створюємо дизайн меблів на ваш смак та під ваше приміщення ( кафе, бар, ресторан, магазин, офіс), та втілюємо його в реальність',
        },
        {
          src:'https://i.ibb.co/K0c6HyN/photo-2022-04-08-11-52-14.jpg',
          title:'Меблі під замовлення',
          text:'Індивідуальні меблі для осель( столи , шафи , кухні , комоди тощо…)  Втілимо в реальність навіть картинку з Pinterest',
        },
        {
          src:'https://i.ibb.co/BtP2y27/photo-2022-04-08-11-53-03.jpg',
          title:'Вироби з металу',
          text:'Проектуємо та виготовляємо вироби з металу різної складності: сходи, навіси, металеві конструкції тощо...',
        },
      ]
    },
    instaSlots(){
      return[
        {
          src:'https://i.ibb.co/vZmv9w2/278131813-321572073406157-677706140231853296-n.jpg',
        },
        {
          src:'https://i.ibb.co/n6Xrz0P/278291065-686940852349731-8340180547965373836-n.jpg',
        },
        {
          src:'https://i.ibb.co/LR2PH88/279713997-692303042040060-6288579431860312609-n.png',
        },
        {
          src:'https://i.ibb.co/Pcb8Ykx/photo-2022-05-03-19-13-59.png',
        },
        {
          src:'https://i.ibb.co/0mkPWKm/IMG-2789.png',
        },
        {
          src:'https://i.ibb.co/Z8SBXyZ/IMG-2787.png',
        },
        {
          text:'Більше фото тут',
          route:'/gallery',
        }
      ]
    }
  }
}
</script>
