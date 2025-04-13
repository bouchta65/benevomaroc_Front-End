<template>
    <section class="min-h-screen bg-gray-50">
        <div class="bg-gradient-to-br from-[#4ECDC4]/10 to-white pt-6 pb-8 md:pt-8 md:pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Trouvez votre mission de bénévolat idéale
                    </h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div 
                            v-for="opportunite in opportunities" 
                            :key="opportunite.id" 
                            class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300"
                        >
                            <div class="relative">
                                <img :src="opportunite.image" alt="Image" class="w-full h-48 object-cover">
                                <div class="absolute top-4 left-4">
                                    <span class="bg-[#4ECDC4] text-white text-xs px-3 py-1 rounded-full">
                                        {{ opportunite.type }}
                                    </span>
                                </div>
                            </div>
                            <div class="p-6">
                                <h3 class="text-lg font-bold text-gray-900 mb-3">
                                    {{ opportunite.titre }}
                                </h3>
                                <div class="flex items-center text-sm text-gray-500 mb-2">
                                    {{ opportunite.ville }}, {{ opportunite.pays }}
                                </div>
                                <div class="flex justify-between text-sm mb-2">
                                    <span>Engagement:</span>
                                    <span>{{ opportunite.engagement_requis }}</span>
                                </div>
                                <a href="#" class="block text-center py-2 px-4 bg-[#4ECDC4] text-white rounded-lg hover:bg-[#3BAFA8] transition-colors duration-200">
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    import opportuniteApi from "@/api/opportunite";
    
    export default {
        data() {
            return {
                opportunities: [],
            };
        },
        async mounted() {
            try {
                const response = await opportuniteApi.getAll();
                this.opportunities = response.data.opportunites;
            } catch (error) {
                console.error("Erreur lors du chargement des opportunités :", error);
            }
        },
    };
    </script>
    
    <style scoped>
    /* Add your styles for the card layout here */
    </style>