<template>
  <div>
    <div>
      <input type="text" :value="getMessage" @input="setMessage($event.target.value)" />
    </div>
    <div>{{ getMessage }}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["getMessage"])
  },
  methods: {
    ...mapActions(["setMessage", "setMessageFromStorage"])
  },
  mounted: function() {
    this.setMessageFromStorage();
  }
};
</script>
