// src/i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      "password": "Password",
      "insert_password": "Insert your password.",
      "email_required": "Email is required",
      "invalid_email": "Invalid email",
      "password_required": "Password is required",
      "next": "Next",
      "reelflix_description": "Millions of movies, series, and much more all in one place.",
      "enter": "Enter",
      "subscribe_now": "Subscribe now",
      "or": "OR",
      "incorrect_email_or_password": "Incorrect email or password",
      "forget_password": "Forgot password?",
      "remember_me": "Remember me",
      "recaptcha_description": "This page is protected by Google reCAPTCHA to ensure that you are not a robot.",
      "recaptcha_terms_disclosure": "The information collected by Google reCAPTCHA is subject to the <1>Privacy Policy</1> and <3>Terms of Use</3>, and is used to provide, maintain, and improve the reCAPTCHA service and for security purposes (it is not used to serve personalized ads by Google).",
      "learn_more": "Learn more",
      "privacy_policy": "Privacy Policy",
      "terms_of_use": "Terms of Use",
      "watch_anytime": "Watch anywhere, anytime",
      "download_and_watch": "Download your movies and series and watch offline at home, in the elevator, submarine, or space",
      "download_anytime": "Download to watch whenever and wherever you want",
      "offline_watch": "Watch offline on the Prime Video app by downloading titles on your iPhone, iPad, tablet, or Android device.",
      "footer_text": "2024 ReelsFlix. All rights reserved.",
      "choose_plan": "Choose the plan that best suits you starting at R$ 19.99",
      "price_per_month": "Price per month",
      "video_audio_quality": "Video audio quality",
      "resolution": "Resolution",
      "spatial_audio": "Spatial audio",
      "compatible_devices": "Compatible devices",
      "exit": "Exit",
      "email_me": "Email Me",
      "email_sent": "Email Sent!",
      "enter_your_email": "Enter your email",
      "ads": "Ads",
      "premium_plus": {
        "title": "Premium +",
        "subtitle": "4K + HDR",
        "price_per_month": "R$ 39.90",
        "video_audio_quality": "Perfect",
        "resolution": "4K (Ultra HD) + HDR",
        "spatial_audio": "Included",
        "compatible_devices": "TV, computer, mobile, tablet",
        "ads": "No ads"
      },
      "premium": {
        "title": "Premium",
        "subtitle": "1080p",
        "price_per_month": "R$ 29.90",
        "video_audio_quality": "Great",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computer, mobile, tablet",
        "ads": "No ads"
      },
      "standard": {
        "title": "Standard",
        "subtitle": "1080p",
        "price_per_month": "R$ 19.90",
        "video_audio_quality": "Good",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computer, mobile, tablet",
        "ads": "Ads included"
      },
      "banner": {
        "title": "Money Heist",
        "watchButton": "Watch",
        "myListButton": "My List",
        "description": "Eight thieves lock themselves with hostages in the Royal Mint of Spain. Their leader manipulates the police to carry out a plan that could be the biggest heist in history or a doomed mission."
      },
      "login_form": {
        "step_1_of_3": "STEP 1 OF 3",
        "choose_best_plan": "Choose the best plan for you",
      },
      "login_plan": {
        "step_2_of_3": "STEP 2 OF 3",
        "create_password": "Create a password to start your subscription",
        "selected_plan": "You selected the plan",
        "almost_done": "You're almost done!",
      },
      "success_plan": {
        "title": "All set! Now just make some popcorn, turn off the lights, and enjoy",
        "access": "Access"
      },
      "login_help": {
        "recover_password": "Recover password",
        "description_reset_password": "We will send you an email with instructions on how to reset your password.",
        "idk_email": "I don't remember my email or phone."
      },
      "categories": {
        "comedy": "Comedy",
        "action_adventure": "Action/Adventure",
        "thriller": "Thriller",
        "action": "Action",
        "animation": "Animation",
        "horror": "Horror",
        "romance": "Romance"
      }
    }
  },
  pt: {
    translation: {
      "password": "Senha",
      "insert_password": "Insira sua senha.",
      "email_required": "Email é obrigatório",
      "invalid_email": "Email inválido",
      "password_required": "A senha é obrigatória",
      "next": "Próximo",
      "reelflix_description": "Milhões de filmes, séries e muito mais em um só lugar.",
      "enter": "Entrar",
      "subscribe_now": "Assine agora",
      "or": "OU",
      "incorrect_email_or_password": "Email ou senha incorretos",
      "forget_password": "Esqueceu a senha?",
      "remember_me": "Lembre-se de mim",
      "recaptcha_description": "Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.",
      "recaptcha_terms_disclosure": "As informações recolhidas pelo Google reCAPTCHA estão sujeitas à <1>Política de Privacidade</1> e <3>Termos de Uso</3>, e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA e por questões de segurança (não são usadas para exibir anúncios personalizados pelo Google).",
      "learn_more": "Leia mais",
      "privacy_policy": "Política de Privacidade",
      "terms_of_use": "Termos de Uso",
      "watch_anytime": "Assista onde e quando quiser",
      "download_and_watch": "Baixe seus filmes e séries e assista offline na sua casa, no elevador, submarino ou espaço",
      "download_anytime": "Baixe para assistir quando e onde quiser",
      "offline_watch": "Assista offline no app Prime Video ao baixar títulos em seu iPhone, iPad, tablet ou dispositivo Android.",
      "footer_text": "2024 ReelsFlix. Todos os direitos reservados.",
      "choose_plan": "Escolha o plano que mais se adeque a você a partir de R$ 19,99",
      "price_per_month": "Preco mensal",
      "video_audio_quality": "Qualidade de aúdio/vídeo",
      "resolution": "Resolucao",
      "spatial_audio": "Spatial audio",
      "compatible_devices": "Compatible devices",
      "exit": "Sair",
      "email_me": "Enviar por email",
      "email_sent": "Email Enviado!",
      "enter_your_email": "Digite seu email",
      "ads": "Ads",
      "premium_plus": {
        "title": "Premium +",
        "subtitle": "4K + HDR",
        "price_per_month": "R$ 39,90",
        "video_audio_quality": "Perfeita",
        "resolution": "4K (Ultra HD) + HDR",
        "spatial_audio": "Incluso",
        "compatible_devices": "TV, computador, celular, tablet",
        "ads": "Sem anúncios"
      },
      "premium": {
        "title": "Premium",
        "subtitle": "1080p",
        "price_per_month": "R$ 29,90",
        "video_audio_quality": "Ótima",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computador, celular, tablet",
        "ads": "Sem anúncios"
      },
      "standard": {
        "title": "Standard",
        "subtitle": "1080p",
        "price_per_month": "R$ 19,90",
        "video_audio_quality": "Boa",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computador, celular, tablet",
        "ads": "Com anúncios"
      },
      "banner": {
        "title": "La Casa de Papel",
        "watchButton": "Assistir",
        "myListButton": "Minha Lista",
        "description": "Oito ladrões se trancam com reféns na Casa da Moeda da Espanha. Seu líder manipula a polícia para realizar um plano que pode ser o maior roubo da história ou uma missão em vão."
      },
      "plan_form": {
        "step_1_of_3": "PASSO 1 DE 3",
        "choose_best_plan": "Escolha o melhor plano para você",
        "next": "Próximo",
      },
      "login_plan": {
        "step_2_of_3": "PASSO 2 DE 3",
        "create_password": "Crie uma senha para iniciar sua assinatura",
        "selected_plan": "Você selecionou o plano",
        "almost_done": "Falta pouco agora!",
      },
      "success_plan": {
        "title": "Tudo certo! Agora só fazer a pipoca, apagar as luzes e aproveitar",
        "access": "Acessar"
      },
      "login_help": {
        "recover_password": "Recuperar senha",
        "description_reset_password": "Enviaremos um email com instruções de como redefinir sua senha.",
        "idk_email": "Não me lembro do meu email."
      },
      "categories": {
        "comedy": "Comédia",
        "action_adventure": "Ação/Aventura",
        "thriller": "Suspense",
        "action": "Ação",
        "animation": "Animação",
        "horror": "Terror",
        "romance": "Romance"
      }
    }
  }
}

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
