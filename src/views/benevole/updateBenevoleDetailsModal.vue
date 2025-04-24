<template>
    <div v-if="show" class="fixed inset-0 z-50 overflow-y-auto">
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="close"></div>
  
      <div class="relative min-h-screen flex items-center justify-center p-4">
        <div class="relative bg-white rounded-lg max-w-md w-full shadow-xl">
          <div class="flex items-center justify-between p-4 border-b">
            <h3 class="text-xl font-semibold text-gray-900">
              Modifier les détails du profil
            </h3>
            <button 
              @click="close"
              class="text-gray-400 hover:text-gray-500"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
  
          <div class="p-6">
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700">Domaines d'action</label>
                <select
                  v-model="formData.domaines_action"
                  multiple
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                >
                  <option value="Éducation">Éducation</option>
                  <option value="Environnement">Environnement</option>
                  <option value="Santé">Santé</option>
                  <option value="Culture">Culture</option>
                  <option value="Sport">Sport</option>
                </select>
                <p class="mt-1 text-sm text-gray-500">Maintenez Ctrl pour sélectionner plusieurs domaines</p>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Types de mission</label>
                <input 
                  v-model="formData.types_mission"
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                  placeholder="Ex: Soutien scolaire, Aide alimentaire..."
                />
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Disponibilités</label>
                <textarea 
                  v-model="formData.disponibilites"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                  placeholder="Ex: Disponible en soirée et weekends"
                ></textarea>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Missions préférées</label>
                <input 
                  v-model="formData.missions_preferrees"
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                  placeholder="Ex: Aide aux personnes âgées, Protection de l'environnement"
                />
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Talents et compétences</label>
                <textarea 
                  v-model="formData.talents"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                  placeholder="Ex: Communication, Leadership, Gestion de projet"
                ></textarea>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Niveau d'études</label>
                <select
                  v-model="formData.niveau_etudes"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                >
                  <option value="">Sélectionnez un niveau</option>
                  <option value="Baccalauréat">Baccalauréat</option>
                  <option value="Licence">Licence</option>
                  <option value="Master">Master</option>
                  <option value="Doctorat">Doctorat</option>
                </select>
              </div>
  
              <div>
                <label class="block text-sm font-medium text-gray-700">Métier actuel</label>
                <input 
                  v-model="formData.metier"
                  type="text"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00B3AD] focus:ring-[#00B3AD]"
                />
              </div>
  
              <div class="mt-4">
                <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
                <p v-if="successMessage" class="text-sm text-green-600">{{ successMessage }}</p>
              </div>
            </form>
          </div>
  
          <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3 rounded-b-lg">
            <button 
              type="button"
              @click="close"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Annuler
            </button>
            <button 
              type="button"
              @click="handleSubmit"
              :disabled="loading"
              class="px-4 py-2 text-sm font-medium text-white bg-[#00B3AD] rounded-md hover:bg-[#00B3AD]/90 disabled:opacity-50"
            >
              {{ loading ? 'Mise à jour...' : 'Mettre à jour' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import profileApi from '@/api/profile';
  
  export default {
    name: 'UpdateBenevoleDetailsModal',
  
    props: {
      show: {
        type: Boolean,
        default: false
      },
      userData: {
        type: Object,
        required: true
      }
    },
  
    data() {
      return {
        loading: false,
        error: null,
        successMessage: '',
        formData: {
          domaines_action: [],
          types_mission: '',
          disponibilites: '',
          missions_preferrees: '',
          talents: '',
          niveau_etudes: '',
          metier: ''
        }
      };
    },
  
    watch: {
      userData: {
        handler(newData) {
          this.formData = {
            domaines_action: Array.isArray(newData.domaines_action) 
              ? newData.domaines_action 
              : JSON.parse(newData.domaines_action || '[]'),
            types_mission: newData.types_mission || '',
            disponibilites: newData.disponibilites || '',
            missions_preferrees: newData.missions_preferrees || '',
            talents: newData.talents || '',
            niveau_etudes: newData.niveau_etudes || '',
            metier: newData.metier || ''
          };
        },
        immediate: true
      }
    },
  
    methods: {
      close() {
        this.$emit('close');
        this.error = null;
        this.successMessage = '';
      },
  
      async handleSubmit() {
        try {
          this.loading = true;
          this.error = null;
          this.successMessage = '';
  
          const dataToSend = {
            ...this.formData,
            domaines_action: JSON.stringify(this.formData.domaines_action)
          };
  
          const token = sessionStorage.getItem('authToken');
          await profileApi.updateBenevoleDetails(dataToSend, token);
  
          this.successMessage = 'Informations mises à jour avec succès';
          this.$emit('updated');
          
          setTimeout(() => {
            this.close();
          }, 1500);
  
        } catch (error) {
          this.error = error.response?.data?.message || 'Erreur lors de la mise à jour';
        } finally {
          this.loading = false;
        }
      }
    }
  };
  </script>