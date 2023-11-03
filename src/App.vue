<template>
  <div id="app">
    <TopNavBar />
    <main class="d-flex flex-row">
      <LeftNavBar />
      <b-container class="pt-3 pb-5" style="min-height: calc(100vh - 54px)">
        <ToDoList />
      </b-container>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
main {
  padding-top: 54px;
  background: #f0f2f5;
  padding-left: 260px;
  transition: padding-left 0.4s;
}

.sidenav-toggled main {
  padding-left: 0px;
  transition: padding-left 0.4s;
}

.leftNavigationDrawer {
  background: #2e2e30;
  min-width: 260px;
  padding-top: 20px;
  left: 0px;
  transition: left 0.4s;
  min-height: calc(100vh - 54px);
  position: fixed;
  z-index: 1;
  top: 54px;
  align-self: baseline;
  color: white;
}

.sidenav-toggled .leftNavigationDrawer {
  left: -260px;
  transition: left 0.4s;
}

@media (max-width: 968px) {
  main {
    padding-left: 0;
    transition: padding-left 0.4s;
  }
  .sidenav-toggled main {
    padding-left: 0;
    transition: padding-left 0.4s;
  }

  main div.container-lg {
    position: relative;
    left: 260px;
    transition: left 0.4s;
  }
  .sidenav-toggled main div.container-lg {
    left: 0px;
    transition: left 0.4s;
  }

  .leftNavigationDrawer {
    top: 47px;
  }
}
</style>
