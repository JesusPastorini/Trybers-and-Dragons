import Race from './Race';

export default class Orc extends Race {
  private static instanceCount = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = _maxLifePoints;
    Orc.instanceCount += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Orc.instanceCount;
  }
}  