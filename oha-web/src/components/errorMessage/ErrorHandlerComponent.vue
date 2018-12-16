<template>
  <div>
   <b-modal class="modal-error-style" ref="errorModalRef" hide-footer 
      v-bind:title="$t('error')" size="sm">
      <div class="d-block text-center">
        <h5>{{errorMessage}}</h5>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ErrorHandlerComponent',
  data() {
    return {
      errorMessage: '',
    }
  },
  methods: {
    showModal () {
      this.$refs.errorModalRef.show()
    },
    hideModal () {
      this.$refs.errorModalRef.hide()
    }
  },
  mounted() {
    window.onerror = (msg, src, linenum, colnum, error) => {
      this.errorMessage = this.$t('unknown_error');
      this.showModal();
      };
    window.addEventListener('unhandledrejection', (promiseRejectionEvent) => {
      const err = promiseRejectionEvent.reason && promiseRejectionEvent.reason.err;
      const message = err.response && err.response.data ?
        err.response.data : err.message;
        this.errorMessage = message;
        this.showModal();
    });
  }
};
</script>
