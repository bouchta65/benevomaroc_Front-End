<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-bold text-gray-900">
        ID: {{ id }}
      </h1>
      <div v-if="opportunite" class="mt-6">
        <h2 class="text-xl font-semibold text-gray-800">Opportunity Details</h2>
        <p><strong>Title:</strong> {{ opportunite.titre }}</p>
        <p><strong>Description:</strong> {{ opportunite.description }}</p>
        <p><strong>Type:</strong> {{ opportunite.type }}</p>
        <p><strong>Location:</strong> {{ opportunite.ville }}, {{ opportunite.pays }}</p>
      </div>
      <div v-else class="mt-6">
        <p>Loading opportunity details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import opportuniteApi from "@/api/opportunite";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      opportunite: null, 
    };
  },
  async mounted() {
  try {
    const response = await opportuniteApi.getById(this.id);
    this.opportunite = response.data.opportunite;
  } catch (error) {
    console.error("Erreur lors du chargement des opportunités :", error);
  }
},
};
</script>