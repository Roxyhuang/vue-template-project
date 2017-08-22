<template>
  <div>
    <mt-header fixed title="固定在顶部1111"></mt-header>
    <div class="test"></div>
  </div>
</template>
<script>
  import output from '../../../../backend/mixin/output';

  export default {
    data() {
      return {
        item: {},
      };
    },
    created() {
      output.test();
    },
  };
</script>
