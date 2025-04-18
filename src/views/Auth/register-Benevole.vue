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
                <!-- Progress Steps -->
                <div class="border-b border-gray-200">
                    <div class="max-w-5xl mx-auto">
                        <div class="flex justify-between p-8">
                            <div class="flex-1 flex items-center justify-center space-x-4">
                                <span class="w-10 h-10 rounded-full bg-[#00B3AD] text-white flex items-center justify-center text-lg font-semibold">1</span>
                                <span class="text-base font-bold text-[#00B3AD]">
                                    Informations Personnelles
                                </span>
                            </div>
                            <div class="flex-1 flex items-center justify-center space-x-4">
                                <span class="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-lg font-semibold">2</span>
                                <span class="text-base font-bold text-gray-600">
                                    Profil Bénévole
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="max-w-6xl mx-auto p-8">
                    <form class="space-y-8">
                        <!-- Personal Information Section -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <!-- Left Column -->
                            <div class="space-y-6">
                                <h3 class="text-xl font-semibold text-gray-900">Informations Personnelles</h3>
                                
                                <!-- Basic Fields -->
                                <div class="space-y-4">
                                    <!-- Civilité & CIN -->
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Civilité <span class="text-red-500">*</span>
                                            </label>
                                            <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
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
                                            <input type="text" 
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="CIN">
                                        </div>
                                    </div>

                                    <!-- Nom & Prénom -->
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Prénom <span class="text-red-500">*</span>
                                            </label>
                                            <input type="text"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="Prénom">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Nom <span class="text-red-500">*</span>
                                            </label>
                                            <input type="text"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="Nom">
                                        </div>
                                    </div>

                                    <!-- Date de naissance -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Date de naissance <span class="text-red-500">*</span>
                                        </label>
                                        <input type="date"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                    </div>

                                    <!-- Téléphones -->
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone 1 <span class="text-red-500">*</span>
                                            </label>
                                            <input type="tel"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="+212 XXXXXXXXX">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Téléphone 2
                                            </label>
                                            <input type="tel"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="+212 XXXXXXXXX">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Right Column -->
                            <div class="space-y-6">
                                <h3 class="text-xl font-semibold text-gray-900">Compte et Contact</h3>
                                
                                <div class="space-y-4">
                                    <!-- Email -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span class="text-red-500">*</span>
                                        </label>
                                        <input type="email"
                                               class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                               placeholder="exemple@email.com">
                                    </div>

                                    <!-- Password Fields -->
                                    <div class="grid grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Mot de passe <span class="text-red-500">*</span>
                                            </label>
                                            <input type="password"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="********">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                                Confirmer le mot de passe <span class="text-red-500">*</span>
                                            </label>
                                            <input type="password"
                                                   class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                   placeholder="********">
                                        </div>
                                    </div>

                                    <!-- Ville -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Ville <span class="text-red-500">*</span>
                                        </label>
                                        <select class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent">
                                            <option value="">Sélectionnez une ville</option>
                                            <option value="casablanca">Casablanca</option>
                                            <option value="rabat">Rabat</option>
                                            <option value="marrakech">Marrakech</option>
                                            <option value="tanger">Tanger</option>
                                            <option value="fes">Fès</option>
                                        </select>
                                    </div>

                                    <!-- Adresse -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">
                                            Adresse <span class="text-red-500">*</span>
                                        </label>
                                        <textarea rows="3"
                                                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00B3AD] focus:border-transparent"
                                                  placeholder="Votre adresse complète"></textarea>
                                    </div>

                                    <!-- Photo Upload -->
                                    <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                        <div class="space-y-4">
                                            <div class="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                                                <i class="fas fa-user text-3xl text-gray-400"></i>
                                            </div>
                                            <div>
                                                <label class="inline-flex items-center px-4 py-2 bg-[#00B3AD] text-white rounded-lg cursor-pointer hover:bg-[#009B96] transition-colors">
                                                    <i class="fas fa-upload mr-2"></i>
                                                    <span>Ajouter une photo</span>
                                                    <input type="file" class="hidden" accept="image/*">
                                                </label>
                                                <p class="text-xs text-gray-500 mt-2">Format JPG ou PNG, max 2MB</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Next Button -->
                        <div class="mt-6">
                            <button type="button"
                                    class="w-full bg-[#00B3AD] text-white py-4 rounded-lg hover:bg-[#009B96] 
                                           transition-colors duration-200 flex items-center justify-center space-x-2 text-lg">
                                <span>Continuer vers l'étape suivante</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
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