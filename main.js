/**
 * Created by dimapct on 08.03.2015.
 */


var worldWidth = inputMap[0].length;
var worldHeight = inputMap.length;


$(function ()
{
    console.log("Connection to gameProxy start.");
    $.connection.hub.url = "http://localhost:8080/signalr";

    $.connection.hub.start().done(function()
    {
        // Declare a proxy to reference the hub.
        var gameProxy = $.connection.slowpokeHub;

        gameProxy.server.loadPlayer().done(function (player)

        {
            game = new Game(worldWidth, worldHeight, player, 50, 1000, gameProxy);

            // Start listening server
            setInterval(function () {game.getFrameFromServer(player.Id, game.serverFramesQueue)}, 1000);

            // Start game loop
            setInterval(function () {game.loop()}, game.fps);

        }).fail(function (error) {

            console.log('2 Invocation of NewContosoChatMessage failed. Error: ' + error);
        });

    });
});