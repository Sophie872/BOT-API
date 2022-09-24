require('dotenv').config()

const TelegramBot ='node-telegram-bot-api';
const token = '5342136512:AAEGocyJPoxlDBYTtYH-Ovr811ikcyEca4U';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/inspirame/, msg => {

const array = [
"¿Qué es un terapeuta? 1024 Gigapeutas",
"¿Qué le dice un .GIF a un .JPEG? -Anímate viejo.",
"Error 0094782: No se detecta ningún teclado pulse una tecla para continuar",
"No eres feo, solo te falta CSS",
        "Deriva el que quiere, integra el que puede",
        "No llores por amor, llora por tu código ",
        "No hay mejores programadores",
        "Que la mayoría de las nuevas y brillantes piezas de tecnología son sólo versiones renovadas de tecnología que existían desde hace mucho tiempo",
        "Si estás negativo,cede un electrón. ",
        "Eres = que el òxido ferroso",
        "¡Buena elección!",
        "El tiempo es relativo",
        "No te enamores, enamorate de un lenguaje de programación",
        "Te quiero con la P... de programación!!",
        "Los virus no son algo mágico, no pueden infectarte a menos que tú lo ejecutes y le des los permisos ",
        "Si no eres parte de la solucion, entonces eres parte del precipitado",
        "Si es verde o repta, es biologia",
        "No te quejes de las matemáticas complejas.",
        "Diseñar un programa es como resolver un problema de matemática",
        "El programador ¿Nace o se hace?...No lo se",
        "Lo que no compila, te hace más fuerte",
        "me da amsiedad estudiar",
        "La suma infinita es finita",
        "Ella/El no te ama, pero tu código si",
        "No te rindas, tu sigue ",
        "Hola :)",
        "¡Bienvenid@ al grupo PCBA!",
        
    ];
  
    const randomElement = array[Math.floor(Math.random() * array.length)];
  
    const chatId = msg.chat.id;
  
    bot.sendMessage(chatId, randomElement);
}

);