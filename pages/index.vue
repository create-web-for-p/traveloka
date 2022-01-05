<template>
  <div>
    <h1>Hello</h1>
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