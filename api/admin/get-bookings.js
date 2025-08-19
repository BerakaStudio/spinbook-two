// /api/admin/get-bookings.js
export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        // TODO: Obtener reservas reales desde Google Calendar
        // const bookings = await getBookingsFromCalendar();
        
        // Por ahora devuelve datos mock
        const bookings = [
            {
                id: 'SB-ABC123',
                date: '2025-08-20',
                slots: [17, 18],
                services: ['grabacion'],
                userData: {
                    name: 'Juan Pérez',
                    email: 'juan@email.com',
                    phone: '+56 9 8765 4321'
                },
                status: 'confirmed',
                createdAt: new Date().toISOString()
            }
        ];

        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error getting bookings:', error);
        res.status(500).json({ message: 'Error al obtener reservas' });
    }
}
