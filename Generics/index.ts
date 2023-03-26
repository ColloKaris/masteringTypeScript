function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

//GENERIC FUNCTION
function identity<Type>(item: Type): Type {
    return item;
}

identity<string>("7")