<template>
        <section class="hero-section h-screen flex items-center" style="background-color: #C93EA1;">
      <div class="container mx-auto px-4 text-center text-white">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">Ensemble, agissons pour un monde meilleur</h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto">Notre plateforme de bénévolat vous connecte avec des opportunités d'engagement qui correspondent à vos passions et compétences.</p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <a href="#" class="bg-[#4ECDC4] hover:bg-[#3BAFA8] text-white font-bold py-3 px-8 rounded-full transition duration-300">S'inscrire comme Bénévole</a>
          <a href="#" class="bg-transparent hover:bg-white hover:text-[#2D3436] text-white font-bold py-3 px-8 border-2 border-white rounded-full transition duration-300">Proposer une Mission</a>
        </div>
      </div>
    </section>

    <!-- Comment ca marche section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-[#C93EA1] font-medium">Comment Ça Marche</span>
          <h2 class="text-4xl font-bold mt-2 mb-4 text-[#2D3436]">Engagez-vous facilement</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Notre plateforme simplifie le processus pour trouver des opportunités de bénévolat qui correspondent à vos centres d'intérêt.</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="service-card bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i class="fas fa-user-plus"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[#2D3436]">Créez votre profil</h3>
            <p class="text-gray-600">Inscrivez-vous et partagez vos compétences, disponibilités et centres d'intérêt.</p>
            <a href="#" class="inline-block mt-4 text-[#C93EA1] hover:underline">En savoir plus →</a>
          </div>
  
          <div class="service-card bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i class="fas fa-search"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[#2D3436]">Trouvez des missions</h3>
            <p class="text-gray-600">Parcourez les opportunités de bénévolat qui correspondent à vos critères.</p>
            <a href="#" class="inline-block mt-4 text-[#C93EA1] hover:underline">En savoir plus →</a>
          </div>
  
          <div class="service-card bg-white p-8 rounded-lg shadow-md text-center">
            <div class="w-16 h-16 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              <i class="fas fa-hands-helping"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-[#2D3436]">Engagez-vous</h3>
            <p class="text-gray-600">Postulez aux missions et commencez votre parcours de bénévole.</p>
            <a href="#" class="inline-block mt-4 text-[#C93EA1] hover:underline">En savoir plus →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- A propos section -->
    <section class="py-16 bg-[#F8F9FA]">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/images/static/propos.png" alt="À propos de Bénévolat" class="rounded-lg shadow-lg">
          </div>
          <div>
            <span class="text-[#C93EA1] font-medium">À Propos</span>
            <h2 class="text-4xl font-bold mt-2 mb-6 text-[#2D3436]">Connecter les bénévoles aux causes qui leur tiennent à cœur depuis 2025</h2>
            <p class="text-gray-600 mb-6">Notre plateforme met en relation des personnes motivées avec des associations et des projets qui ont besoin de soutien.</p>
            <p class="text-gray-600 mb-8">Nous croyons que chaque personne a des compétences précieuses à offrir et que le bénévolat enrichit autant celui qui donne que celui qui reçoit.</p>
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-xl mr-4">
                  <i class="fas fa-users"></i>
                </div>
                <div>
                  <h4 class="font-bold text-[#2D3436]">Communauté</h4>
                  <p class="text-gray-600 text-sm">+10,000 bénévoles</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-xl mr-4">
                  <i class="fas fa-building"></i>
                </div>
                <div>
                  <h4 class="font-bold text-[#2D3436]">Associations</h4>
                  <p class="text-gray-600 text-sm">+500 partenaires</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-xl mr-4">
                  <i class="fas fa-calendar-alt"></i>
                </div>
                <div>
                  <h4 class="font-bold text-[#2D3436]">Missions</h4>
                  <p class="text-gray-600 text-sm">+2000 disponibles</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="w-12 h-12 bg-[#C93EA1] text-white rounded-full flex items-center justify-center text-xl mr-4">
                  <i class="fas fa-globe"></i>
                </div>
                <div>
                  <h4 class="font-bold text-[#2D3436]">Impact</h4>
                  <p class="text-gray-600 text-sm">National & international</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Missions Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <span class="text-[#C93EA1] font-medium">Nos Missions</span>
          <h2 class="text-4xl font-bold mt-2 mb-4 text-[#2D3436]">Opportunités de bénévolat populaires</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Découvrez les missions qui nécessitent votre aide dès maintenant.</p>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mission 1 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/associations/opportunites/event3.jpg" alt="Éducation" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between mb-2">
                <span class="bg-[#C93EA1] text-white text-xs px-2 py-1 rounded-full">Éducation</span>
                <span class="text-gray-500 text-sm">Paris, France</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-[#2D3436]">Soutien scolaire pour enfants</h3>
              <p class="text-gray-600 mb-4">Aidez des enfants défavorisés à réussir à l'école en leur offrant du soutien scolaire hebdomadaire.</p>
              <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                  <span class="font-medium text-gray-700">Engagement requis:</span>
                  <span class="text-gray-600">2h/semaine</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="font-medium text-gray-700">Bénévoles recherchés:</span>
                  <span class="text-gray-600">15/20</span>
                </div>
              </div>
              <a href="#" class="bg-[#4ECDC4] hover:bg-[#3BAFA8] text-white text-center py-2 px-4 rounded-full block transition duration-300">Postuler</a>
            </div>
          </div>
  
          <!-- Mission 2 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/associations/opportunites/event2.jpg" alt="Environnement" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between mb-2">
                <span class="bg-[#C93EA1] text-white text-xs px-2 py-1 rounded-full">Environnement</span>
                <span class="text-gray-500 text-sm">Lyon, France</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-[#2D3436]">Nettoyage des berges du Rhône</h3>
              <p class="text-gray-600 mb-4">Participez à une journée de nettoyage des berges pour protéger la biodiversité locale.</p>
              <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                  <span class="font-medium text-gray-700">Engagement requis:</span>
                  <span class="text-gray-600">1 journée</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="font-medium text-gray-700">Bénévoles recherchés:</span>
                  <span class="text-gray-600">45/50</span>
                </div>
              </div>
              <a href="#" class="bg-[#4ECDC4] hover:bg-[#3BAFA8] text-white text-center py-2 px-4 rounded-full block transition duration-300">Postuler</a>
            </div>
          </div>
  
          <!-- Mission 3 -->
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/images/associations/opportunites/event1.jpg" alt="Social" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="flex justify-between mb-2">
                <span class="bg-[#C93EA1] text-white text-xs px-2 py-1 rounded-full">Social</span>
                <span class="text-gray-500 text-sm">Marseille, France</span>
              </div>
              <h3 class="text-xl font-bold mb-2 text-[#2D3436]">Accompagnement de personnes âgées</h3>
              <p class="text-gray-600 mb-4">Rendez visite à des personnes âgées isolées pour partager des moments de convivialité.</p>
              <div class="mb-4">
                <div class="flex justify-between text-sm mb-1">
                  <span class="font-medium text-gray-700">Engagement requis:</span>
                  <span class="text-gray-600">3h/semaine</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="font-medium text-gray-700">Bénévoles recherchés:</span>
                  <span class="text-gray-600">8/25</span>
                </div>
              </div>
              <a href="#" class="bg-[#4ECDC4] hover:bg-[#3BAFA8] text-white text-center py-2 px-4 rounded-full block transition duration-300">Postuler</a>
            </div>
          </div>
        </div>
  
        <div class="text-center mt-10">
          <a href="#" class="inline-flex items-center text-[#C93EA1] hover:underline font-medium">
            Voir toutes les missions <i class="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
</template>

<style>
.hero-section {
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/static/image3.jpg');
    background-size: cover;
  background-position: center;
}
.service-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-5px);
  transition: all 0.3s ease;
}
</style>
