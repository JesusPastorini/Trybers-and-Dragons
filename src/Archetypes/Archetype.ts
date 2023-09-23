import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special = 0;
  private _cost = 0;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  // Método abstrato para obter o tipo de energia (mana ou stamina).
  abstract get energyType(): EnergyType;

  // instâncias das classes herdeiras.
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}
