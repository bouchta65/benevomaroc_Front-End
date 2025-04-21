<template>
        <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div class="relative bg-[#C9559B] text-white py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold mb-4">Enregistrer une Association</h1>
                        <p class="text-xl opacity-90 max-w-3xl mx-auto">
                            Rejoignez notre plateforme et faites connaître votre association.
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
                                    <div class="flex flex-wrap justify-between items-center gap-4 p-4 md:p-8">
                                        <div class="flex items-center space-x-4">
                                            <span class="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold bg-[#00B3AD] text-white">1</span>
                                            <button type="button" @click="activeSection = 'personal'" class="text-sm md:text-base font-bold text-[#00B3AD]">
                                                Informations Personnelles
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div class="space-y-6">
                                    <h3 class="text-xl font-semibold text-gray-900">Informations Personnelles</h3>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Civilité <span class="text-red-500">*</span>
                                            </label>
                                            <select name="civilite" required
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
                                            <input type="text" name="cin" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="CIN">
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Prénom <span class="text-red-500">*</span>
                                            </label>
                                            <input type="text" name="prenom" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="Prénom">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Nom <span class="text-red-500">*</span>
                                            </label>
                                            <input type="text" name="nom" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="Nom">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Date de naissance <span class="text-red-500">*</span>
                                        </label>
                                        <input type="date" name="date_naissance" required
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone 1 <span class="text-red-500">*</span>
                                            </label>
                                            <input type="tel" name="telephone_1" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="+212 XXXXXXXXX">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone 2
                                            </label>
                                            <input type="tel" name="telephone_2"
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="+212 XXXXXXXXX">
                                        </div>
                                    </div>
                                </div>
                                <div class="space-y-6">
                                    <h3 class="text-xl font-semibold text-gray-900">Compte et Contact</h3>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span class="text-red-500">*</span>
                                        </label>
                                        <input type="email" name="email" required
                                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                            placeholder="exemple@email.com">
                                    </div>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Mot de passe <span class="text-red-500">*</span>
                                            </label>
                                            <input type="password" name="password" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="********">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Confirmer le mot de passe <span class="text-red-500">*</span>
                                            </label>
                                            <input type="password" name="password_confirmation" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="********">
                                        </div>
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Ville <span class="text-red-500">*</span>
                                        </label>
                                        <select name="ville" required
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
                                        <textarea name="adresse" rows="3" required
                                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                placeholder="Votre adresse complète"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6">
                                <button type="button" @click.prevent="validateForm"
                                        class="w-full bg-[#00B3AD] text-white py-4 rounded-lg hover:bg-[#009B96] 
                                            transition-colors duration-200 flex items-center justify-center space-x-2 text-lg">
                                    <span>Valider l’inscription</span>
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                            <div v-if="formError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                                {{ formError }}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script>
    import LoadingSpinner from "@/components/LoadingSpinner.vue";
    
    export default {
        components: {
            LoadingSpinner,
        },
        data() {
            return {
                activeSection: 'personal',
                formError: '',
            };
        },
        methods: {
            validateForm() {
                this.formError = '';
                const requiredInputs = [
                    'civilite', 'cin', 'prenom', 'nom', 'date_naissance',
                    'telephone_1', 'email', 'password', 'password_confirmation',
                    'ville', 'adresse'
                ];
    
                for (const input of requiredInputs) {
                    if (!this[input]) {
                        this.formError = 'Veuillez remplir tous les champs obligatoires';
                        return false;
                    }
                }
                const phonePattern = /^(?:\+212|0)[5-7][0-9]{8}$/;
                if (!phonePattern.test(this.telephone_1)) {
                    this.formError = 'Les numéros de téléphone doivent respecter le format +212XXXXXXXXX';
                    return false;
                }
    
                if (this.password !== this.password_confirmation) {
                    this.formError = 'Les mots de passe ne correspondent pas';
                    return false;
                }
                const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?.&]).{8,}$/;
                if (!passwordRegex.test(this.password)) {
                    this.formError = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial';
                    return false;
                }
    
                if (this.date_naissance) {
                    const birthDate = new Date(this.date_naissance);
                    const today = new Date();
                    const age = Math.floor((today - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
                    
                    if (age < 18) {
                        this.formError = 'Vous devez avoir au moins 18 ans pour vous inscrire';
                        return false;
                    }
                }
                return true;
            }
        },
    };
    </script>