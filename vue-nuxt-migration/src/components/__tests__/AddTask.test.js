import { test, describe, it, expect } from "vitest";
import ToDoList from "../ToDoList.vue";
import { mount } from "@vue/test-utils";
import sinon from "sinon";

describe("Add Task", () => {
  const spy = sinon.spy();
  const wrapper = mount(ToDoList, {
    propsData: {
      checkAction: spy,
    },
  });

  // Test function for ToDo UI Renders properly
  it("should render correctly", () => {
    expect(wrapper.html())?.toContain("Add New Task");
  });

  // Test function for Adding new task
  it("should call add task", async () => {
    await wrapper.find('[data-type="newToDoData"]').setValue("New To Do Task");
    await wrapper.find('[data-type="add-task"]').trigger("click");
    sinon.assert.calledWith(spy, "success");
  });

  // Test function for Removing created tasks
  it("should remove task", async () => {
    expect(wrapper.vm.removeTask(0, "new")).toEqual(true);
  });
});
