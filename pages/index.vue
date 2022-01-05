<template>
  <div>
    <h1>Hello</h1>
    <NuxtLink to="/page"> page</NuxtLink>
    <NuxtLink to="/trave/2/"> travel</NuxtLink>
    <h2>{{name}}</h2>
    
  </div>
</template>
<script>
  export default {
    name: 'Button', 
    data: () => ({
      name:"peerawit"
    }),

    methods: {
   
     
    },


  }
</script>