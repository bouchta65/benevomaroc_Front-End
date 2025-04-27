<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="px-6 mb-6">
      <div class="bg-white rounded-lg shadow-sm p-4">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div class="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
            <div class="relative">
              <input type="text" placeholder="Rechercher..." class="w-full sm:w-64 border border-gray-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
              <svg class="w-5 h-5 text-gray-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
              <option value="">Tous les statuts</option>
              <option value="active">Actif</option>
              <option value="draft">Brouillon</option>
              <option value="closed">Clôturé</option>
              <option value="archived">Archivé</option>
            </select>

            <select class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
              <option value="">Toutes les catégories</option>
              <option value="education">Éducation</option>
              <option value="environment">Environnement</option>
              <option value="health">Santé</option>
              <option value="humanitarian">Humanitaire</option>
              <option value="culture">Culture</option>
            </select>
          </div>

          <div class="flex items-center space-x-3">
            <button 
              @click="openAddModal" 
              class="mt-3 sm:mt-0 flex items-center px-4 py-2 bg-[#00B3AD] hover:bg-[#00B3AD]/90 text-white rounded-md shadow-sm transition-colors">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Créer une opportunité
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isLoading" class="flex justify-center items-center p-10">
      <div class="w-12 h-12 border-4 border-t-4 border-[#00B3AD] rounded-full animate-spin"></div>
    </div>

    <div v-else class="px-6 mb-6">
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Titre
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lieu
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidatures
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="opp in opportunities" :key="opp.id" class="hover:bg-gray-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-200">
                          <img :src="opp.image" class="w-full h-full object-cover">
                      </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ opp.titre }}
                      </div>
                      <div class="text-xs text-gray-500">
                        ID: {{ opp.id }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {{ opp.categorie.nom }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ opp.ville }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>{{ formatDate(opp.date) }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full" :class="getStatusClass(opp.status)">
                    {{ opp.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex items-center">
                    <span class="font-medium text-gray-900">{{ opp.postules_count }}</span>
                    <span class="text-gray-500 mx-1">/</span>
                    <span>{{ opp.nb_benevole }}</span>
                    <div class="ml-2 w-16 bg-gray-200 rounded-full h-2">
                      <div class="bg-[#00B3AD] h-2 rounded-full" :style="`width: ${calculateProgress(opp.postules_count, opp.nb_benevole)}%`"></div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-2">
                      <RouterLink :to="`/opportunites/${opp.id}`" class="inline-flex">
                      <button class="text-indigo-600 hover:text-indigo-900" title="Voir">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                      </button>
                      </RouterLink>
                    <button @click="openEditModal(opp)" class="text-blue-600 hover:text-blue-900" title="Modifier">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button @click="confirmDelete(opp)" class="text-red-600 hover:text-red-900" title="Supprimer">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          
          <!-- Modals -->
          <EditOpportunityModal 
            :show="showEditModal" 
            :opportunity="selectedOpportunity"
            @close="showEditModal = false"
            @updated="handleUpdated"
          />
          
          <AddOpportunityModal
            :show="showAddModal"
            @close="showAddModal = false"
            @created="handleCreated"
          />
          
          <!-- Modal de confirmation de suppression -->
          <div v-if="showDeleteModal" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="fixed inset-0 bg-black bg-opacity-50" @click="showDeleteModal = false"></div>
            <div class="relative min-h-screen flex items-center justify-center p-4">
              <div class="relative bg-white rounded-lg max-w-md w-full shadow-xl p-6">
                <div class="mb-4">
                  <h3 class="text-lg font-semibold text-gray-900">Confirmer la suppression</h3>
                  <p class="mt-2 text-sm text-gray-600">
                    Êtes-vous sûr de vouloir supprimer cette opportunité ? Cette action est irréversible.
                  </p>
                  <div class="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-white rounded-md flex items-center justify-center overflow-hidden border border-gray-200 mr-3">
                        <img v-if="opportunityToDelete?.image" :src="opportunityToDelete.image" class="w-full h-full object-cover">
                      </div>
                      <div>
                        <div class="font-medium">{{ opportunityToDelete?.titre }}</div>
                        <div class="text-sm text-gray-500">{{ formatDate(opportunityToDelete?.date) }} - {{ opportunityToDelete?.ville }}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end space-x-3">
                  <button 
                    @click="showDeleteModal = false" 
                    class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button 
                    @click="deleteOpportunity"
                    :disabled="isDeleting"
                    class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
                  >
                    {{ isDeleting ? 'Suppression...' : 'Supprimer' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
          <div class="flex-1 flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-700">
                Page <span class="font-medium">{{ currentPage }}</span> sur <span class="font-medium">{{ lastPage }}</span>
              </p>
            </div>
            <div class="flex space-x-2">
              <button 
                @click="goToPreviousPage()" 
                :disabled="currentPage === 1"
                class="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                :class="{'opacity-50 cursor-not-allowed': currentPage === 1}">
                Précédent
              </button>
              <button 
                @click="goToNextPage()" 
                :disabled="currentPage === lastPage"
                class="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                :class="{'opacity-50 cursor-not-allowed': currentPage === lastPage}">
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import associationDashboardApi from "@/api/associationDashboard";
import EditOpportunityModal from './updateOpportunite.vue';
import AddOpportunityModal from './addNewOpportunite.vue'; 
import { RouterLink } from "vue-router";

export default {
  components: {
    EditOpportunityModal,
    AddOpportunityModal
  },
  data() {
    return {
      opportunities: [],
      currentPage: 1,
      lastPage: 1,
      isLoading: true,
      showEditModal: false,
      showAddModal: false, 
      showDeleteModal: false,
      isDeleting: false,
      selectedOpportunity: null,
      opportunityToDelete: null
    };
  },
  mounted() {
    this.fetchOpportunities();
  },
  methods: {
    async fetchOpportunities() {
      this.isLoading = true;
      try {
        const token = sessionStorage.getItem('authToken') || localStorage.getItem('authToken');
        if (!token) {
          console.error('Aucun token d\'authentification trouvé');
          return;
        }
        
        const response = await associationDashboardApi.getOpportunitesOfAssociation(token, this.currentPage);
        
        this.opportunities = response.data.data;
        this.currentPage = response.data.current_page || 1;
        this.lastPage = response.data.last_page || 1;
      } catch (error) {
        console.error("Erreur lors du chargement des opportunités :", error);
      } finally {
        this.isLoading = false;
      }
    },
    
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchOpportunities();
      }
    },
    
    goToNextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
        this.fetchOpportunities();
      }
    },
    
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR');
    },
    
    calculateProgress(current, total) {
      if (!total || total === 0) return 0;
      return Math.min(Math.round((current / total) * 100), 100);
    },
    
    getStatusClass(status) {
      const statusClasses = {
        'actif': 'bg-green-100 text-green-800',
        'en attente': 'bg-yellow-100 text-yellow-800',
        'archive': 'bg-red-100 text-red-800'
      };
      return statusClasses[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
    },
    
    openEditModal(opportunity) {
      this.selectedOpportunity = opportunity;
      this.showEditModal = true;
    },
    
    openAddModal() {
      this.showAddModal = true;
    },
    
    confirmDelete(opportunity) {
      this.opportunityToDelete = opportunity;
      this.showDeleteModal = true;
    },
    
    async deleteOpportunity() {
      if (!this.opportunityToDelete) return;
      
      this.isDeleting = true;
      
      try {
        const token = sessionStorage.getItem('authToken') || localStorage.getItem('authToken');
        await associationDashboardApi.deleteOpportunite(token, this.opportunityToDelete.id);
        
        this.showDeleteModal = false;
        
        this.fetchOpportunities();
        
        this.showSuccessMessage('L\'opportunité a été supprimée avec succès!');
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
        
        this.showErrorMessage('Erreur lors de la suppression. Veuillez réessayer.');
      } finally {
        this.isDeleting = false;
        this.opportunityToDelete = null;
      }
    },
    
    handleUpdated(updatedOpportunity) {
      const index = this.opportunities.findIndex(opp => opp.id === updatedOpportunity.id);
      if (index !== -1) {
        this.opportunities[index] = updatedOpportunity;
      }
      
      this.fetchOpportunities();
      this.showSuccessMessage('L\'opportunité a été mise à jour avec succès!');
    },
    
    handleCreated(newOpportunity) {
      this.fetchOpportunities();
      this.showSuccessMessage('L\'opportunité a été créée avec succès!');
    },
    
    showSuccessMessage(message) {
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed bottom-4 right-4 bg-green-50 text-green-800 p-4 rounded-lg shadow-lg border border-green-200 z-50';
      successMessage.innerHTML = `<div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${message}</div>`;
      document.body.appendChild(successMessage);
      
      setTimeout(() => {
        successMessage.remove();
      }, 3000);
    },
    
    showErrorMessage(message) {
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed bottom-4 right-4 bg-red-50 text-red-800 p-4 rounded-lg shadow-lg border border-red-200 z-50';
      errorMessage.innerHTML = `<div class="flex items-center"><svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>${message}</div>`;
      document.body.appendChild(errorMessage);
      
      setTimeout(() => {
        errorMessage.remove();
      }, 3000);
    }
  }
};
</script>