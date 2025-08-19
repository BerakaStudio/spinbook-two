// /api/admin/save-config.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    // TODO: Implementar autenticación
    // const isAdmin = await validateAdminToken(req);
    // if (!isAdmin) return res.status(401).json({ message: 'Unauthorized' });

    try {
        const config = req.body;
        
        // Validar configuración
        if (!config.studio?.name || !config.studio?.email) {
            return res.status(400).json({ message: 'Configuración inválida' });
        }

        // TODO: Guardar en base de datos
        // await saveConfigToDB(config);
        
        // Por ahora solo lo logueamos
        console.log('Nueva configuración guardada:', config);
        
        res.status(200).json({ 
            message: 'Configuración guardada exitosamente',
            config 
        });
    } catch (error) {
        console.error('Error saving config:', error);
        res.status(500).json({ message: 'Error al guardar configuración' });
    }
}