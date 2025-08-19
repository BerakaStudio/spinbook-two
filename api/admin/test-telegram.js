// /api/admin/test-telegram.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            return res.status(400).json({ 
                message: 'Telegram no está configurado correctamente' 
            });
        }

        const message = '🧪 **Mensaje de prueba desde SpinBook Admin**\n\nSi recibes este mensaje, la configuración de Telegram está funcionando correctamente.';

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'Markdown'
                })
            }
        );

        if (!telegramResponse.ok) {
            throw new Error('Error enviando mensaje a Telegram');
        }

        res.status(200).json({ 
            message: 'Mensaje de prueba enviado exitosamente' 
        });
    } catch (error) {
        console.error('Error testing Telegram:', error);
        res.status(500).json({ 
            message: 'Error al enviar mensaje de prueba' 
        });
    }
}