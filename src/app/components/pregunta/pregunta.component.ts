import { Component, OnInit } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[];

  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this.preguntaService.pregConfirmada === true) {
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta) {
    // respuesta seleccionada y NO esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada) {
      return 'active text-light';
    }

    // respuesta CORRECTA y esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success';
    }

    // respuesta es incorrecta y esta confirmada
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger';
    }
  }

  iconCorrecta(respuesta: Respuesta){
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 1) {
        return true;
      } else {
        return false;
      }
  }

  iconIncorrecta(respuesta: Respuesta){
    if (respuesta === this.preguntaService.opcionSeleccionada &&
      this.preguntaService.pregConfirmada &&
      this.preguntaService.opcionSeleccionada.esCorrecta === 0) {
        return true;
      } else {
        return false;
      }
  }

}
