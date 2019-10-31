function show(message) {
    toast.showShortBottom(message);
  }
  
  function showLong(message) {
    toast.showLongBottom(message);
  }
  
  export default {
    show,
    showLong
  }