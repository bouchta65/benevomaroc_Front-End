<template>
  <div class="min-h-screen bg-[#F8F9FE]">
      <div v-if="loading" class="flex items-center justify-center h-screen ">
        <LoadingSpinner />
      </div>
    <div class="bg-white border-b">
      <div class="container mx-auto">
        <div class="px-4 py-8">
          <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
            <div class="flex-shrink-0">
              <div class="relative group">
                <div class="w-36 h-36 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img 
                  :src="profileData.image" 
                    alt="Profile"
                    class="w-full h-full object-cover"
                  />
                </div>
                <button class="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <i class="fas fa-camera text-[#00B3AD]"></i>
                </button>
              </div>
            </div>

            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div class="flex items-center gap-3">
                    <h1 class="text-2xl font-bold text-gray-900">
                      M. {{ profileData.prenom }} {{ profileData.nom }}
                    </h1>
                  </div>
                  <div class="mt-2 text-gray-600 space-y-1">
                    <p class="flex items-center">
                      <i class="fas fa-map-marker-alt w-5 text-[#C9559B]"></i>
                      {{ profileData.ville }}, Maroc
                    </p>
                    <p class="flex items-center">
                      <i class="fas fa-envelope w-5 text-[#C9559B]"></i>
                      {{ profileData.email }}
                    </p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <button @click="toggleBenevoleDetailsModal" class="px-4 py-2 border-2 border-[#00B3AD] text-[#00B3AD] rounded-lg hover:bg-[#00B3AD] hover:text-white transition-colors duration-200 flex items-center font-medium text-sm">
                    <i class="fas fa-edit mr-2"></i>
                    Modifier le profil
                  </button>
                  <button class="px-4 py-2 bg-[#00B3AD] text-white rounded-lg hover:bg-[#00B3AD]/90 transition-colors duration-200 flex items-center font-medium text-sm">
                    <i class="fas fa-download mr-2"></i>
                    CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                <i class="fas fa-hands-helping text-[#00B3AD] text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-500">Missions Complétées</p>
                <p class="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-lg flex items-center justify-center bg-[#C9559B]/10">
                <i class="fas fa-clock text-[#C9559B] text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-500">Heures de Bénévolat</p>
                <p class="text-2xl font-bold text-gray-900">48h</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                <i class="fas fa-star text-[#00B3AD] text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-500">Note Moyenne</p>
                <p class="text-2xl font-bold text-gray-900">4.8/5</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div class="flex items-center">
              <div class="h-12 w-12 rounded-lg flex items-center justify-center bg-[#C9559B]/10">
                <i class="fas fa-award text-[#C9559B] text-xl"></i>
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-500">Certifications</p>
                <p class="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="space-y-8">
              <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div class="flex items-center justify-between mb-6">
                      <div class="flex items-center space-x-3">
                      <i class="fas fa-user-circle text-[#00B3AD] text-xl"></i>
                      <h2 class="text-xl font-semibold text-gray-900">Informations Personnelles</h2>
                      </div>
                      <button 
                      @click="toggleUserInfoModal"
                      class="p-2 text-gray-500 hover:text-[#00B3AD] transition-colors rounded-lg hover:bg-[#00B3AD]/10"
                      title="Modifier les informations personnelles"
                      >
                      <i class="fas fa-edit text-lg"></i>
                      </button>
                  </div>

                  <div class="space-y-4">
                      <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                      <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                          <i class="fas fa-id-card text-[#00B3AD]"></i>
                      </div>
                      <div>
                          <p class="text-sm text-gray-500">CIN</p>
                          <p class="font-medium text-gray-900">{{ profileData.cin }}</p>
                      </div>
                      </div>

                      <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                      <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                          <i class="fas fa-birthday-cake text-[#00B3AD]"></i>
                      </div>
                      <div>
                          <p class="text-sm text-gray-500">Date de naissance</p>
                          <p class="font-medium text-gray-900">{{ formatDate(profileData.date_naissance) }}</p>
                      </div>
                      </div>

                      <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                      <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                          <i class="fas fa-phone text-[#00B3AD]"></i>
                      </div>
                      <div>
                          <p class="text-sm text-gray-500">Téléphones</p>
                          <p class="font-medium text-gray-900">{{ profileData.telephone_1 }}</p>
                          <p class="font-medium text-gray-900">{{ profileData.telephone_2 }}</p>
                      </div>
                      </div>

                      <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                      <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                          <i class="fas fa-map-marker-alt text-[#00B3AD]"></i>
                      </div>
                      <div>
                          <p class="text-sm text-gray-500">Adresse</p>
                          <p class="font-medium text-gray-900">{{ profileData.adresse }}</p>
                          <p class="font-medium text-gray-900">{{ profileData.ville }}, Maroc</p>
                      </div>
                      </div>
                  </div>
              </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-briefcase text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Formation & Profession</h2>
              </div>
              
              <div class="space-y-4">
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-graduation-cap text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Niveau d'études</p>
                    <p class="font-medium text-gray-900">{{ profileData.niveau_etudes }}</p>
                  </div>
                </div>
                
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-briefcase text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Métier actuel</p>
                    <p class="font-medium text-gray-900">{{ profileData.metier }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-2 space-y-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-bullseye text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Domaines d'action</h2>
              </div>
              
              <div class="flex flex-wrap gap-2">
                  <span 
                  v-for="domaine in parsedDomainesAction" 
                  class="px-3 py-1.5 bg-[#00B3AD]/10 text-[#00B3AD] rounded-full text-sm font-medium">
                  {{ domaine }}
                  </span>
              </div>
            </div>
                <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center space-x-3">
                    <i class="fas fa-star text-[#00B3AD] text-xl"></i>
                    <h2 class="text-xl font-semibold text-gray-900">Top 3 Opportunités</h2>
                  </div>
                </div>
                
        
              </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-calendar-alt text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Disponibilités</h2>
              </div>
              
              <div class="prose prose-sm max-w-none text-gray-600">
                  {{ profileData.disponibilites }}
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-star text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Talents et compétences</h2>
              </div>
              
                <span >
                  {{ profileData.talents }}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <UpdateUserInfoModal 
  :show="showUserInfoModal"
  :user-data="profileData"
  @close="toggleUserInfoModal"
  @updated="handleUserInfoUpdated"
/>
<UpdateBenevoleDetailsModal 
:show="showBenevoleDetailsModal"
:user-data="profileData"
@close="toggleBenevoleDetailsModal"
@updated="handleBenevoleDetailsUpdated"
/>
</template>

<script>
import profileApi from '@/api/profile';
import LoadingSpinner from "@/components/opportunites/opportunitesspinner.vue";
import UpdateUserInfoModal from './updateUserInfoModal.vue';
import UpdateBenevoleDetailsModal from './updateBenevoleDetailsModal.vue';
export default {
  components: {
      LoadingSpinner,
      UpdateUserInfoModal,
      UpdateBenevoleDetailsModal
  },
  data() {
    return {
      loading: true,
      error: null,
      profileData: {
        civilite: '',
        prenom: '',
        nom: '',
        email: '',
        image: '',
        cin: '',
        adresse: '',
        date_naissance: '',
        ville: '',
        telephone_1: '',
        telephone_2: '',
        domaines_action: '[]',
        types_mission: '',
        disponibilites: '',
        missions_preferrees: '[]',
        talents: '',
        niveau_etudes: '',
        metier: '',
        cv: null,
      },
      showUserInfoModal: false,
      showBenevoleDetailsModal: false,
      topOpportunites: [],
    };
  },

  computed: {
    parsedDomainesAction() {
      try {
        return JSON.parse(this.profileData.domaines_action);
      } catch {
        return [];
      }
    },

    parsedMissionsPreferees() {
      try {
        return JSON.parse(this.profileData.missions_preferrees);
      } catch {
        return [];
      }
    },

    talentsArray() {
      return this.profileData.talents?.split(',').map(t => t.trim()) || [];
    },

    formattedDateNaissance() {
      if (!this.profileData.date_naissance) return '';
      return new Date(this.profileData.date_naissance).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  },

  methods: {
    async fetchProfileData() {
      try {
        const token = sessionStorage.getItem('authToken');
        const response = await profileApi.getProfile(token);
        
        if (response.data.benevole) {
          this.profileData = {
            ...response.data.benevole,
          };
        } 
      } catch (error) {
        this.error = error.message || 'Erreur lors de la récupération des données de profil';
      }
    },
    
    async fetchBenevoleOpportunites() {
      try {
        console.log('Fetching opportunities...');
        const token = sessionStorage.getItem('authToken');
        console.log('Token retrieved:', !!token);
        const response = await profileApi.getTop3Opportunites(token);
        console.log('API response:', response);
        return response.data.opportunites?.slice(0, 3) || [];
      } catch (error) {
        console.error('Error fetching opportunites:', error);
        return [];
      }
    },
    
    toggleUserInfoModal() {
      this.showUserInfoModal = !this.showUserInfoModal;
    },

    handleUserInfoUpdated() {
      this.fetchProfileData();
    },
    
    toggleBenevoleDetailsModal() {
      this.showBenevoleDetailsModal = !this.showBenevoleDetailsModal;
    },

    handleBenevoleDetailsUpdated() {
      this.fetchProfileData();
    },
    
    formatDate(date) {
      if (!date) return 'N/A';
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("fr-FR", options).format(new Date(date));
    },
    
    getStatusClass(status) {
      switch (status) {
        case 'Acceptée':
          return 'bg-green-100 text-green-800';
        case 'En attente':
          return 'bg-yellow-100 text-yellow-800';
        case 'Refusée':
          return 'bg-red-100 text-red-800';
        case 'Terminée':
          return 'bg-blue-100 text-blue-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    }
  },

  async created() {
    try {
      this.loading = true;
      await this.fetchProfileData();
      this.topOpportunites = await this.fetchBenevoleOpportunites();
    } catch (error) {
      console.error('Error during initialization:', error);
    } finally {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
};
</script>