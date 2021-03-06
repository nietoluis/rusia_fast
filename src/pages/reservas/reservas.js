var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { GetDatosProvider } from '../../providers/get-datos/get-datos';
import { DetallesReservaPage } from '../../pages/detalles-reserva/detalles-reserva';
/**
 * Generated class for the ReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservasPage = /** @class */ (function () {
    function ReservasPage(navCtrl, navParams, getDatos, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getDatos = getDatos;
        this.modalCtrl = modalCtrl;
        this.reservas = [];
        var self = this;
        //WHERE is_padre = "true"
        this.getDatos.ejecutarSQL('SELECT * FROM eventos WHERE is_padre = "true" ORDER BY id DESC').then(function (eventos) {
            for (var i = 0; i < eventos.rows.length; i++) {
                var evento = eventos.rows.item(i);
                var tmp_evento_id = JSON.parse(evento.evento_id);
                var tmp_cliente_id = JSON.parse(evento.cliente_id);
                var tmp_representante_id = JSON.parse(evento.representante_id);
                var tmp_guia_id = JSON.parse(evento.guia_id);
                var tmp_chofer_id = JSON.parse(evento.chofer_id);
                var tmp_hotel_id = JSON.parse(evento.hotel_id);
                var tmp_ciudad_id = JSON.parse(evento.ciudad_id);
                evento = evento;
                evento.evento_id = tmp_evento_id;
                evento.cliente_id = tmp_cliente_id;
                evento.representante_id = tmp_representante_id;
                evento.guia_id = tmp_guia_id;
                evento.chofer_id = tmp_chofer_id;
                evento.hotel_id = tmp_hotel_id;
                evento.ciudad_id = tmp_ciudad_id;
                self.reservas.push(evento);
            }
        }, function () {
            console.log('Error Reservas');
        });
    }
    ReservasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservasPage');
    };
    ReservasPage.prototype.abrir_reserva = function (reserva) {
        this.navCtrl.push(DetallesReservaPage, { evento: reserva, permisos: 'is_guia', padre: true });
    };
    ReservasPage = __decorate([
        Component({
            selector: 'page-reservas',
            templateUrl: 'reservas.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, GetDatosProvider, ModalController])
    ], ReservasPage);
    return ReservasPage;
}());
export { ReservasPage };
//# sourceMappingURL=reservas.js.map