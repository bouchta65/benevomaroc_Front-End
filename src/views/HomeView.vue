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
