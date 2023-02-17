const fs = require("fs");
const path = require("path");

class Container {
    content;

    constructor(fileName) {
        this.pathfile = path.join(process.cwd(), `/src/db/${fileName}.json`);
        try {
            this.content = fs.readFileSync(this.pathfile, "utf-8");
        } catch (error) { throw new Error(`readFile: ${error}`) }
    }

    getAll() {
        return this.content;
    }

    getById(id) {
        let element = this.content.find(e => e.id === parseInt(id))
        return element;
    }

    create(element) {
        element.id = this.content.length > 0 ? this.content.length + 1 : 1;
        this.content.push(obj);
        try {
            fs.writeFileSync(this.pathfile, this.content);
        } catch (error) { throw new Error(`create: ${error}`) }
        return element.id;
    }

    update(id, update) {
        let element = this.content.find(e => e.id === parseInt(id));
        let index = this.content.indexOf(element);
        for (const key in update) {
            if (this.content[index][key]) {
                this.content[index][key] = update[key];
            }
        }
        try {
            fs.writeFileSync(this.pathfile, this.content);
        } catch (error) { throw new Error(`update: ${error}`) }
        return this.content[index];
    }

    remove(id) {
        let content = this.content.filter(e => e.id !== parseInt(id));
        this.content = content;
        try {
            fs.writeFileSync(this.pathfile, this.content);
        } catch (error) { throw new Error(`remove: ${error}`) }
        return { message: "item deleted" }
    }

    removeAll() {
        let content = [];
        try {
            fs.writeFileSync(this.pathfile, content);
        } catch (error) { throw new Error(`removeAll: ${error}`) }
        return this.content;
    }

    add(){
        
    }
}

const Products = new Container("products");
const Carts = new Container("carts");

module.exports = { Products, Carts };