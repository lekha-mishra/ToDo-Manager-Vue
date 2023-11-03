<template>
  <nav
    class="leftNavigationDrawer overflow-scroll d-flex align-content-start h-100"
  >
    <div class="container-fluid h-100 align-content-start">
      <div class="navbar-collapse" id="sidebarCollapse">
        <ul class="navbar-nav">
          <li v-for="(item, index) in menuItems" :key="index" class="nav-item">
            <template v-if="item.subMenu.length">
              <div
                :href="`#dropdown-${item.title}`"
                class="nav-link d-flex align-items-center"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                :aria-controls="`dropdown-${item.title}`"
              >
                <div class="ps-2">{{ item.title }}</div>
              </div>
              <div :class="'collapse'" :id="`dropdown-${item.title}`">
                <ul class="nav nav-sm flex-column">
                  <li
                    v-for="(subMenuItem, subIndex) in item.subMenu"
                    :key="subIndex"
                    class="nav-item"
                  >
                    <a
                      :to="subMenuItem.path"
                      class="nav-link d-flex align-items-center"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebar-tasks"
                    >
                      <div class="ps-2">{{ subMenuItem.title }}</div>
                    </a>
                  </li>
                </ul>
              </div>
            </template>
            <a
              v-else
              :to="item.path"
              class="nav-link d-flex align-items-center"
              role="button"
              aria-expanded="false"
              aria-controls="sidebar-tasks"
            >
              <div class="ps-2">{{ item.title }}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
const menuItems = [
  {
    title: "All Task",
    path: "/",
    subMenu: [],
    showInMenu: true,
  },
  {
    title: "Completed Task",
    path: "/",
    subMenu: [],
    showInMenu: true,
  },
  {
    title: "Deleted Task",
    path: "/",
    subMenu: [],
    showInMenu: true,
  },
];

export default {
  data() {
    return {
      menuItems,
    };
  },
};
</script>
