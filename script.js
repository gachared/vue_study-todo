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
    snackbar: {
      visible: false,
      text: '',
      timeout: 1500,
    },
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
      this.snackbar.text = this.isDone + '件のタスクを削除しました';
      this.snackbar.visible = true;
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
});
