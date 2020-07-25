import { Respuesta } from './respuesta';

export class Pregunta {
    descripcionPregunta: string;
    respuestas: Respuesta[];

    constructor(descripcionRespuesta: string, respuestas: Respuesta[]) {
        this.descripcionPregunta = descripcionRespuesta;
        this.respuestas = respuestas;
    }
}