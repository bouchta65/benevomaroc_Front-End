<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- Header Section -->
        <div class="relative bg-[#C9559B] text-white py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-4xl font-bold mb-4">Devenir Bénévole</h1>
                    <p class="text-xl opacity-90 max-w-3xl mx-auto">
                        Rejoignez notre communauté et participez à des missions qui vous correspondent
                    </p>
                </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 h-16 bg-gray-50 transform skew-y-2 -mb-10"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white rounded-2xl shadow-xl">
                <div class="max-w-6xl mx-auto p-8">
                    <form class="space-y-8">
                     
                        <div class="border-b border-gray-200">
                            <div class="max-w-5xl mx-auto">
                                <div class="flex justify-between p-8">
                                    <div class="flex-1 flex items-center justify-center space-x-4">
                                        <span :class="['w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold',
                                            activeSection === 'personal' ? 'bg-[#00B3AD] text-white' : 'bg-gray-200 text-gray-600']">1</span>
                                        <button type="button" 
                                            @click="activeSection = 'personal'"
                                            :class="['text-base font-bold focus:outline-none',
                                            activeSection === 'personal' ? 'text-[#00B3AD]' : 'text-gray-600']">
                                            Informations Personnelles
                                        </button>
                                    </div>
                                    <div class="flex-1 flex items-center justify-center space-x-4">
                                        <span :class="['w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold',
                                            activeSection === 'volunteer' ? 'bg-[#00B3AD] text-white' : 'bg-gray-200 text-gray-600']">2</span>
                                        <button type="button"  @click.prevent="validateAndProceed" 
                                            :class="['text-base font-bold focus:outline-none',
                                            activeSection === 'volunteer' ? 'text-[#00B3AD]' : 'text-gray-600']">
                                            Profil Bénévole
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Personal Information Section -->
                        <div v-if="activeSection === 'personal'" class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Left Column -->
                            <div class="space-y-6">
                                <h3 class="text-xl font-semibold text-gray-900">Informations Personnelles</h3>
                                
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Civilité <span class="text-red-500">*</span>
                                        </label>
                                        <select v-model="formDataPersonnelles.civilite" name="civilite" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                            <option value="">Sélectionnez</option>
                                            <option value="M.">M.</option>
                                            <option value="Mme">Mme</option>
                                            <option value="Mlle">Mlle</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            CIN <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.cin" type="text" name="cin" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="CIN">
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Prénom <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.prenom" type="text" name="prenom" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="Prénom">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Nom <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.nom" type="text" name="nom" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="Nom">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Date de naissance <span class="text-red-500">*</span>
                                    </label>
                                    <input v-model="formDataPersonnelles.date_naissance" type="date" name="date_naissance" required
                                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone 1 <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.telephone_1" type="tel" name="telephone_1" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="+212 XXXXXXXXX">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Téléphone 2
                                        </label>
                                        <input v-model="formDataPersonnelles.telephone_2" type="tel" name="telephone_2"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="+212 XXXXXXXXX">
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column -->
                            <div class="space-y-6">
                                <h3 class="text-xl font-semibold text-gray-900">Compte et Contact</h3>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Email <span class="text-red-500">*</span>
                                    </label>
                                    <input v-model="formDataPersonnelles.email" type="email" name="email" required
                                           class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                           placeholder="exemple@email.com">
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Mot de passe <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.password" type="password" name="password" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="********">
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Confirmer le mot de passe <span class="text-red-500">*</span>
                                        </label>
                                        <input v-model="formDataPersonnelles.password_confirmation" type="password" name="password_confirmation" required
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="********">
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Ville <span class="text-red-500">*</span>
                                    </label>
                                    <select v-model="formDataPersonnelles.ville" name="ville" required
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                        <option value="">Sélectionnez une ville</option>
                                        <option value="casablanca">Casablanca</option>
                                        <option value="rabat">Rabat</option>
                                        <option value="marrakech">Marrakech</option>
                                        <option value="tanger">Tanger</option>
                                        <option value="fes">Fès</option>
                                    </select>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Adresse <span class="text-red-500">*</span>
                                    </label>
                                    <textarea v-model="formDataPersonnelles.adresse" name="adresse" rows="3" required
                                              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                              placeholder="Votre adresse complète"></textarea>
                                </div>

                                <!-- Photo Upload -->
                                <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                    <div class="space-y-4">
                                        <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                                            <img v-if="formDataPersonnelles.imagePreview" :src="formDataPersonnelles.imagePreview" class="w-full h-full object-cover" alt="Preview">
                                            <i v-else class="fas fa-user text-3xl text-gray-400"></i>
                                        </div>
                                        <div>
                                            <label class="inline-flex items-center px-4 py-2 bg-[#00B3AD] text-white rounded-lg cursor-pointer hover:bg-[#009B96] transition-colors">
                                                <i class="fas fa-upload mr-2"></i>
                                                <span>Ajouter une photo</span>
                                                <input type="file" @change="handleImageUpload" name="image" class="hidden" accept="image/*" required>
                                            </label>
                                            <p class="text-xs text-gray-500 mt-2">Format JPG ou PNG, max 2MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="activeSection === 'personal'" class="mt-6">
                            <button @click.prevent="validateAndProceed" type="button"
                                    class="w-full bg-[#00B3AD] text-white py-4 rounded-lg hover:bg-[#009B96] 
                                           transition-colors duration-200 flex items-center justify-center space-x-2 text-lg">
                                <span>Continuer vers l'étape suivante</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div v-if="activeSection === 'volunteer'" class="mt-6">
                            <button @click.prevent="validateAndProceed" type="button"
                                    class="w-full bg-[#00B3AD] text-white py-4 rounded-lg hover:bg-[#009B96] 
                                           transition-colors duration-200 flex items-center justify-center space-x-2 text-lg">
                                <span>Continuer vers l'étape suivante</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                        <div v-if="formError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                            {{ formError }}
                        </div>

                    </form>
                </div>

                <!-- Login Link -->
                <div class="border-t border-gray-200 p-8 bg-gray-50 rounded-b-2xl">
                    <div class="max-w-6xl mx-auto flex justify-between items-center">
                        <p class="text-gray-600">
                            Déjà inscrit ? 
                            <a href="#" class="text-[#00B3AD] hover:underline font-medium">Connectez-vous</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeSection: 'personal',
            currentDateTime: '2025-04-18 10:45:05',
            formDataPersonnelles: {
                civilite: '',
                cin: '',
                prenom: '',
                nom: '',
                date_naissance: '',
                telephone_1: '',
                telephone_2: '',
                email: '',
                password: '',
                password_confirmation: '',
                ville: '',
                adresse: '',
                image: null,
                imagePreview: null,
            },
            formError: ''
        }
    },
    methods: {
        validateForm() {
            this.formError = '';
            const requiredInputs = [
                'civilite', 'cin', 'prenom', 'nom', 'date_naissance',
                'telephone_1', 'email', 'password', 'password_confirmation',
                'ville', 'adresse', 'image'
            ];

            for (const input of requiredInputs) {
                if (!this.formDataPersonnelles[input]) {
                    this.formError = 'Veuillez remplir tous les champs obligatoires';
                    return false;
                }
            }

            if (this.formDataPersonnelles.password !== this.formDataPersonnelles.password_confirmation) {
                this.formError = 'Les mots de passe ne correspondent pas';
                return false;
            }
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(this.formDataPersonnelles.password)) {
                this.formError = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial';
                return false;
            }

            if (this.formDataPersonnelles.date_naissance) {
                const birthDate = new Date(this.formDataPersonnelles.date_naissance);
                const today = new Date();
                const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
                
                if (age < 18) {
                    this.formError = 'Vous devez avoir au moins 18 ans pour vous inscrire';
                    return false;
                }
            }

            return true;
        },

        handleImageUpload(event) {
            const file = event.target.files[0];
            const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (!allowedTypes.includes(file.type)) {
                this.formError = 'Format d\'image invalide. Utilisez JPG ou PNG uniquement';
                return;
            }
            if (file) {
                if (file.size > 2 * 1024 * 1024) {
                    this.formError = 'L\'image ne doit pas dépasser 2MB';
                    return;
                }
                this.formDataPersonnelles.image = file;
                this.formDataPersonnelles.imagePreview = URL.createObjectURL(file);
            }
        },

        validateAndProceed() {
            if (this.validateForm()) {
                this.activeSection = 'volunteer';
            }
        },
    }
}
</script>