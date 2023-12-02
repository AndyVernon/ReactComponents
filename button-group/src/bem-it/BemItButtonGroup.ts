import BemIt, { addClass } from "@gtechdoodler/bem-it";

export default class BemItButtonGroup extends BemIt {
    constructor(block: string) {
        super(`${block}`);
    }
}

export { addClass }