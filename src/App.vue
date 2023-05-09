<template>
 <h1> {{title}}</h1>
  <!-- <div @click="handleClick" ref="box" class="box"></div>
  <input ref="name" style="margin-top: 20px;"/> -->
  <simple-modal heading="Modal Header" text="This is Modal Content"/>
</template>

<script>
import SimpleModal from './components/Modal.vue'
export default {
  name: 'App',
  components:{
    SimpleModal
  },
  data(){
  return{
  title:"Saifuddin"
  }
  },
  methods:{
    handleClick(){
      this.$refs.box.classList.add('active')
      this.$refs.name.focus()
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.box{
  width: 100px;
  height: 100px;
  background: green;
  cursor: pointer;
}
.box.active{
  background: red;
}
h1{
  text-align: center;
  border-bottom: 1px solid #ededed;
}
</style>
