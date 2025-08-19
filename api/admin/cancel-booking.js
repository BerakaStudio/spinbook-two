// /api/admin/cancel-booking.js
export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const { bookingId } = req.query;
        
        if (!bookingId) {
            return res.status(400).json({ message: 'ID de reserva requerido' });
        }

        // TODO: Cancelar en Google Calendar
        // await cancelEventInCalendar(bookingId);
        
        console.log('Cancelando reserva:', bookingId);
        
        res.status(200).json({ 
            message: 'Reserva cancelada exitosamente',
            bookingId 
        });
    } catch (error) {
        console.error('Error canceling booking:', error);
        res.status(500).json({ message: 'Error al cancelar reserva' });
    }
}
