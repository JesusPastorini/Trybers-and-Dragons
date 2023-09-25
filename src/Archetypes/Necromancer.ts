import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private static instanceCount = 0;
  private _energyType: EnergyType;
  constructor(name: string) {
    super(name);
    Necromancer.instanceCount += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instanceCount;
  }
}
