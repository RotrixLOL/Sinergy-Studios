<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="dark">

      <b-container>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Sinergy Studios</b-navbar-brand>

        <b-collapse id="nav_collapse" is-nav>

          <b-navbar-nav>
            <b-nav-item :to="'/'" exact>Home</b-nav-item>
            <b-nav-item :to="'about'">About</b-nav-item>
            <b-nav-item :to="'cards'">Games</b-nav-item>
            <b-nav-item :to="'login'">Log in</b-nav-item>
          </b-navbar-nav>

        </b-collapse>

      </b-container>

    </b-navbar>

    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>