

<template>
    <div>
      <div class="bg-[#C9559B] text-white py-2">
        <div class="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div class="flex items-center space-x-2 sm:space-x-4">
            <span><i class="fas fa-envelope mr-1 sm:mr-2"></i>contact@benevolat.org</span>
            <span><i class="fas fa-phone mr-1 sm:mr-2"></i>+212 5 37 57 19 87</span>
          </div>
          <div class="flex space-x-2 sm:space-x-4">
            <a href="#" class="hover:text-gray-200"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fab fa-twitter"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fab fa-instagram"></i></a>
            <a href="#" class="hover:text-gray-200"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
  
      <header class="bg-white navbar-shadow">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between h-16 items-center px-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <div class="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <img src="/images/logo.png" alt="BénévoMaroc Logo" class="w-10 h-10" />
                </div>
                <h1 class="text-2xl font-bold text-gray-800" style="font-family: 'ProfessionalFont', sans-serif;"><span style="color: #00B3AD;">BÉNÉVO</span><span>MAROC</span></h1>
              </div>
            </div>
  
            <nav class="hidden md:flex space-x-6">
            <router-link :to="'/'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]' : $route.path === '/','text-gray-600 hover:text-gray-900': $route.path !== '/'}" class="py-2 text-sm">Accueil</router-link>
            
            <router-link :to="'/opportunites'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]' : $route.path === '/opportunites','text-gray-600 hover:text-gray-900': $route.path !== '/opportunites'}" class="py-2 text-sm">Opportunités</router-link>
            
            <router-link :to="'/faq'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/faq','text-gray-600 hover:text-gray-900': $route.path !== '/faq'}" class="py-2 text-sm">FAQ</router-link>
            
            <router-link :to="'/propos'" :class="{ 'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/propos', 'text-gray-600 hover:text-gray-900': $route.path !== '/propos'}" class="py-2 text-sm" >A propos</router-link>
            
            <router-link :to="'/contact'" :class="{ 'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/contact', 'text-gray-600 hover:text-gray-900': $route.path !== '/contact' }" class="py-2 text-sm">Contact</router-link>
             </nav>

            <div class="hidden md:block">
              <router-link to="/inscription">
                <button class="signup-button text-white rounded-md focus:outline-none bg-[#00B3AD] hover:bg-[#3BAFA8] transition-colors">
                  S'inscrire
                </button>
              </router-link>
            </div>
  
            <div class="md:hidden">
              <button @click="toggleMobileMenu" class="p-1 text-gray-500 focus:outline-none">
                <svg v-if="!isMobileMenuOpen" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
  
          <div v-if="isMobileMenuOpen" class="mobile-menu md:hidden border-t border-gray-200">
            <div class="px-4 py-2 space-y-1">
              <router-link to="/" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Accueil</router-link>
              <router-link to="/opportunites" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Opportunités</router-link>
              <router-link to="/faq" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">FAQ</router-link>
              <router-link to="/propos" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">A propos</router-link>
              <router-link to="/contact" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">Contact</router-link>
            </div>
            <div class="px-4 py-3">
              <router-link to="/inscription">
                <button class="w-full signup-button text-white rounded-md focus:outline-none hover:bg-blue-700 transition-colors">
                  S'inscrire
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </header>
    </div>
  </template>
  
 
  
