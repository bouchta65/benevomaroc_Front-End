<template>
<div class="fixed inset-0 top-0 flex items-center justify-center bg-white/50 z-50 w-screen">
  <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500 border-opacity-70"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoadingSpinner",
  };
  </script>
  
  <style scoped>
  .animate-spin {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>