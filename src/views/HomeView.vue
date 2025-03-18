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
