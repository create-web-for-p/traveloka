<template>
  <div>
      <h3 data-testid="title">{{ title }}</h3>
       <div>
      Username: <input type="text" name="username" id="username"
        v-model="username" data-testid="username">
    </div>
    <div>
      Password: <input type="password" name="password" id="password"
        v-model="password" data-testid="password">
    </div>
     <button @click="summit">submit</button>
    <p data-testid="Times">Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
      <input  data-testid="click" type="text" id="fname" name="fname"><br><br>
  </div>
</template>

<script>
  import Swal from 'sweetalert2'
  export default {

    name: 'Button',
    
    data: () => ({
      count: 0,
      title:'Register',
      username:'',
      password:''
    }),
    methods: {
      increment() {
        this.count++
      },
      summit () {
          if(this.username == '' && this.password == '')
          {
            Swal.fire('Any fool can use a computer')
          }else{
            Swal.fire('The Internet?',
                      'That thing is still around?',
                      'question'
            )
          }
          
      }
    },
  }
</script>