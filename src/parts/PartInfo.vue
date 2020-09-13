<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts-mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validatotr(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { id, partType } = this;

      return this.parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
