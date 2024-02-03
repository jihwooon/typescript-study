class LocalStorage<T>  {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const localDB = new LocalStorage<string>();
localDB.addItem('Max');
localDB.addItem('Manu');
localDB.removeItem('Max')
localDB.getItems()
