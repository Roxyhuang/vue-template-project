<template>
  <div>
    <mt-header fixed title="固定在顶部1111"></mt-header>
    <div class="test"></div>
  </div>
</template>
<script>
  import Backend from '../../../../backend/Backend';

  export default {
    data() {
      return {
        item: {},
      };
    },
    created() {
      Backend.getInstance('321321dasdsadas').getMsgList();
    },
  };
</script>
