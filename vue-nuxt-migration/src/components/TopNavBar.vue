<template>
  <nav
    class="position-fixed top-0 bg-white p-2 w-100 shadow-sm navbar navbar-expand justify-content-between justify-content-sm-start"
    style="z-index: 2"
  >
    <div style="width: 240px">
      <a to="/"><h4 class="m-0">ToDo Task Manager</h4></a>
    </div>
    <button
      class="btn btn-sm btn-icon btn-transparent-dark order-1 order-lg-0 me-lg-2 mx-2"
      id="sidebarToggle"
      v-on:click="toggleSidebar"
    >
      <b-icon-filter-left scale="1.2"></b-icon-filter-left>
    </button>
    <div class="navbar-nav align-items-center ms-auto d-none d-sm-block">
      <b-dropdown text="Lekha Mishra" variant="text">
        <b-dropdown-item v-on:click="logOut">Log Out</b-dropdown-item>
      </b-dropdown>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logOut() {
      console.log("logout clicked");
    },
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        body.classList.contains("sidenav-toggled")
      );
    },
  },
};
</script>
