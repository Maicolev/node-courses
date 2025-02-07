import { IsBoolean, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsNumber()
  @Min(1)
  price: number;

  @IsString()
  category: string;

  @IsNumber()
  @Min(50)
  cc: number;

  // Motor
  @IsString()
  @IsOptional()
  engineType?: string;

  @IsNumber()
  @Min(1)
  @IsOptional()
  powerHp?: number;

  @IsNumber()
  @IsOptional()
  torqueNm?: number;

  @IsString()
  @IsOptional()
  coolingSystem?: string;

  @IsNumber()
  @IsOptional()
  numberOfCylinders?: number;

  // Transmisión
  @IsString()
  @IsOptional()
  transmission?: string;

  @IsNumber()
  @IsOptional()
  gears?: number;

  // Dimensiones
  @IsNumber()
  @IsOptional()
  weightKg?: number;

  @IsNumber()
  @IsOptional()
  seatHeightMm?: number;

  @IsNumber()
  @IsOptional()
  wheelbaseMm?: number;

  // Chasis y Suspensión
  @IsString()
  @IsOptional()
  frameType?: string;

  @IsString()
  @IsOptional()
  frontSuspension?: string;

  @IsString()
  @IsOptional()
  rearSuspension?: string;

  // Frenos
  @IsString()
  @IsOptional()
  frontBrake?: string;

  @IsString()
  @IsOptional()
  rearBrake?: string;

  @IsBoolean()
  @IsOptional()
  abs?: boolean;

  // Ruedas
  @IsString()
  @IsOptional()
  frontTire?: string;

  @IsString()
  @IsOptional()
  rearTire?: string;

  @IsString()
  @IsOptional()
  wheelType?: string;

  // Performance
  @IsNumber()
  @IsOptional()
  topSpeedKph?: number;

  @IsNumber()
  @IsOptional()
  fuelConsumptionLkm?: number;

  @IsNumber()
  @IsOptional()
  tankCapacityLiters?: number;

  // Tecnología y Características
  @IsBoolean()
  @IsOptional()
  rideModes?: boolean;

  @IsBoolean()
  @IsOptional()
  tractionControl?: boolean;

  @IsBoolean()
  @IsOptional()
  cruiseControl?: boolean;

  @IsBoolean()
  @IsOptional()
  ledLights?: boolean;

  @IsBoolean()
  @IsOptional()
  digitalDisplay?: boolean;

  @IsBoolean()
  @IsOptional()
  keylessStart?: boolean;

  // Información adicional
  @IsString()
  @IsOptional()
  color?: string;

  @IsString()
  @IsOptional()
  countryOfOrigin?: string;

  @IsString()
  @IsOptional()
  warranty?: string;
}
