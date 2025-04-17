<template>
  <LoadingSpinner v-if="isLoading" />
  <ErrorComponent v-else-if="error" :message="error" />
  <div class="bg-gray-50 min-h-screen py-8" v-else-if="opportunite">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Navigation précédente -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div class="relative">
                        <img :src="opportunite.image" :alt="opportunite.titre" class="w-full h-[400px] object-cover">
                        <div class="absolute top-4 left-4 flex space-x-2">
                            <span class="bg-[#4ECDC4] text-white px-3 py-1 rounded-full text-sm">
                                {{ opportunite.type }}
                            </span>
                            <span class="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                🕒 {{ opportunite.engagement_requis }}
                            </span>
                        </div>
                    </div>
                    
                    <div class="p-6">
                        <h1 class="text-2xl font-bold text-gray-900 mb-4">
                          {{ opportunite.titre }}
                        </h1>
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#4ECDC4] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                </svg>
                                <span class="text-gray-600">{{ opportunite.ville }}, {{ opportunite.pays }}</span>
                            </div>
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-[#4ECDC4] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span class="text-gray-600">Places: {{ opportunite.nb_benevole - opportunite.postules_count }}/{{ opportunite.nb_benevole }} disponibles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import opportuniteApi from "@/api/opportunite";
import ErrorComponent from "@/components/erreur.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
  components: {
    ErrorComponent,
    LoadingSpinner
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isLoading: true,
      opportunite: null,
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await opportuniteApi.getById(this.id);
      this.opportunite = response.data.opportunite;
    } catch (error) {
      this.error = "Impossible de charger les données.";
    } finally {
      this.isLoading = false;
    }
  },
};
</script>