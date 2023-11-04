<template>
  <div>
    <b-row class="m-0 gx-2 py-2 px-1 rounded addTaskBar">
      <b-col cols="12" class="text-start text-black badge"> Add New Task</b-col>
      <b-col>
        <b-form-group>
          <b-form-input
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Enter task title..."
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col cols="auto">
        <b-button variant="primary" class="px-2 px-md-4" @click="addTask">
          Add Task
        </b-button>
      </b-col>
    </b-row>
    <b-row
      class="gx-2 mt-2 p-2 shadow-sm rounded bg-white m-0"
      v-for="(task, index) in newTasks"
      :key="index"
    >
      <b-col class="d-flex align-items-center">
        <input
          type="checkbox"
          :id="`${task.title}_${index}`"
          :class="{ completed: task.completed }"
          class="text-start h-100"
          v-model="task.completed"
        />
        <label :for="`${task.title}_${index}`" class="ps-2">{{
          task.title
        }}</label>
      </b-col>
      <b-col sm="auto">
        <b-button
          variant="danger"
          size="sm"
          class="d-flex"
          @click="setTaskIdForDeletion(index)"
          v-b-modal.delete-task-confirmation-modal
          v-b-tooltip.hover
          title="Tooltip content"
        >
          <b-icon-trash></b-icon-trash>
        </b-button>
      </b-col>
    </b-row>
    <b-card
      class="mt-5 border-0 overflow-hidden"
      v-if="completedTasks.length"
      header-tag="h5"
      header="Completed Tasks"
      header-class="border-0 text-start"
      body-class="p-0"
    >
      <b-row
        class="gx-2 p-2 m-0"
        :class="{ completed: task.completed }"
        v-for="(task, index) in completedTasks"
        :key="index"
      >
        <b-col class="d-flex align-items-center">
          <input
            type="checkbox"
            :id="`${task.title}_${index}`"
            v-model="task.completed"
            class="text-start h-100"
          />
          <label :for="`${task.title}_${index}`" class="ps-2">{{
            task.title
          }}</label>
        </b-col>
      </b-row>
    </b-card>
    <b-modal
      centered
      id="delete-task-confirmation-modal"
      title="Are you sure?"
      hide-header-close
      header-class="text-center justify-content-center border-0"
      footer-class="border-0"
      ok-title="Ok"
    >
      <div class="d-block text-center">
        Are you sure you want to delete the task?
      </div>
      <template #modal-footer="{ close, cancel }">
        <b-button variant="light" @click="cancel"> Cancel </b-button>
        <b-button
          variant="danger"
          @click="
            removeTask(taskIdForDeletion, 'new');
            close();
          "
          >Ok</b-button
        >
      </template>
    </b-modal>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const newTask = ref("");
    const tasks = ref([]);

    const taskIdForDeletion = ref(0);

    const setTaskIdForDeletion = (newValue) => {
      taskIdForDeletion.value = newValue;
    };

    const newTasks = computed(() => {
      return tasks.value.filter((task) => !task.completed);
    });

    const completedTasks = computed(() => {
      return tasks.value.filter((task) => task.completed);
    });

    const addTask = () => {
      if (newTask.value.trim() !== "") {
        tasks.value.push({
          title: newTask.value,
          completed: false,
        });
        newTask.value = "";
      }
    };

    const removeTask = (index, taskType) => {
      if (taskType === "new") {
        tasks.value.splice(index, 1);
      } else if (taskType === "completed") {
        tasks.value.splice(tasks.value.indexOf(completedTasks.value[index]), 1);
      }
    };

    return {
      newTask,
      tasks,
      taskIdForDeletion,
      setTaskIdForDeletion,
      newTasks,
      completedTasks,
      addTask,
      removeTask,
    };
  },
};
</script>
<style scoped>
.addTaskBar {
  background: #b0d3ff;
  position: sticky;
  top: 50px;
}

.completed:nth-child(even) {
  background: rgba(217, 231, 252, 0.4);
}

.completed:nth-child(odd) {
  background: #fff;
}
</style>
