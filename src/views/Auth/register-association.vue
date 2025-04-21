<template>
    <LoadingSpinner v-if="isLoading" />
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
                                            <span class="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold bg-gray-200 text-gray-600">1</span>
                                            <button type="button" class="text-sm md:text-base font-bold text-gray-600">
                                                Informations Personnelles
                                            </button>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <span class="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold bg-gray-200 text-gray-600">2</span>
                                            <button type="button" class="text-sm md:text-base font-bold text-gray-600">
                                                Profil Association
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
                                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <div class="space-y-4">
                                            <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                                                <img class="w-full h-full object-cover" alt="Preview">
                                                <i class="fas fa-user text-3xl text-gray-400"></i>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center px-4 py-2 bg-[#00B3AD] text-white rounded-lg cursor-pointer hover:bg-[#009B96] transition-colors">
                                                    <i class="fas fa-upload mr-2"></i>
                                                    <span>Ajouter une photo</span>
                                                    <input type="file" name="image" class="hidden" accept="image/*" required>
                                                </label>
                                                <p class="text-xs text-gray-500 mt-2">Format JPG ou PNG, max 2MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="mt-6">
                                <button type="button"
                                        class="w-full bg-[#00B3AD] text-white py-4 rounded-lg hover:bg-[#009B96] 
                                            transition-colors duration-200 flex items-center justify-center space-x-2 text-lg">
                                    <span>Valider l’inscription</span>
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </template>