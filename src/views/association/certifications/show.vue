<template>
    <div class="min-h-screen bg-[#F8F9FE]">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col space-y-6">
          <!-- Statistics header -->
          <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Total Certificats -->
              <div class="bg-[#00B3AD]/10 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Total Certificats</p>
                    <p class="text-2xl font-bold text-gray-900">{{ certificats.length }}</p>
                  </div>
                  <div class="h-10 w-10 rounded-full bg-[#00B3AD] flex items-center justify-center">
                    <i class="fas fa-certificate text-white"></i>
                  </div>
                </div>
              </div>
              
              <!-- Attribués -->
              <div class="bg-green-100 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">Attribués</p>
                    <p class="text-2xl font-bold text-gray-900">{{ benevoles.filter(b => b.has_certificat).length }}</p>
                  </div>
                  <div class="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <i class="fas fa-check text-white"></i>
                  </div>
                </div>
              </div>
              
              <!-- En attente -->
              <div class="bg-amber-100 rounded-lg p-4">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-gray-600">En attente</p>
                    <p class="text-2xl font-bold text-gray-900">{{ benevoles.filter(b => !b.has_certificat).length }}</p>
                  </div>
                  <div class="h-10 w-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <i class="fas fa-clock text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Filters -->
          <div class="bg-white rounded-lg shadow-sm p-5 border border-gray-100">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <input v-model="searchQuery" type="text" placeholder="Rechercher un bénévole..." class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B3AD]" />
              </div>
              <div class="w-full md:w-64">
                <select v-model="opportuniteFilter" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B3AD]">
                  <option value="">Toutes les opportunités</option>
                  <option v-for="opp in opportunites" :key="opp.id" :value="opp.id">
                    {{ opp.titre }}
                  </option>
                </select>
              </div>
              <div class="w-full md:w-48">
                <select v-model="statusFilter" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00B3AD]">
                  <option value="">Tous les statuts</option>
                  <option value="en attente">En attente</option>
                  <option value="attribué">Attribué</option>
                </select>
              </div>
            </div>
          </div>
          
          <!-- Certificate management table -->
          <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div class="p-5 border-b flex justify-between items-center">
              <h2 class="text-lg font-semibold">Gestion des certificats</h2>
              <div class="text-sm text-gray-500">2025-04-30 02:04:54 | bouchta65</div>
            </div>
            
            <!-- Loading state -->
            <div v-if="loading" class="p-10 text-center">
              <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00B3AD]"></div>
              <p class="mt-2">Chargement...</p>
            </div>
            
            <!-- Error state -->
            <div v-else-if="error" class="p-10 text-center text-red-500">
              <i class="fas fa-exclamation-circle text-3xl"></i>
              <p class="mt-2">{{ error }}</p>
              <button @click="fetchBenevoles" class="mt-4 px-4 py-2 bg-[#00B3AD] text-white rounded">
                Réessayer
              </button>
            </div>
            
            <!-- Table -->
            <div v-else class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bénévole</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opportunité</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Période</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <!-- Empty state -->
                  <tr v-if="filteredBenevoles.length === 0">
                    <td colspan="5" class="px-6 py-12 text-center text-gray-500">
                      <i class="fas fa-search text-gray-300 text-4xl mb-3"></i>
                      <p>Aucun bénévole trouvé</p>
                    </td>
                  </tr>
                  
                  <!-- Benevole rows -->
                  <tr v-for="benevole in filteredBenevoles" :key="benevole.id" class="hover:bg-gray-50">
                    <!-- Bénévole -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="h-10 w-10 rounded-full bg-gray-100 flex-shrink-0">
                          <img :src="benevole.image || 'https://via.placeholder.com/40'" alt="" class="h-full w-full object-cover rounded-full" />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium">{{ benevole.prenom }} {{ benevole.nom }}</div>
                          <div class="text-sm text-gray-500">{{ benevole.email }}</div>
                        </div>
                      </div>
                    </td>
                    
                    <!-- Opportunité -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium">{{ benevole.titre }}</div>
                      <div class="text-xs text-gray-500">{{ benevole.ville }}</div>
                    </td>
                    
                    <!-- Période -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm">{{ formatDate(benevole.date) }}</div>
                      <div class="text-xs text-gray-500">{{ benevole.duree || 'Non spécifié' }}</div>
                    </td>
                    
                    <!-- Statut -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span :class="getStatusClass(benevole.has_certificat ? 'attribué' : 'en attente')">
                        {{ benevole.has_certificat ? 'attribué' : 'en attente' }}
                      </span>
                    </td>
                    
                    <!-- Actions -->
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex space-x-2">
                        <!-- View Button -->
                        <button 
                          @click="viewCertificate(benevole)" 
                          class="p-2 text-blue-600 hover:bg-blue-50 rounded-md"
                          title="Voir le certificat"
                          :disabled="!benevole.has_certificat"
                          :class="{'opacity-50 cursor-not-allowed': !benevole.has_certificat}"
                        >
                          <i class="fas fa-eye"></i>
                        </button>
                        
                        <!-- Upload Button -->
                        <button 
                          v-if="!benevole.has_certificat"
                          @click="uploadCertificate(benevole)" 
                          class="p-2 text-[#00B3AD] hover:bg-[#00B3AD]/10 rounded-md"
                          title="Ajouter un certificat"
                        >
                          <i class="fas fa-upload"></i>
                        </button>
                        
                        <!-- Download Button -->
                        <button 
                          v-if="benevole.has_certificat"
                          @click="downloadCertificate(benevole)" 
                          class="p-2 text-green-600 hover:bg-green-50 rounded-md"
                          title="Télécharger le certificat"
                        >
                          <i class="fas fa-download"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <!-- Pagination -->
            <div v-if="!loading && !error && pagination.last_page > 1" class="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              <p class="text-sm text-gray-700">
                Page <span class="font-medium">{{ pagination.current_page }}</span> sur <span class="font-medium">{{ pagination.last_page }}</span>
              </p>
              <div class="flex space-x-2">
                <button 
                  @click="changePage(pagination.current_page - 1)" 
                  :disabled="pagination.current_page === 1"
                  class="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  :class="{'opacity-50 cursor-not-allowed': pagination.current_page === 1}">
                  Précédent
                </button>
                <button 
                  @click="changePage(pagination.current_page + 1)" 
                  :disabled="pagination.current_page === pagination.last_page"
                  class="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  :class="{'opacity-50 cursor-not-allowed': pagination.current_page === pagination.last_page}">
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
  import certificatsApi from '@/api/certification';
  
  export default {
    name: 'GestionCertificats',
    data() {
      return {
        benevoles: [],
        filteredBenevoles: [],
        certificats: [],
        opportunites: [],
        
        searchQuery: '',
        opportuniteFilter: '',
        statusFilter: '',
        
        pagination: {
          current_page: 1,
          last_page: 1,
          total: 0,
          per_page: 10
        },
        
        loading: false,
        error: null
      };
    },
    created() {
      this.fetchBenevoles();
    },
    computed: {
      filteredBenevolesComputed() {
        let filtered = [...this.benevoles];
        
        if (this.searchQuery) {
          const query = this.searchQuery.toLowerCase();
          filtered = filtered.filter(b => 
            (b.prenom && b.prenom.toLowerCase().includes(query)) ||
            (b.nom && b.nom.toLowerCase().includes(query)) ||
            (b.email && b.email.toLowerCase().includes(query)) ||
            (b.titre && b.titre.toLowerCase().includes(query))
          );
        }
        
        if (this.opportuniteFilter) {
          filtered = filtered.filter(b => b.opportunite_id.toString() === this.opportuniteFilter.toString());
        }
        
        if (this.statusFilter) {
          if (this.statusFilter === 'attribué') {
            filtered = filtered.filter(b => b.has_certificat);
          } else if (this.statusFilter === 'en attente') {
            filtered = filtered.filter(b => !b.has_certificat);
          }
        }
        
        return filtered;
      }
    },
    methods: {
      async fetchBenevoles(page = 1) {
        this.loading = true;
        this.error = null;
        
        try {
          const token = sessionStorage.getItem('authToken');
          if (!token) {
            this.error = "Vous devez être connecté pour accéder à cette page";
            this.loading = false;
            return;
          }
          
          const response = await certificatsApi.getPostulationsByAssociationAccepted(token);
          
          if (response.data && response.data.postulations) {
            this.benevoles = response.data.postulations.data.map(postulation => {
              return {
                id: postulation.benevole_id,
                postulation_id: postulation.id,
                opportunite_id: postulation.opportunite_id,
                prenom: postulation.prenom,
                nom: postulation.nom,
                email: postulation.email,
                image: postulation.image || null,
                titre: postulation.titre,
                description: postulation.description,
                ville: postulation.ville,
                pays: postulation.pays,
                date: postulation.date,
                duree: postulation.duree,
                has_certificat: postulation.certification ? true : false,
                certificat: postulation.certification || null,
                created_at: postulation.created_at
              };
            });
            
            this.certificats = this.benevoles
              .filter(b => b.certificat)
              .map(b => ({
                id: b.certificat.id,
                benevole_id: b.id,
                opportunite_id: b.opportunite_id,
                image_path: b.certificat.image_path,
                created_at: b.certificat.created_at,
                status: 'attribué'
              }));
                        
            this.pagination = {
              current_page: response.data.postulations.current_page,
              last_page: response.data.postulations.last_page,
              total: response.data.postulations.total,
              per_page: response.data.postulations.per_page
            };
            
            this.applyFilters();
          } else {
            this.error = "Format de réponse invalide";
          }
        } catch (error) {
          console.error('Erreur:', error);
          this.error = error.response?.data?.message || 'Impossible de récupérer les bénévoles';
        } finally {
          this.loading = false;
        }
      },
      
      applyFilters() {
        this.filteredBenevoles = this.filteredBenevolesComputed;
      },
      
    
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    },
      
      getStatusClass(status) {
        const classes = {
          'attribué': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800',
          'en attente': 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800'
        };
        return classes[status] || 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800';
      },
      
      uploadCertificate(benevole) {
        console.log('Upload certificate for:', benevole);
      },
      
      viewCertificate(benevole) {
        if (!benevole.has_certificat) return;
        console.log('View certificate for:', benevole);
      },
      
      downloadCertificate(benevole) {
        if (!benevole || !benevole.certificat) return;
        console.log('Download certificate for:', benevole);
      },
      
      changePage(page) {
        if (page >= 1 && page <= this.pagination.last_page) {
          this.fetchBenevoles(page);
        }
      }
    },
    watch: {
      searchQuery() { this.applyFilters(); },
      opportuniteFilter() { this.applyFilters(); },
      statusFilter() { this.applyFilters(); }
    }
  };
  </script>
  
