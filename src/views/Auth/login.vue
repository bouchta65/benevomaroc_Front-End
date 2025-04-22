<template>
        <LoadingSpinner v-if="isLoading" />

    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div class="container mx-auto px-4 py-16">
            <div class="text-center mb-16 animate-fade-in-down">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Bienvenue sur <span class="text-[#00B3AD]">BénévoMaroc</span>
                </h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Connectez-vous pour continuer votre aventure dans le bénévolat
                </p>
            </div>
    
            <div class="max-w-xl mx-auto">
                <div >
                    <div class="relative overflow-hidden bg-white rounded-2xl shadow-xl">
                        <div class="absolute top-0 left-0 right-0 h-2 bg-[#00B3AD]"></div>
                        
                        <div class="p-8">
                            <div class="flex items-center mb-6">
                                <div class="w-16 h-16 bg-[#00B3AD]/10 rounded-2xl flex items-center justify-center mr-4 transform rotate-3">
                                    <i class="fas fa-user-circle text-2xl text-[#00B3AD]"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900">Connexion</h3>
                                    <p class="text-gray-500">Accédez à votre compte</p>
                                </div>
                            </div>

                            <form @submit.prevent="onSubmit" class="mb-6">
                                <div class="space-y-5">
                                    <div>
                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fas fa-envelope text-[#00B3AD]"></i>
                                            </div>
                                            <input v-model="formData.email" type="email" id="email" name="email" 
                                                class="block w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B3AD] focus:border-[#00B3AD]" 
                                                placeholder="votre@email.com">
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div class="flex justify-between mb-1">
                                            <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
                                            <a href="#" class="text-sm text-[#00B3AD] hover:underline">Mot de passe oublié?</a>
                                        </div>
                                        <div class="relative">
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <i class="fas fa-lock text-[#00B3AD]"></i>
                                            </div>
                                            <input v-model="formData.password" type="password" id="password" name="password" 
                                                class="block w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00B3AD] focus:border-[#00B3AD]" 
                                                placeholder="••••••••">
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center">
                                        <input v-model="formData.remember" id="remember" name="remember" type="checkbox" class="h-4 w-4 text-[#00B3AD] border-gray-300 rounded">
                                        <label for="remember" class="ml-2 block text-sm text-gray-600">
                                            Se souvenir de moi
                                        </label>
                                    </div>
                                </div>
                                
                                <button type="submit" class="w-full mt-6 flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-white bg-[#00B3AD] hover:bg-[#00B3AD]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00B3AD]">
                                    Se connecter
                                </button>
                            </form>

                            <div class="mt-6 text-center">
                                <p class="text-gray-600">
                                    Vous n'avez pas de compte? 
                                    <a href="#" class="font-medium text-[#00B3AD] hover:underline">S'inscrire</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import authapi from "@/api/auth";   
import LoadingSpinner from "@/components/LoadingSpinner.vue";

export default {
    components: {
        LoadingSpinner,
    },
    data() {
        return {
            formData: {
                email: "",
                password: "",
                remember: false,
            },
            isLoading: false,
        };
    },
    methods: {
        async onSubmit() {
            this.isLoading = true;
            try {
                const response = await authapi.login(this.formData);
                console.log("Login successful:", response.data);
            } catch (error) {
                console.error("Login failed:", error.response?.data || error.message);
                alert("Erreur de connexion. Veuillez vérifier vos identifiants.");
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>