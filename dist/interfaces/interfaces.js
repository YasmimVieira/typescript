"use strict";
var tlou = {
    title: "The last of us",
    description: "the best game in the world",
    genre: "Action",
    platform: ["Ps3", "Ps4"],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    },
};
var leftBehind = {
    title: "the last of us - Left behind",
    description: "you play as ellie before the original game",
    genre: "action",
    platform: ["Ps4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
