const fs = require("fs");
const path = require("path");

class Container {

    constructor(fileName) {
        this.pathfile = path.join(process.cwd(), `/src/dao/${fileName}.json`);
        try {
            this.content = JSON.parse(fs.readFileSync(this.pathfile, "utf-8"));
        } catch (error) { throw new Error(`readFile: ${error}`) }
    }

    getAll() {
        return this.content.items;
    }

    getById(id) {
        let element = this.content.items.find(e => e.id === parseInt(id))
        return element;
    }

    create(element) {
        element.id = this.content.items.length > 0 ? this.content.items.length + 1 : 1;
        this.content.items.push(element);
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`create: ${error}`) }
        return element.id;
    }

    update(id, update) {
        let element = this.content.items.find(e => e.id === parseInt(id));
        let index = this.content.items.indexOf(element);
        for (const key in update) {
            if (this.content.items[index][key]) {
                this.content.items[index][key] = update[key];
            }
        }
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`update: ${error}`) }
        return this.content.items[index];
    }

    remove(id) {
        console.log("REMOVE METHOD", id)
        let items = this.content.items.filter(e => e.id !== parseInt(id));
        this.content.items = items;
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`remove: ${error}`) }
        return { message: "item deleted" }
    }

    removeAll() {
        let content = { items: [] };
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(content));
        } catch (error) { throw new Error(`removeAll: ${error}`) }
        return this.content;
    }

    add(cid, pid) {
        let element = this.content.items.find(e => e.id === parseInt(cid));
        let product = element.products.find(p => p.product === pid);
        if (product) {
            product.amount = product.amount + 1;
        } else {
            element.products.push({ product: pid, amount: 1 });
        }
        try {
            fs.writeFileSync(this.pathfile, JSON.stringify(this.content));
        } catch (error) { throw new Error(`add: ${error}`) }
    }
}

module.exports = Container;