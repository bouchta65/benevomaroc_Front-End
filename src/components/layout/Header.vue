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
              <h1 class="text-2xl font-bold text-gray-800" style="font-family: 'ProfessionalFont', sans-serif;">
                <span style="color: #00B3AD;">BÉNÉVO</span><span>MAROC</span>
              </h1>
            </div>
          </div>

          <nav class="hidden md:flex space-x-6">
            <router-link :to="'/'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]' : $route.path === '/', 'text-gray-600 hover:text-gray-900': $route.path !== '/'}" class="py-2 text-sm">Accueil</router-link>
            <router-link :to="'/opportunites'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]' : $route.path === '/opportunites', 'text-gray-600 hover:text-gray-900': $route.path !== '/opportunites'}" class="py-2 text-sm">Opportunités</router-link>
            <router-link :to="'/faq'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/faq', 'text-gray-600 hover:text-gray-900': $route.path !== '/faq'}" class="py-2 text-sm">FAQ</router-link>
            <router-link :to="'/propos'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/propos', 'text-gray-600 hover:text-gray-900': $route.path !== '/propos'}" class="py-2 text-sm">A propos</router-link>
            <router-link :to="'/contact'" :class="{'text-[#C93EA1] hover:text-[#C93EA1] border-b-2 border-[#C93EA1]': $route.path === '/contact', 'text-gray-600 hover:text-gray-900': $route.path !== '/contact'}" class="py-2 text-sm">Contact</router-link>
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
              <svg v-if="!isMobileMenuOpen" id="menu-open-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else id="menu-close-icon" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div v-if="isMobileMenuOpen" id="mobile-menu" class="mobile-menu md:hidden border-t border-gray-200">
          <div class="px-4 py-2 space-y-1">
            <router-link to="/" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium" @click="closeMobileMenu">Accueil</router-link>
            <router-link to="/opportunites" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium" @click="closeMobileMenu">Opportunités</router-link>
            <router-link to="/faq" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium" @click="closeMobileMenu">FAQ</router-link>
            <router-link to="/propos" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium" @click="closeMobileMenu">A propos</router-link>
            <router-link to="/contact" class="block text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium" @click="closeMobileMenu">Contact</router-link>
          </div>
          <div class="px-4 py-3">
            <router-link to="/inscription">
              <button class="w-full signup-button text-white rounded-md focus:outline-none hover:bg-blue-700 transition-colors" @click="closeMobileMenu">
                S'inscrire
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <div class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="px-4 py-2">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="overflow-x-auto -mx-4 px-4 md:mx-0 no-scrollbar mb-4 md:mb-0">
              <div class="flex items-center space-x-3 min-w-max">
                <div class="flex items-center bg-gray-50 rounded-lg px-3 py-1.5">
                  <svg class="w-4 h-4 text-[#00B3AD] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span class="current-date text-sm font-medium text-gray-600">{{ currentDate }}</span>
                </div>

                <div class="flex items-center bg-gray-50 rounded-lg px-3 py-1.5">
                  <svg class="w-4 h-4 text-[#00B3AD] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="current-time text-sm font-medium text-gray-600">{{ currentTime }}</span>
                  <span class="ml-2 text-xs text-gray-400">UTC</span>
                </div>

                <div class="flex items-center bg-gray-50 rounded-lg px-3 py-1.5">
                  <svg class="w-4 h-4 text-[#00B3AD] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span class="text-sm font-medium text-gray-600 whitespace-nowrap">Casablanca</span>
                  <span class="ml-2 text-xs text-gray-400">Maroc</span>
                </div>
              </div>
            </div>

            <div class="overflow-x-auto -mx-4 px-4 md:mx-0">
              <nav class="flex space-x-6 min-w-max">
                <router-link
                  :to="'/Bénévoles'"
                  :class="{
                    'border-[#00B3AD] text-[#00B3AD]': $route.path === '/Bénévoles',
                    'border-transparent text-gray-600': $route.path !== '/Bénévoles'
                  }"
                  class="flex items-center py-2 border-b-2 transition-colors duration-200 group"
                >
                  <svg class="w-5 h-5 mr-2" :class="{'text-[#00B3AD]': $route.path === '/Bénévoles', 'text-gray-400': $route.path !== '/Bénévoles'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span class="text-sm font-medium whitespace-nowrap" :class="{'text-[#00B3AD]': $route.path === '/Bénévoles', 'text-gray-600': $route.path !== '/Bénévoles'}">Bénévoles</span>
                </router-link>

                <router-link
                  :to="'/associations'"
                  :class="{
                    'border-[#00B3AD] text-[#00B3AD]': $route.path === '/associations',
                    'border-transparent text-gray-600': $route.path !== '/associations'
                  }"
                  class="flex items-center py-2 border-b-2 transition-colors duration-200 group"
                >
                  <svg class="w-5 h-5 mr-2" :class="{'text-[#00B3AD]': $route.path === '/associations', 'text-gray-400': $route.path !== '/associations'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span class="text-sm font-medium whitespace-nowrap" :class="{'text-[#00B3AD]': $route.path === '/associations', 'text-gray-600': $route.path !== '/associations'}">Associations</span>
                </router-link>

                <router-link
                  :to="'/formations'"
                  :class="{
                    'border-[#00B3AD] text-[#00B3AD]': $route.path === '/formations',
                    'border-transparent text-gray-600': $route.path !== '/formations'
                  }"
                  class="flex items-center py-2 border-b-2 transition-colors duration-200 group"
                >
                  <svg class="w-5 h-5 mr-2" :class="{'text-[#00B3AD]': $route.path === '/formations', 'text-gray-400': $route.path !== '/formations'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span class="text-sm font-medium whitespace-nowrap" :class="{'text-[#00B3AD]': $route.path === '/formations', 'text-gray-600': $route.path !== '/formations'}">Formation</span>
                </router-link>

                <router-link
                  :to="'/guide-Juridique'"
                  :class="{
                    'border-[#00B3AD] text-[#00B3AD]': $route.path === '/guide-Juridique',
                    'border-transparent text-gray-600': $route.path !== '/guide-Juridique'
                  }"
                  class="flex items-center py-2 border-b-2 transition-colors duration-200 group"
                >
                  <svg class="w-5 h-5 mr-2" :class="{'text-[#00B3AD]': $route.path === '/guide-Juridique', 'text-gray-400': $route.path !== '/guide-Juridique'}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                  <span class="text-sm font-medium whitespace-nowrap" :class="{'text-[#00B3AD]': $route.path === '/guide-Juridique', 'text-gray-600': $route.path !== '/guide-Juridique'}">Guide Juridique</span>
                </router-link>
              </nav>
            </div>
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
      isMobileMenuOpen: false,
      currentDate: new Date().toLocaleDateString(),
      currentTime: new Date().toLocaleTimeString(),
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    updateDateTime() {
      const now = new Date();
      this.currentDate = now.toISOString().split('T')[0];
      this.currentTime = now.toTimeString().split(' ')[0];
    }
  },
  mounted() {
    this.updateDateTime();
    setInterval(this.updateDateTime, 1000);
  }
};
</script>

