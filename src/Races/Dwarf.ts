import Race from './Race';

class Dwarf extends Race {
  private static instanceCount = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = _maxLifePoints;
    Dwarf.instanceCount += 1;
  }

  // método abstrato da classe Race.
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}
export default Dwarf;