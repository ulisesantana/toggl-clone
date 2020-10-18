export interface Repository<T> {
  findById(id: string): Promise<T | undefined>;
  save(entity: T): Promise<void>;
  removeById(id: string): Promise<void>;
}
