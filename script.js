var app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: {
    newTask: '',
    todos: [
      {
        title: 'task sample',
        done: false,
      },
      {
        title: 'todo sample',
        done: false,
      },
    ],
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
