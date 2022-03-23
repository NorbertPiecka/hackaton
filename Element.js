class Element {
    static Wall = new Element("wall")
    static Board = new Element("board")
    static Snake1 = new Element("snake1")
    static Snake2 = new Element("snake2")
    static Snake3 = new Element("snake3")
    static Food = new Element("food")
    static Poop = new Element("poop")

    constructor(name) {
        this.name = name
    }
}