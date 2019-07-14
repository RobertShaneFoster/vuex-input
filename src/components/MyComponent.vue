<template>
  <div>
    <div>
      <input type="text" :value="getState" @input="callSetState($event.target.value)" />
    </div>
    <div>{{ getState }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { contstants } from "../contstants";

export default {
  data: function() {
    return {
      payload: null
    };
  },
  created: function() {
    this.payload = contstants;
  },
  computed: {
    ...mapGetters(["getState"])
  },
  methods: {
    ...mapActions(["setState", "setStateFromStorage"]),
    callSetState(newValue) {
      this.payload.value = newValue;
      this.setState(this.payload);
    }
  },
  mounted: function() {
    this.setStateFromStorage(this.payload);
  }
};
</script>
