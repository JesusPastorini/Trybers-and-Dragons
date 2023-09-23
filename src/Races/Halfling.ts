import Race from './Race';

export default class Halfling extends Race {
  private static instanceCount = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = _maxLifePoints;
    Halfling.instanceCount += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }
}  