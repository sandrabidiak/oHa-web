<template>
  <div>
    <!--b-alert variant="danger" dismissible :show="showDismissibleAlert"
      @dismissed="showDismissibleAlert=false">
    </b-alert-->
  </div>
</template>

<script>
export default {
  name: 'ErrorHandlerComponent',
  mounted() {
    window.onerror = (msg, src, linenum, colnum, error) => {
      alert('An error occured');
      };
    window.addEventListener('unhandledrejection', (promiseRejectionEvent) => {
      const err = promiseRejectionEvent.reason && promiseRejectionEvent.reason.err;
      const message = err.response && err.response.data ?
        err.response.data : err.message;
        alert(message);
    });
  }
};
</script>
