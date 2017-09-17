'use strict';


// Taille de la carte en pixels.
const DUNGEON_MAP_HEIGHT = 512;
const DUNGEON_MAP_WIDTH  = 512;
// Taille d'une case sur la carte en pixels.
const DUNGEON_CELL_SIZE = 32;
// Nombre maximum de cases horizontales et verticales.
const DUNGEON_CELL_MAX_X = DUNGEON_MAP_WIDTH / DUNGEON_CELL_SIZE;
const DUNGEON_CELL_MAX_Y = DUNGEON_MAP_HEIGHT / DUNGEON_CELL_SIZE;
// Nombre total de cases.
const DUNGEON_CELL_COUNT = DUNGEON_CELL_MAX_X * DUNGEON_CELL_MAX_Y;

// Execution du code lorsque index.html est totalement chargé
$(function() {

    $.getJSON('../server/map.php', function(data) {
        let dungeon   = new Dungeon('#dungeon-map');
        let player    = new Player('#dungeon-map');

        dungeon.loadMap(data);
        player.moveTo(5,15);

        function run() {
            dungeon.drawMap();
            player.draw();

            // appels suivants (boucle infinie)
            window.requestAnimationFrame(run);
        }
        run();
    });

});