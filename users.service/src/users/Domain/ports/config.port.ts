import { ConfigService, Path, PathValue } from '@nestjs/config';
import { Config } from '@src/users/Infrastructure/Config';
export class ConfigClient<K = Config> extends ConfigService<K> {
  public override get<P extends Path<K>>(path: P): PathValue<K, P> {
    const value = super.get(path, { infer: true });

    if (value === undefined) {
      throw new Error(`NotFoundConfig: ${path}`);
    }

    return value;
  }
}
export abstract class IConfigClient extends ConfigClient {}
