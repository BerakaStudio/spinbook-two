// /api/admin/get-config.js
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // TODO: Implementar autenticación
    // const isAdmin = await validateAdminToken(req);
    // if (!isAdmin) return res.status(401).json({ message: 'Unauthorized' });

    try {
        // Por ahora devuelve configuración por defecto
        // En producción, esto vendría de tu base de datos
        const config = {
            studio: {
                name: process.env.STUDIO_NAME || 'Beraka Studio - SpinBook',
                logo: process.env.STUDIO_LOGO || 'src/icon.png',
                address: process.env.STUDIO_ADDRESS || 'Temuco, Araucanía, Chile',
                email: process.env.STUDIO_EMAIL || 'contacto@berakastudio.com',
                phone: process.env.STUDIO_PHONE || '+56 9 1234 5678'
            },
            services: {
                'produccion': 'Producción Musical',
                'grabacion': 'Grabación de Voces/Instrumentos',
                'mixmastering': 'Mix/Mastering'
            },
            schedule: {
                availableHours: [17, 18, 19, 20, 21],
                workingDays: [1, 2, 3, 4, 5]
            },
            telegram: {
                enabled: !!process.env.TELEGRAM_BOT_TOKEN
            }
        };

        res.status(200).json(config);
    } catch (error) {
        console.error('Error getting config:', error);
        res.status(500).json({ message: 'Error al obtener configuración' });
    }
}