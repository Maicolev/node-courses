import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BikeDocument = HydratedDocument<Bike>;

@Schema()
export class Bike {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  brand: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: String })
  category: string; // Ej: Deportiva, Turismo, Custom

  @Prop({ type: Number })
  cc: number; // Cilindrada en cc (e.g., "600cc")

  // Motor
  @Prop({ type: String })
  engineType: string; // Ej: "4 tiempos", "2 tiempos", "V-twin"

  @Prop({ type: Number })
  powerHp: number; // Potencia en HP

  @Prop({ type: Number })
  torqueNm: number; // Par motor en Nm

  @Prop({ type: String })
  coolingSystem: string; // Refrigeración: "Líquida", "Aire", etc.

  @Prop({ type: Number })
  numberOfCylinders: number;

  // Transmisión
  @Prop({ type: String })
  transmission: string; // Ej: "Manual", "Automática", "DCT"

  @Prop({ type: Number })
  gears: number;

  // Dimensiones
  @Prop({ type: Number })
  weightKg: number;

  @Prop({ type: Number })
  seatHeightMm: number;

  @Prop({ type: Number })
  wheelbaseMm: number;

  // Chasis y Suspensión
  @Prop({ type: String })
  frameType: string; // Tipo de chasis

  @Prop({ type: String })
  frontSuspension: string; // Ej: "Horquilla invertida"

  @Prop({ type: String })
  rearSuspension: string;

  // Frenos
  @Prop({ type: String })
  frontBrake: string; // Ej: "Doble disco"

  @Prop({ type: String })
  rearBrake: string;

  @Prop({ type: Boolean })
  abs: boolean; // ¿Incluye sistema ABS?

  // Ruedas
  @Prop({ type: String })
  frontTire: string;

  @Prop({ type: String })
  rearTire: string;

  @Prop({ type: String })
  wheelType: string; // Ej: "Aleación", "Rayo"

  // Performance
  @Prop({ type: Number })
  topSpeedKph: number; // Velocidad máxima en km/h

  @Prop({ type: Number })
  fuelConsumptionLkm: number; // Consumo de combustible en L/100 km

  @Prop({ type: Number })
  tankCapacityLiters: number;

  // Tecnología y Características
  @Prop({ type: Boolean })
  rideModes: boolean;

  @Prop({ type: Boolean })
  tractionControl: boolean;

  @Prop({ type: Boolean })
  cruiseControl: boolean;

  @Prop({ type: Boolean })
  ledLights: boolean;

  @Prop({ type: Boolean })
  digitalDisplay: boolean;

  @Prop({ type: Boolean })
  keylessStart: boolean;

  // Información adicional
  @Prop({ type: String })
  color: string;

  @Prop({ type: String })
  countryOfOrigin: string;

  @Prop({ type: String })
  warranty: string;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);