import { Repository } from "../interfaces";

export class RepositoryMock<T extends { id: string }> implements Repository<T> {
  private db: Map<string, T>;

  constructor() {
    this.db = new Map();
  }

  async findById(id: string): Promise<T | undefined> {
    return this.db.get(id);
  }

  async save(entity: T): Promise<void> {
    this.db.set(entity.id, entity);
  }

  async removeById(id: string): Promise<void> {
    this.db.delete(id);
  }
}
