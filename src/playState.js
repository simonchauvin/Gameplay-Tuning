/**
 * @author Simon Chauvin
 */
function playState() {
    "use strict";
    var that = Object.create(FMENGINE.fmState()),
        player;

    that.init = function () {
        Object.getPrototypeOf(that).init(2048, 1536);

        player = avatar(300, 400);
        that.add(player);

        that.centerCameraOn(player);
        that.follow(player, 512, 512);
        that.sortByZIndex();
    };

    /**
    * Update the game
    */
    that.update = function (dt) {
        Object.getPrototypeOf(that).update(dt);

    };

    return that;
}