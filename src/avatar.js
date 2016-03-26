/**
 * Under Creative Commons Licence
 * @author Simon Chauvin
 */
function avatar(x, y) {
    "use strict";
    var that = Object.create(FMENGINE.fmGameObject(10));

    //Spatial component
    that.spatial = FMENGINE.fmSpatialComponent(x, y, that);
    that.addComponent(that.spatial);
    that.renderer = FMENGINE.fmBoxRendererComponent(30, 30, "0xffffff", that);
    that.addComponent(that.renderer);
    var physic = FMENGINE.fmAabbComponent(30, 30, that);
    that.addComponent(physic);
    physic.addTypeToCollideWith("ground");

    that.addType("player");

    //Init the physics
    //physic.friction = 0.4;
    physic.elasticity = 0;
    physic.maxVelocity.x = 400;
    physic.maxVelocity.y = 800;

    /**
    * Update the avatar
    */
    that.update = function (dt) {
        
    };

    return that;
};