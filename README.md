# Binar-Mock-Test

Pada tahap kita akan membuat sebuah server untuk restful API
Hal-hal yang harus kita lakukan adalah:

1. Install tool-tool yang diperlukan

   - Node.Js dan NPM = bisa di download dan di install melalui web browser
   - PostgreSQL = bisa di download dan di install melalui web browser
   - Install Express dengan cara `npm i express`
   - Install dotenv dengan cara `npm i dotenv`
   - Install cors dengan cara `npm i cors`
   - Install cookie-parser dengan cara `npm i cookie-parser`
   - Install jsonwebtoken dengan cara `npm i jsonwebtoken`
   - Install postgres dengan cara `npm i pg`
   - Install sequelize dengan cara `npm i sequelize`
   - Jangan lupa juga untuk install sequelize-cli di devDependencies dengan cara `npm i -D sequelize-cli`

2. Setup Database
   Setelah selesai setup semua tools kita juga harus men-setup database di postgres, hal-hal yang perlu dilakukan adalah:
   - Nyalakan terminal yang biasa kita gunakan, pastikan kita berada di folder server/folder yang kita gunakan sebagai server
   - Setelah itu kita bisa menuliskan `npx sequelize init` untuk inisiasi database ke postgres, dengan melakukan hal ini folder dan file config akan terbuat secara otomatis di folder yang kita gunakan
   - Selanjutnya kita bisa setup file confignya, untuk project ini saya menggunakan `config.js` dan `dotenv` untuk menampung configurasi database yang nantinya digunakan. Saya menggunakan dotenv untuk alasan keamanan
   - Setelah setup config kita bisa menulisakan `npx sequelize db:create` di terminal untuk mulai membuat database
   - Database akan langsung dibuat di postgres, untuk mengecek bisa langsung bukan psql, masukan password bila ada, lalu ketik `\l` nantinya akan muncul daftar database yang kita punya
   - Setelah database muncul kita harus membuat models/table user dengan cara `npx sequelize-cli models:generate --name User --attributes name:string, email:string, password:string`, buat juga untuk models/table data dengan cara yang sama
   - setelah itu kita bisa langsung create seeder dengan cara `npx sequelize-cli seed:generate --name User`, User di sini adalah nama table
   - selanjutnya kita bisa langsung memasukan mock data ke seeder
   - setelah berhasil bisa langsung cek di postgres dengan cara connect database, kemudian ketik `/dt` apabila semua table sudah tersedia bisa juga ketik `SELECT * FROM "nama_table";` nanti akan muncul semua data/seeds yang sudah kita isi
