import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const menuStore = defineStore("menuStore", () => {
  //state
  const menu = ref([
    {
      img: "/assets/imgs/menu/menu01.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu02.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu03.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu04.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu05.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu06.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/burger.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu09.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/promo_bisteck.gif",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/promo_papas.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu07.png",
      name: "Nombre item",
      price: "$110.99"
    },
    {
      img: "/assets/imgs/menu/menu08.png",
      name: "Nombre item",
      price: "$110.99"
    }
  ]);
  //getters
  //functions

  return { menu };
});
