import { Client } from "entities";
import { Repository, UseCase } from "interfaces";
import { generateId } from "utils";

export interface UpsertClientUseCaseRequestDTO {
  id?: string;
  name: string;
}

export class UpsertClientUseCase
  implements UseCase<UpsertClientUseCaseRequestDTO, Client> {
  constructor(private clientRepo: Repository<Client>) {}

  public async execute({
    id = generateId(),
    name,
  }: UpsertClientUseCaseRequestDTO): Promise<Client> {
    const newClient = new Client({ id, name });
    await this.clientRepo.save(newClient);
    return newClient;
  }
}
