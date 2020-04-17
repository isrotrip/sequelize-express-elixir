const express = require('express');

const PokemonController = require('../controllers/pokemon.js');

const router = express.Router();

router.get('/', PokemonController.showPokemons);
router.get('/pokemons/add', PokemonController.showAddForm);
router.post('/pokemons/add', PokemonController.addPokemon);
router.get('/pokemons/edit/:id', PokemonController.showEditForm);

module.exports = router;