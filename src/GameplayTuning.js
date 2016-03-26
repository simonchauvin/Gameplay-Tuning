var start = function () {
    "use strict";
    //Add assets
    var assetManager = FMENGINE.fmAssetManager,
        param = FMENGINE.fmParameters;
    //Debug mode
    param.debug = true;

    //Audio
    

    //Images
    

    //World
    

    //Load assets
    //assetManager.loadAssets();

    //Specify the folder in which you put {FM.js(engine);}
    param.libraryDirectory = "lib";

    //Start game
    FMENGINE.fmGame.run("canvas", "GameplayTuning", 1024, 768, playState);
};

window.addEventListener("load", start, false);