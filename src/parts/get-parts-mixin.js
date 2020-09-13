export default {
  created() {
    this.$store.dispatch('getParts'); // this dispatch do store action called getParts
  },
  computed: {
    parts() {
      return this.$store.state.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
