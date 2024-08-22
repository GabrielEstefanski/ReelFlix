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
      "plan_form": {
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
        "description_email": "Please provide this information to help us find your account (all fields required):",
        "description_reset_password": "We will send you an email with instructions on how to reset your password.",
        "idk_email": "I don't remember my email or phone.",
        "first_name": "First name on account",
        "last_name": "Last name on account",
        "credit_or_debit": "Credit or debit card number on file",
        "find_account": "Find Account",
        "forgot_email": "Forgot Email/Password"
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
        "description_email": "Para que possamos encontrar sua conta, informe todos os dados abaixo:",
        "description_reset_password": "Enviaremos um email com instruções de como redefinir sua senha.",
        "idk_email": "Não me lembro do meu email ou telefone.",
        "first_name": "Nome na conta",
        "last_name": "Sobrenome na conta",
        "credit_or_debit": "Cartão de crédito ou débito cadastrado",
        "find_account": "Encontrar conta",
        "forgot_email": "Esqueci meu email / senha"
      },
      "categories": {
        "comedy": "Comédia",
        "action_adventure": "Ação/Aventura",
        "thriller": "Suspense",
        "action": "Ação",
        "animation": "Animação",
        "horror": "Terror",
        "romance": "Romance"
      },
    }
  },
  es: {
    translation: {
      "password": "Contraseña",
      "insert_password": "Introduce tu contraseña.",
      "email_required": "El correo electrónico es obligatorio",
      "invalid_email": "Correo electrónico inválido",
      "password_required": "La contraseña es obligatoria",
      "next": "Siguiente",
      "reelflix_description": "Millones de películas, series y mucho más en un solo lugar.",
      "enter": "Entrar",
      "subscribe_now": "Suscríbete ahora",
      "or": "O",
      "incorrect_email_or_password": "Correo electrónico o contraseña incorrectos",
      "forget_password": "¿Olvidaste tu contraseña?",
      "remember_me": "Recuérdame",
      "recaptcha_description": "Esta página está protegida por Google reCAPTCHA para garantizar que no eres un robot.",
      "recaptcha_terms_disclosure": "La información recopilada por Google reCAPTCHA está sujeta a la <1>Política de Privacidad</1> y <3>Términos de Uso</3>, y se utiliza para proporcionar, mantener y mejorar el servicio reCAPTCHA y para fines de seguridad (no se utiliza para mostrar anuncios personalizados por Google).",
      "learn_more": "Leer más",
      "privacy_policy": "Política de Privacidad",
      "terms_of_use": "Términos de Uso",
      "watch_anytime": "Mira en cualquier lugar, en cualquier momento",
      "download_and_watch": "Descarga tus películas y series y míralas sin conexión en casa, en el ascensor, en un submarino o en el espacio",
      "download_anytime": "Descarga para ver cuando y donde quieras",
      "offline_watch": "Mira sin conexión en la aplicación Prime Video descargando títulos en tu iPhone, iPad, tableta o dispositivo Android.",
      "footer_text": "2024 ReelsFlix. Todos los derechos reservados.",
      "choose_plan": "Elige el plan que mejor se adapte a ti a partir de R$ 19,99",
      "price_per_month": "Precio por mes",
      "video_audio_quality": "Calidad de audio/video",
      "resolution": "Resolución",
      "spatial_audio": "Audio espacial",
      "compatible_devices": "Dispositivos compatibles",
      "exit": "Salir",
      "email_me": "Envíame un correo electrónico",
      "email_sent": "¡Correo electrónico enviado!",
      "enter_your_email": "Introduce tu correo electrónico",
      "ads": "Anuncios",
      "premium_plus": {
        "title": "Premium +",
        "subtitle": "4K + HDR",
        "price_per_month": "R$ 39,90",
        "video_audio_quality": "Perfecta",
        "resolution": "4K (Ultra HD) + HDR",
        "spatial_audio": "Incluido",
        "compatible_devices": "TV, computadora, móvil, tableta",
        "ads": "Sin anuncios"
      },
      "premium": {
        "title": "Premium",
        "subtitle": "1080p",
        "price_per_month": "R$ 29,90",
        "video_audio_quality": "Excelente",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computadora, móvil, tableta",
        "ads": "Sin anuncios"
      },
      "standard": {
        "title": "Standard",
        "subtitle": "1080p",
        "price_per_month": "R$ 19,90",
        "video_audio_quality": "Buena",
        "resolution": "4K (Ultra HD) + HDR",
        "compatible_devices": "TV, computadora, móvil, tableta",
        "ads": "Anuncios incluidos"
      },
      "banner": {
        "title": "La Casa de Papel",
        "watchButton": "Ver",
        "myListButton": "Mi Lista",
        "description": "Ocho ladrones se encierran con rehenes en la Casa de la Moneda de España. Su líder manipula a la policía para llevar a cabo un plan que podría ser el mayor robo de la historia o una misión condenada al fracaso."
      },
      "plan_form": {
        "step_1_of_3": "PASO 1 DE 3",
        "choose_best_plan": "Elige el mejor plan para ti",
      },
      "login_plan": {
        "step_2_of_3": "PASO 2 DE 3",
        "create_password": "Crea una contraseña para comenzar tu suscripción",
        "selected_plan": "Has seleccionado el plan",
        "almost_done": "¡Casi está listo!",
      },
      "success_plan": {
        "title": "¡Todo listo! Ahora solo haz palomitas, apaga las luces y disfruta",
        "access": "Acceder"
      },
      "login_help": {
        "recover_password": "Recuperar contraseña",
        "description_email": "Por favor proporciona esta información para ayudarnos a encontrar tu cuenta (todos los campos son obligatorios):",
        "description_reset_password": "Te enviaremos un correo electrónico con instrucciones sobre cómo restablecer tu contraseña.",
        "idk_email": "No recuerdo mi correo electrónico o teléfono.",
        "first_name": "Nombre en la cuenta",
        "last_name": "Apellido en la cuenta",
        "credit_or_debit": "Número de tarjeta de crédito o débito registrado",
        "find_account": "Encontrar cuenta",
        "forgot_email": "Olvidé mi correo electrónico / contraseña"
      },
      "categories": {
        "comedy": "Comedia",
        "action_adventure": "Acción/Aventura",
        "thriller": "Suspense",
        "action": "Acción",
        "animation": "Animación",
        "horror": "Terror",
        "romance": "Romance"
      }
    }
  }
}    

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
