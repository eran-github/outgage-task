interface Repository {
    get();
    find(id1: string, id2: string);
    findById(id: string);    
    update(data: object);
    insert(data: string);
}