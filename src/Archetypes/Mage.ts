import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private static instanceCount = 0;
  constructor(name: string) {
    super(name);
    Mage.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.instanceCount;
  }
}
