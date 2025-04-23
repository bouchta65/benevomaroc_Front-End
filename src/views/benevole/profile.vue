<template>
  <div class="min-h-screen bg-[#F8F9FE]">
    <!-- Status Bar -->
    <div class="bg-white border-b border-gray-200">
      <div class="container mx-auto">
        <div class="flex justify-between items-center h-12 px-4">
          <div class="flex items-center space-x-4">
            <div class="w-8 h-8 rounded-full bg-[#00B3AD] flex items-center justify-center">
              <span class="text-white font-bold text-sm">BM</span>
            </div>
            <span class="text-[#00B3AD] font-semibold">BénévoMaroc</span>
          </div>
          <div class="flex items-center space-x-6 text-sm text-gray-600">
            <div class="flex items-center">
              <i class="far fa-clock mr-2 text-[#C9559B]"></i>
              2025-04-23 14:14:17 UTC
            </div>
            <div class="flex items-center">
              <i class="far fa-user-circle mr-2 text-[#00B3AD]"></i>
              bouchta65
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Profile Header -->
    <div class="bg-white border-b">
      <div class="container mx-auto">
        <div class="px-4 py-8">
          <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
            <!-- Profile Image & Basic Info -->
            <div class="flex-shrink-0">
              <div class="relative group">
                <div class="w-36 h-36 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                  <img 
                    src="https://i.pravatar.cc/300" 
                    alt="Profile"
                    class="w-full h-full object-cover"
                  />
                </div>
                <button class="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <i class="fas fa-camera text-[#00B3AD]"></i>
                </button>
              </div>
            </div>

            <!-- User Info -->
            <div class="flex-1">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div class="flex items-center gap-3">
                    <h1 class="text-2xl font-bold text-gray-900">
                      M. Karim Bouchta
                    </h1>
                    <span class="px-3 py-1 bg-[#00B3AD]/10 text-[#00B3AD] text-sm font-medium rounded-full">
                      Bénévole Vérifié
                    </span>
                  </div>
                  <div class="mt-2 text-gray-600 space-y-1">
                    <p class="flex items-center">
                      <i class="fas fa-map-marker-alt w-5 text-[#C9559B]"></i>
                      Casablanca, Maroc
                    </p>
                    <p class="flex items-center">
                      <i class="fas fa-envelope w-5 text-[#C9559B]"></i>
                      bouchta65@gmail.com
                    </p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <button class="px-4 py-2 border-2 border-[#00B3AD] text-[#00B3AD] rounded-lg hover:bg-[#00B3AD] hover:text-white transition-colors duration-200 flex items-center font-medium text-sm">
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

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Stats Overview -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <!-- Stats Card 1 -->
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

          <!-- Stats Card 2 -->
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

          <!-- Stats Card 3 -->
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

          <!-- Stats Card 4 -->
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

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left Column -->
          <div class="space-y-8">
            <!-- Personal Information -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-user-circle text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Informations Personnelles</h2>
              </div>
              
              <!-- CIN -->
              <div class="space-y-4">
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-id-card text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">CIN</p>
                    <p class="font-medium text-gray-900">BE123456</p>
                  </div>
                </div>

                <!-- Date de naissance -->
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-birthday-cake text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Date de naissance</p>
                    <p class="font-medium text-gray-900">15 avril 1995</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-phone text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Téléphones</p>
                    <p class="font-medium text-gray-900">+212 600-000000</p>
                    <p class="font-medium text-gray-900">+212 700-000000</p>
                  </div>
                </div>

                <!-- Address -->
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-map-marker-alt text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Adresse</p>
                    <p class="font-medium text-gray-900">123 Rue Hassan II</p>
                    <p class="font-medium text-gray-900">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Info -->
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
                    <p class="font-medium text-gray-900">Master en Gestion de Projet</p>
                  </div>
                </div>
                
                <div class="p-4 rounded-lg bg-gray-50 flex items-center space-x-4">
                  <div class="h-10 w-10 rounded-lg flex items-center justify-center bg-[#00B3AD]/10">
                    <i class="fas fa-briefcase text-[#00B3AD]"></i>
                  </div>
                  <div>
                    <p class="text-sm text-gray-500">Métier actuel</p>
                    <p class="font-medium text-gray-900">Chef de projet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Domaines d'action -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-bullseye text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Domaines d'action</h2>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 bg-[#00B3AD]/10 text-[#00B3AD] rounded-full text-sm font-medium">
                  Éducation
                </span>
                <span class="px-3 py-1.5 bg-[#00B3AD]/10 text-[#00B3AD] rounded-full text-sm font-medium">
                  Environnement
                </span>
                <span class="px-3 py-1.5 bg-[#00B3AD]/10 text-[#00B3AD] rounded-full text-sm font-medium">
                  Santé
                </span>
                <span class="px-3 py-1.5 bg-[#00B3AD]/10 text-[#00B3AD] rounded-full text-sm font-medium">
                  Culture
                </span>
              </div>
            </div>

            <!-- Types de mission -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-tasks text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Types de mission préférés</h2>
              </div>
              
              <div class="prose prose-sm max-w-none text-gray-600">
                Soutien scolaire, Aide alimentaire, Protection de l'environnement
              </div>
            </div>

            <!-- Disponibilités -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-calendar-alt text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Disponibilités</h2>
              </div>
              
              <div class="prose prose-sm max-w-none text-gray-600">
                Disponible en soirée et weekends
              </div>
            </div>

            <!-- Talents -->
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div class="flex items-center space-x-3 mb-6">
                <i class="fas fa-star text-[#00B3AD] text-xl"></i>
                <h2 class="text-xl font-semibold text-gray-900">Talents et compétences</h2>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1.5 bg-[#C9559B]/10 text-[#C9559B] rounded-full text-sm font-medium">
                  Communication
                </span>
                <span class="px-3 py-1.5 bg-[#C9559B]/10 text-[#C9559B] rounded-full text-sm font-medium">
                  Leadership
                </span>
                <span class="px-3 py-1.5 bg-[#C9559B]/10 text-[#C9559B] rounded-full text-sm font-medium">
                  Gestion de projet
                </span>
                <span class="px-3 py-1.5 bg-[#C9559B]/10 text-[#C9559B] rounded-full text-sm font-medium">
                  Organisation d'événements
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>