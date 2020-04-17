const ModelAll = require('../models/index.js');

const Pokemon = ModelAll.Pokemon;

class PokemonController {
  static showPokemons(req, res) {
    const options = {
      order: [['hp', 'DESC']]
    };

    Pokemon
      .findAll(options)
      .then(pokemons => {
        res.render('pokemonPage.ejs', { pokemons });
      })
      .catch(error => {
        res.send(error);
      })
  }

  static showAddForm(req, res) {
    res.render('add-pokemon-form.ejs');
  }

  static addPokemon(req, res) {
    const values = {
      name: req.body.name,
      type: req.body.type,
      hp: Number(req.body.hp),
      catched: req.body.catched === 'true' ? true : false
    }

    Pokemon
      .create(values)
      .then(pokemon => {
        res.send(pokemon)
      })
      .catch(err => {
        res.send(err)
      })
  }

  static showEditForm(req, res) {
    let param = Number(req.params.id);

    Pokemon
      .findByPk(param)
      .then(pokemon => {

        let now = new Date();
        res.render('edit-pokemon-form.ejs', { pokemon, now });
      })
      .catch(err => {
        res.send(err);
      })
  }
}

module.exports = PokemonController;