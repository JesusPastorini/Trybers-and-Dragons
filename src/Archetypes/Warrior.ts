import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private static instanceCount = 0;
  constructor(name: string) {
    super(name);
    Warrior.instanceCount += 1;
  }

  get energyType(): EnergyType {
    return 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.instanceCount;
  }
}
