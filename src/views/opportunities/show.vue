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
    
                    <!-- Filters -->
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
    
                    <!-- Opportunities List -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        <div 
                            v-for="opportunite in paginatedOpportunities" 
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
                                <a href="#" class="block text-center py-2 px-4 bg-[#4ECDC4] text-white rounded-lg hover:bg-[#3BAFA8] transition-colors duration-200">
                                    En savoir plus
                                </a>
                            </div>
                        </div>
                    </div>
    
                    <!-- Pagination Controls -->
                    <div class="mt-8 flex justify-center">
                        <nav class="flex items-center space-x-2">
                            <button 
                                class="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                                @click="changePage(currentPage - 1)"
                                :disabled="currentPage === 1"
                            >
                                Précédent
                            </button>
                            <button 
                                v-for="page in totalPages" 
                                :key="page" 
                                class="px-4 py-2 rounded-lg border border-gray-200 hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                                :class="{'bg-[#4ECDC4] text-white': currentPage === page}"
                                @click="changePage(page)"
                            >
                                {{ page }}
                            </button>
                            <button 
                                class="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-[#4ECDC4] hover:text-[#4ECDC4]"
                                @click="changePage(currentPage + 1)"
                                :disabled="currentPage === totalPages"
                            >
                                Suivant
                            </button>
                        </nav>
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
                currentPage: 1,
                itemsPerPage: 9,
                filters: [
                    { label: "🌍 Social", value: "Social" },
                    { label: "🌱 Environnement", value: "Environnement" },
                    { label: "🎓 Éducation", value: "Éducation" },
                    { label: "🎭 Culture", value: "Culture" },
                ],
            };
        },
        computed: {
            totalPages() {
                return Math.ceil(this.filteredOpportunities.length / this.itemsPerPage);
            },
            paginatedOpportunities() {
                const start = (this.currentPage - 1) * this.itemsPerPage;
                const end = start + this.itemsPerPage;
                return this.filteredOpportunities.slice(start, end);
            },
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
    
                this.currentPage = 1;   
            },
            changePage(page) {
                if (page >= 1 && page <= this.totalPages) {
                    this.currentPage = page;
                }
            },
        },
    };
    </script>