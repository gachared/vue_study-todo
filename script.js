var app = new Vue({
  el: '#app',
  data: {
    newTask:'',
    todos:[
    ]
  },
  computed: {
    isDone: function(){
      return this.todos.filter((todo)=>{
        return todo.done
      }).length    
    }
  },
  methods: {
    addTask: function(){
      this.todos.push({
        title:this.newTask,
        done:false
      })
    },
    deleteTask:function(){
      this.todos = this.todos.filter((todo)=>{
        return !todo.done
      })
    }

  }
})