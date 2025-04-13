<template>
    <section class="min-h-screen bg-gray-50">
        <div class="bg-gradient-to-br from-[#4ECDC4]/10 to-white pt-6 pb-8 md:pt-8 md:pb-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                        Trouvez votre mission de bénévolat idéale
                    </h1>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
                        <div class="lg:col-span-3">
                            <input v-model="searchQuery" 
                                type="text" 
                                class="block w-full pl-4 pr-4 py-3.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#4ECDC4] focus:ring-2 focus:ring-[#4ECDC4]/20 transition-all duration-200" 
                                placeholder="Rechercher une opportunité"
                                @input="filterOpportunities"
                            >
                        </div>
                    </div>
    
                    <div class="mt-6 flex flex-wrap space-x-4">
                        <div v-for="filter in filters" :key="filter.value" class="flex items-center">
                            <input
                                type="checkbox"
                                v-model="activeFilters"
                                :value="filter.value"
                                class="form-checkbox rounded text-[#4ECDC4] focus:ring-[#4ECDC4]"
                                @change="filterOpportunities"
                            >
                            <label class="ml-2 text-gray-700">{{ filter.label }}</label>
                        </div>
                    </div>
    
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div 
                            v-for="opportunite in filteredOpportunities" 
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
                filteredOpportunities: [],
                searchQuery: "",
                activeFilters: [],
                filters: [
                    { label: "🌍 Social", value: "Social" },
                    { label: "🌱 Environnement", value: "Environnement" },
                    { label: "🎓 Éducation", value: "Éducation" },
                    { label: "🎭 Culture", value: "Culture" },
                ],
            };
        },
        async mounted() {
            try {
                const response = await opportuniteApi.getAll();
                this.opportunities = response.data.opportunites;
                this.filteredOpportunities = this.opportunities;
            } catch (error) {
                console.error("Erreur lors du chargement des opportunités :", error);
            }
        },
        methods: {
            filterOpportunities() {
                this.filteredOpportunities = this.opportunities.filter(opportunite => {
                    const matchesQuery = this.searchQuery
                        ? opportunite.titre.toLowerCase().includes(this.searchQuery.toLowerCase())
                        : true;
    
                    const matchesFilters = this.activeFilters.length
                        ? this.activeFilters.includes(opportunite.type)
                        : true;
    
                    return matchesQuery && matchesFilters;
                });
            },
        },
    };
    </script>