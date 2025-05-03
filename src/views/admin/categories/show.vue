<template>
  <div class="p-4 bg-gray-50 min-h-screen">
    <div class="max-w-5xl mx-auto">
      <div class="bg-white p-4 rounded mb-4 shadow-sm">
        <div class="flex items-center">
          <div class="bg-[#00B3AD]/10 p-3 rounded">
            <div class="flex gap-3 items-center">
              <i class="fas fa-tags text-[#00B3AD]"></i>
              <div>
                <p class="text-sm text-gray-600">Total des catégories</p>
                <p class="text-xl font-bold">{{ categories.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-4 rounded mb-4 shadow-sm flex flex-col sm:flex-row gap-3">
        <input 
          type="text" 
          placeholder="Rechercher..." 
          class="border rounded px-3 py-2 flex-1"
          v-model="searchQuery"
          @input="filterCategories"
        />
        <button 
          @click="openAddModal"
          class="bg-[#00B3AD] text-white px-4 py-2 rounded"
        >
          <i class="fas fa-plus mr-2"></i> Nouvelle catégorie
        </button>
      </div>
      
      <div class="bg-white rounded shadow-sm">
        <div v-if="loading" class="p-8 text-center">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00B3AD]"></div>
          <p class="mt-2">Chargement...</p>
        </div>
        
        <div v-else-if="error" class="p-8 text-center text-red-500">
          <i class="fas fa-exclamation-circle text-2xl"></i>
          <p class="mt-2">{{ error }}</p>
          <button @click="fetchCategories" class="mt-3 bg-[#00B3AD] text-white px-3 py-1 rounded">
            Réessayer
          </button>
        </div>
        
        <table v-else class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="p-3 text-left">Nom</th>
              <th class="p-3 text-left">Description</th>
              <th class="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="filteredCategories.length === 0">
              <td colspan="3" class="p-8 text-center text-gray-500">
                <i class="fas fa-folder-open text-2xl opacity-30 mb-2"></i>
                <p>Aucune catégorie trouvée</p>
              </td>
            </tr>
            
            <tr v-for="category in filteredCategories" :key="category.id" class="border-t hover:bg-gray-50">
              <td class="p-3">
                <div class="flex items-center">
                  <i class="fas fa-tag text-[#00B3AD] mr-2"></i>
                  <span>{{ category.nom }}</span>
                </div>
              </td>
              <td class="p-3">{{category.description }}</td>
              <td class="p-3">
                <button @click="editCategory(category)" class="text-blue-600 mr-3">
                  <i class="fas fa-edit"></i>
                </button>
                <button @click="confirmDelete(category)" class="text-red-600">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded max-w-md w-full p-5">
        <div class="flex justify-between items-center mb-4 border-b pb-2">
          <h3 class="font-medium">
            {{ isEditing ? 'Modifier la catégorie' : 'Ajouter une catégorie' }}
          </h3>
          <button @click="closeModal" class="text-gray-400">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label class="block mb-1">Nom</label>
            <input 
              v-model="form.nom"
              type="text" 
              class="w-full border rounded px-3 py-2"
              required
            />
          </div>
          
          <div class="mb-4">
            <label class="block mb-1">Description</label>
            <textarea 
              v-model="form.description"
              rows="3"
              class="w-full border rounded px-3 py-2"
              required
            ></textarea>
          </div>
          
          <div v-if="formError" class="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
            {{ formError }}
          </div>
          
          <div class="flex justify-end gap-2 border-t pt-3">
            <button 
              type="button"
              @click="closeModal"
              class="px-3 py-2 border rounded"
            >
              Annuler
            </button>
            <button 
              type="submit"
              class="px-3 py-2 bg-[#00B3AD] text-white rounded"
              :disabled="formProcessing"
            >
              <i v-if="formProcessing" class="fas fa-spinner fa-spin mr-1"></i>
              {{ isEditing ? 'Mettre à jour' : 'Ajouter' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded w-full max-w-sm p-5">
        <div class="text-center mb-4">
          <i class="fas fa-exclamation-triangle text-red-500 text-2xl mb-2"></i>
          <h3 class="font-medium mb-1">Confirmer la suppression</h3>
          <p class="text-sm text-gray-600">
            Supprimer la catégorie <strong>{{ categoryToDelete?.nom }}</strong> ?
          </p>
        </div>
        
        <div v-if="deleteError" class="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
          {{ deleteError }}
        </div>
        
        <div class="flex justify-end gap-2">
          <button 
            @click="closeDeleteModal"
            class="px-3 py-2 border rounded"
          >
            Annuler
          </button>
          <button 
            @click="deleteCategory"
            class="px-3 py-2 bg-red-600 text-white rounded"
            :disabled="deleteProcessing"
          >
            <i v-if="deleteProcessing" class="fas fa-spinner fa-spin mr-1"></i>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoriesApi from '@/api/categories';

export default {
  data() {
    return {
      categories: [],
      filteredCategories: [],
      searchQuery: '',
      loading: false,
      error: null,
      
      showModal: false,
      isEditing: false,
      form: {
        id: null,
        nom: '',
        description: ''
      },
      formError: null,
      formProcessing: false,
      
      showDeleteModal: false,
      categoryToDelete: null,
      deleteError: null,
      deleteProcessing: false
    };
  },
  
  created() {
    this.fetchCategories();
  },
  
  methods: {
    async fetchCategories() {
      this.loading = true;
      this.error = null;
      
      try {
        const token = sessionStorage.getItem('authToken');
        const response = await categoriesApi.getAllCategories(token);
        this.categories = response.data.categorie || [];
        this.filteredCategories = [...this.categories];
      } catch (error) {
        this.error = 'Impossible de charger les catégories';
      } finally {
        this.loading = false;
      }
    },
    
    filterCategories() {
      if (!this.searchQuery) {
        this.filteredCategories = [...this.categories];
        return;
      }
      
      const query = this.searchQuery.toLowerCase();
      this.filteredCategories = this.categories.filter(cat => 
        cat.nom.toLowerCase().includes(query) ||
        cat.description.toLowerCase().includes(query)
      );
    },
    
    openAddModal() {
      this.isEditing = false;
      this.form = { id: null, nom: '', description: '' };
      this.formError = null;
      this.showModal = true;
    },
    
    editCategory(category) {
      this.isEditing = true;
      this.form = { ...category };
      this.formError = null;
      this.showModal = true;
    },
    
    closeModal() {
      this.showModal = false;
    },
    
    async submitForm() {
      this.formProcessing = true;
      this.formError = null;
      
      try {
        const token = sessionStorage.getItem('authToken');
        const data = {
          nom: this.form.nom,
          description: this.form.description
        };
        
        if (this.isEditing) {
          await categoriesApi.updateCategory(token, this.form.id, data);
        } else {
          await categoriesApi.addCategory(token, data);
        }
        
        await this.fetchCategories();
        this.closeModal();
      } catch (error) {
        this.formError = 'Erreur lors de l\'enregistrement';
      } finally {
        this.formProcessing = false;
      }
    },
    
    confirmDelete(category) {
      this.categoryToDelete = category;
      this.deleteError = null;
      this.showDeleteModal = true;
    },
    
    closeDeleteModal() {
      this.showDeleteModal = false;
    },
    
    async deleteCategory() {
      if (!this.categoryToDelete) return;
      
      this.deleteProcessing = true;
      try {
        const token = sessionStorage.getItem('authToken');
        await categoriesApi.deleteCategory(token, this.categoryToDelete.id);
        await this.fetchCategories();
        this.closeDeleteModal();
      } catch (error) {
        this.deleteError = 'Erreur lors de la suppression';
      } finally {
        this.deleteProcessing = false;
      }
    }
  }
};
</script>