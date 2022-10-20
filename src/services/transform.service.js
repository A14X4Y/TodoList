
export class TransformService {
    static fBaseObjectToArray(fBase) {
        return Object.keys(fBase).map(key => {
            const item = fBase[key];
            item.id = key;
            return item;
        });
    }
}