import Evento from "../models/evento.js";

class EventosController {
  static listarEventos = async (req, res) => {
    try {
      const result = await Evento.pegarEvento();

      return res.status(200).json(result);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  };
}

export default EventosController;
