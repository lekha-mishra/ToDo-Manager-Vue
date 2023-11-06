<template>
  <div>
    <b-row class="m-0 gx-2 py-2 px-1 rounded addTaskBar">
      <b-col cols="12" class="text-start text-black badge"> Add New Task</b-col>
      <b-col>
        <b-form-group>
          <input
            class="form-control"
            v-model="newTask"
            @keyup.enter="addTask"
            placeholder="Enter task title..."
            data-type="newToDoData"
          />
        </b-form-group>
      </b-col>
      <b-col cols="auto">
        <b-button
          variant="primary"
          class="px-2 px-md-4"
          data-type="add-task"
          @click="addTask"
        >
          Add Task
        </b-button>
      </b-col>
    </b-row>

    <b-row
      class="gx-2 mt-2 p-2 shadow-sm rounded bg-white m-0"
      v-for="(task, index) in newTasks"
      :key="index"
    >
      <b-col class="d-flex align-items-center" :data-todo="task.title">
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
      <div class="col-auto">
        <BButton
          variant="danger"
          size="sm"
          class="d-flex btn btn-danger"
          @click="
            setTaskIdForDeletion(index);
            show = !show;
          "
          title="Tooltip content"
          data-type="showWarning"
        >
          Delete
        </BButton>
      </div>
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
    <BModal
      v-model="show"
      modelValue="delete-task-confirmation-modal"
      centered
      hideFooter
      id="delete-task-confirmation-modal"
      title="Are you sure?"
      hideHeaderClose
      headerClass="text-center justify-content-center border-0"
      footerClass="border-0"
      okTitle="Ok"
    >
      <div class="d-block text-center pb-5">
        Are you sure you want to delete the task?
      </div>
      <div class="row g-0 justify-content-end">
        <div class="col-auto">
          <b-button variant="light" @click="show = !show"> Cancel </b-button>
        </div>
        <div class="col-auto ms-2">
          <BButton
            variant="danger"
            data-type="remove-task"
            @click="
              removeTask(taskIdForDeletion, 'new');
              show = !show;
            "
          >
            Ok
          </BButton>
        </div>
      </div>
    </BModal>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { BModal, BButton } from "bootstrap-vue-next";

export default {
  props: ["checkAction"],
  components: {
    BModal,
    BButton,
  },
  setup(props) {
    const show = ref(false);

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
      let message = "failed";
      if (newTask.value.trim() !== "") {
        tasks.value.push({
          title: newTask.value,
          completed: false,
        });
        message = "success";
        newTask.value = "";
      }
      // props.checkAction(message);
    };

    const removeTask = (index, taskType) => {
      console.log("removed called");
      if (taskType === "new") {
        tasks.value.splice(index, 1);
        return true;
      } else if (taskType === "completed") {
        tasks.value.splice(tasks.value.indexOf(completedTasks.value[index]), 1);
      }
      console.log(
        tasks.value.splice(tasks.value.indexOf(completedTasks.value[index]), 1)
      );
      tasks.value.splice(tasks.value.indexOf(completedTasks.value[index]), 1);
      return false;
    };

    return {
      show,
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
