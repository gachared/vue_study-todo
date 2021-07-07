var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    newTask: '',
    todos: [],
  },
  computed: {
    isDone: function () {
      return this.todos.filter((todo) => {
        return todo.done;
      }).length;
    },
    progress: function () {
      return 100 * (this.isDone / this.todos.length);
      //return 50;
    },
  },
  methods: {
    addTask: function () {
      this.todos.push({
        title: this.newTask,
        done: false,
      });
      this.newTask = '';
    },
    deleteTask: function () {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
});
