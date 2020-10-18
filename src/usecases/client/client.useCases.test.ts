import { RepositoryMock } from "utils";
import { Client, NullClient } from "entities";
import { UpsertClientUseCase } from "./upsertClient.useCase";
import { GetClientDetailsUseCase } from "./getClientDetails.useCase";

describe("Client use cases", () => {
  describe("Get client details should", () => {
    it("retrieve client details", async () => {
      const clientRepo = new RepositoryMock<Client>();

      const newClient = new Client({
        id: "fakeId",
        name: "Irrelevant Corp",
      });
      await clientRepo.save(newClient);
      const savedClient = await new GetClientDetailsUseCase(clientRepo).execute(
        {
          id: newClient.id,
        }
      );

      expect(newClient).toStrictEqual(savedClient);
    });

    it("retrieve a client with empty id if it is not found", async () => {
      const clientRepo = new RepositoryMock<Client>();

      const savedClient = await new GetClientDetailsUseCase(clientRepo).execute(
        {
          id: "fakeId",
        }
      );

      expect(savedClient.id).toBe("");
      expect(savedClient.name).toBe("Client not found");
      expect(savedClient).toBeInstanceOf(NullClient);
    });
  });

  describe("Create a new client should", () => {
    it("persist new client", async () => {
      const clientRepo = new RepositoryMock<Client>();

      const newClient = await new UpsertClientUseCase(clientRepo).execute({
        name: "Good Corp",
      });
      const savedClient = await clientRepo.findById(newClient.id);

      expect(newClient).toStrictEqual(savedClient);
    });
  });

  describe("Update existing client should", () => {
    it("persist new details for existing client", async () => {
      const newName = "Good Stuff INC";
      const clientRepo = new RepositoryMock<Client>();

      const oldClient = await new UpsertClientUseCase(clientRepo).execute({
        name: "Good Corp",
      });
      const updatedClient = await new UpsertClientUseCase(clientRepo).execute({
        id: oldClient.id,
        name: newName,
      });

      const savedClient = await clientRepo.findById(oldClient.id);

      expect(oldClient.id).toBe(updatedClient.id);
      expect(updatedClient.name).toBe(newName);
      expect(updatedClient).toStrictEqual(savedClient);
    });
  });
});
