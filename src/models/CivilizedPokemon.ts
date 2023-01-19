export default class CivilizedPokemon {
  private readonly uuid: string;
  private readonly name: string;
  private readonly documentNumber: string;
  private readonly documentType: string;
  private readonly speciesPokemon: string;
  private readonly typePokemon: string;

  constructor(uuid: string, name: string, documentNumber: string, documentType: string, speciesPokemon: string, typePokemon: string) {
    this.uuid = uuid;
    this.name = name;
    this.documentNumber = documentNumber;
    this.documentType = documentType;
    this.speciesPokemon = speciesPokemon;
    this.typePokemon = typePokemon;
  }
}
