# Pokemon Hacktiv8

### Phase 1 Week 3

Berikut summary routing yang akan kamu buat:

| Method | Route                   | Keterangan                                                                                                               |
| ------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| GET    | /                       | Menampilkan semua daftar pokemon yang ada                                                                             |
| GET    | /pokemons/add        | Halaman untuk menampilkan form untuk menambahkan data pokemon                                                         |
| POST   | /pokemons/add        | menerima data yang telah dikirim dari halaman `/pokemons` untuk melakukan _insertion_ ke dalam table `pokemons`    |
| GET    | /pokemons/edit/:id   | Melakukan _update_ pada pokemon berdasarkan `id` yang dikirimkan                                                      |
| POST   | /pokemons/edit/:id   | menerima data yang telah dikirim dari halaman edit untuk melakukan _update_ data pokemon berdasarkan id yang dikirim |
| GET    | /pokemons/delete/:id | Melakukan _delete_ action terhadap data pokemons berdasarkan `id` yang dikirimkan                                     |

## Release 0
Buatlah *DATABASE* bernama *pokemon-sequelize* pada database PostgreSQL

## Release 1
Buatlah table `Pokemons`. Berikut field column yang harus ada:

| Field       | Datatype | Modifiers      |
| ----------- | -------- | -------------- |
| id          | SERIAL   | PRIMARY KEY    |
| name        | VARCHAR  | NOT NULL       |
| type        | VARCHAR  | NOT NULL       |
| hp          | INTEGER  | NOT NULL       |
| catched     | BOOLEAN  | DEFAULT FALSE  |


## Release 2
### Halaman Home atau Route `/`
Implementasikan routing `/` dengan membuat halaman `Home` dimana halaman ini menampilkan semua pokemons yang ada pada database

## Release 3
### Halaman Add atau Route `/pokemons/add`

Buatlah halaman untuk menambahkan pokemon. Halaman add akan menampilkan form  untuk memasukkan data pokemon yang akan disimpan ke dalam database.

Untuk input `type` menggunakan dropdown/select option yang terdapat 4 pilihan:
- Water
- Grass
- Fire
- Normal

Untuk bagian `catched` menggunakan radio button yang terdapat 2 pilihan:
- yes
- no