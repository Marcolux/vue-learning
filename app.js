// the vanilla javascript approach will be like the below

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector('ul');

// const addGoal=()=>{
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent= enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = " ";
// }

// buttonEl.addEventListener('click',addGoal);

//------------------- the VUE aproach.....

Vue.createApp({
  // setting up what kind of data we are using
  // has to be called DATA

  data() {
    // we need to return an object

    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    },
  },
}).mount("#app");

// .mount is to let vue know which part of the page should be controlled by that VUE APP
