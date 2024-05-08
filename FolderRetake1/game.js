class Game {
  // constructor(id, title, genre, price):
  constructor(id, title, genre, price) {
    this.id = id
    this.title = title
    this.genre = genre
    this.price = price
  }
}
// Class GameStore::
class GameStore {
    // constructor(storeName):
    constructor(storeName) {
        this.storeName = storeName;
        this.inventory = [];
    }
// addGame(game: Game):

    // Parameters: game type: game object Adds a new Game object to the inventory. 
    // Ensure the game has valid attributes before adding
    addGame(game) {
        if (game instanceof Game && game.id && game.title && game.genre && game.price) {
            this.inventory.push(game);
        } else {
            throw new Error("เกมไม่ถูกต้อง");
        }
    }


    // sellGame(id, quantity) {
    //     const games = this.inventory.filter((game) => game.id === id);
    //     if (games.length >= quantity) {
    //         for (let i = 0; i < quantity; i++) {
    //             const index = this.inventory.findIndex((game) => game.id === id);
    //             this.inventory.splice(index, 1);
    //         }
    //     } else {
    //         throw new Error("จำนวนเกมไม่เพียงพอที่จะขาย");
    //     }
    // }

//searchByTitle(title):
//  Parameters: title type: string 
//  Searches the inventory for games matching a specific title and returns array of all matching games.
    searchByTitle(title) {
        return this.inventory.filter((game) => game.title.toLowerCase() === title.toLowerCase());
    }

//searchByGenre(genre):
//   Parameters: genre type: string
//   Finds and returns array of all games within a specified genre in theinventory.
    searchByGenre(genre) {
        return this.inventory.filter((game) => game.genre.toLowerCase() === genre.toLowerCase());
    }

//purchaseGame(id)
//   Parameters: id type: number
//   Removes a game from the inventory by its ID and returns the game object. Validate the existence of the game before removal.
    purchaseGame(id) {
        const index = this.inventory.findIndex((game) => game.id === id);
        if (index !== -1) {
            return this.inventory.splice(index, 1)[0];
        } else {
            throw new Error("ไม่พบเกม")
        }
    }

// listInventory():
//   Parameters: -
//   Lists all games currently in the inventory.
    listInventory() {
        return this.inventory;
    }

// updateGamePrice(id, newPrice):
//   Parameters: id type: number, newPrice type: number,
//   Updates the price of a game based on its id.
    updateGamePrice(id, newPrice) {
        const game = this.inventory.find((g) => g.id === id);
        if (game) {
            game.price = newPrice;
        } else {
            throw new Error("ไม่พบเกม");
        }
    }
// totalInventoryValue():
//   Parameters: -
//   Calculates and returns the total value of all games in the inventory.
    totalInventoryValue() {
        return this.inventory.reduce((acc, game) => acc + game.price, 0);
    }

// listGenres():
//   Parameters: -
//   Lists all unique genres available in the inventory.
    listGenres() {
        const genres = new Set(this.inventory.map((game) => game.genre));
        return Array.from(genres);
    }
}

const store = new GameStore("Epic Game Store");

// Adding games to the inventory
store.addGame(new Game(1, "Game One", "Action", 59.99));
store.addGame(new Game(2, "Game Two", "Adventure", 49.99));

// Searching games by title
console.log(store.searchByTitle("One"));

// Searching games by genre
console.log(store.searchByGenre("Adventure"));

// Purchasing a game
console.log(store.purchaseGame(1));

// Listing the inventory
console.log(store.listInventory());

// Updating a game price
store.updateGamePrice(2, 39.99);

// Calculating total inventory value
console.log(store.totalInventoryValue());

// Listing all genres
console.log(store.listGenres());

// Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
console.log(store.sellGame(2, 1));
