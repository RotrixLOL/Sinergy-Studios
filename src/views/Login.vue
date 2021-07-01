<template>
  <div class="mt-5">
    <h1>Log in</h1>

    <form>
      <b-row>
        <b-col cols="7">
          <b-form-input
            placeholder="Name"
            type="text"
            v-model="name"
            :state="check"
          ></b-form-input>
          <small>Minimum 3 characters</small>
        </b-col>
        <b-col cols="7">
          <b-form-input
            placeholder="Email"
            type="email"
            v-model="email"
            :state="check"
          ></b-form-input>
          <small>Minimum 10 characters</small>
        </b-col>
        <b-col cols="7">
          <b-form-input
            placeholder="Password"
            type="password"
            v-model="password"
            :state="check"
          ></b-form-input>
          <small>Minimum 8 characters</small>
        </b-col>
        <!-- <b-col md="3">
                    <b-form-select v-model="select" :options="animals"></b-form-select>
                    <p>Selection: {{select}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animalsRadio"></b-form-radio-group>
                    <p>Radio: {{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="check" :options="animalsRadio"></b-form-checkbox-group>
                    <p>Multiple: {{check}}</p>
                </b-col> -->
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      select: null,
      animals: [
        { value: null, text: "Select an animal" },
        { value: "Dog", text: "A dog" },
        { value: "Cat", text: "A cat" },
        { value: "Duck", text: "A duck" },
      ],
      radio: null,
      animalsRadio: [
        { value: "Dog", text: "A dog" },
        { value: "Cat", text: "A cat" },
        { value: "Duck", text: "A duck" },
      ],
      check: [],
    };
  },
  computed: {
    check() {
      return this.name.length > 2 ? true : false;
      return this.email.length > 9 ? true : false;
    },
  },
};
</script>
