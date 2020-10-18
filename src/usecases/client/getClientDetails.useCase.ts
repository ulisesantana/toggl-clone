import { Client, NullClient } from "entities";
import { Repository, UseCase } from "interfaces";

export interface GetClientDetailsUseCaseRequestDTO {
  id: string;
}

export class GetClientDetailsUseCase
  implements UseCase<GetClientDetailsUseCaseRequestDTO, Client> {
  constructor(private clientRepo: Repository<Client>) {}

  public async execute({
    id,
  }: GetClientDetailsUseCaseRequestDTO): Promise<Client> {
    const client = await this.clientRepo.findById(id);
    if (!client) {
      return new NullClient();
    }
    return client;
  }
}
