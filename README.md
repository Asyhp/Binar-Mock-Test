# Binar-Backend-Mock-Test

1. - menentukan prioritas platform IOS atau Android, apabila harus keduanya berarti harus menggunakan 2 programming language:
     -Swift untuk IOS
     -Kotlin untuk Android
   - kita juga bisa melakukan analysis and design development dan membuat flowchart pemesanan, menentukan UI/UX, ini bisa menggunakan figma walaupun proses pembuatan flowchart lebih manual tapi ini cukup mudah digunakan
   - untuk server side development kita bisa menggunakan Phyton, Vue.js yang memang capable untuk menghandle database yang cukup besar
   - untuk keperluan client side development kita bisa menggunakan React Native atau Flutter yang memang bisa digunakan untuk kedua platform sekaligus
   - untuk desain micro services kita akan membuat beberapa rest API untuk service yang tersedia di mobile app, akan dibuat rest API untuk database Account, database menu, database pesanan, dan database pembayaran

2. Untuk security database kita bisa menggunakan authentication dan authorization, banyak juga tools yang bisa kita gunakan untuk membatasi pengguna/hacker mengakses database kita. walaupun solusi ini paling mudah tapi ini merupakan security paling mendasar yang memharus ada di setiap aplikasi agar tidak sembarangan orang bisa akses data orang lain, khususnya yang memang krusial

3. Pada tahap kita akan membuat sebuah server untuk restful API
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

      - Nyalakan terminal yang biasa kita gunakan, pastikan kita berada di folder server/folder yang kita gunakan sebagai serve
      - Setelah itu kita bisa menuliskan `npx sequelize init` untuk inisiasi database ke postgres, dengan melakukan hal ini folder dan file config akan terbuat secara otomatis di folder yang kita gunakan
      - Selanjutnya kita bisa setup file confignya, untuk project ini saya menggunakan `config.js` dan `dotenv` untuk menampung configurasi database yang nantinya digunakan. Saya menggunakan dotenv untuk alasan keamanan
      - Setelah setup config kita bisa menulisakan `npx sequelize db:create` di terminal untuk mulai membuat database
      - Database akan langsung dibuat di postgres, untuk mengecek bisa langsung bukan psql, masukan password bila ada, lalu ketik `\l` nantinya akan muncul daftar database yang kita punya
      - Setelah database muncul kita harus membuat models/table user dengan cara `npx sequelize-cli models:generate --name User --attributes name:string, email:string, password:string`, buat juga untuk models/table data dengan cara yang sama
      - setelah itu kita bisa langsung create seeder dengan cara `npx sequelize-cli seed:generate --name User`, User di sini adalah nama table
      - selanjutnya kita bisa langsung memasukan mock data ke seeder
      - setelah berhasil bisa langsung cek di postgres dengan cara connect database, kemudian ketik `/dt` apabila semua table sudah tersedia bisa juga ketik `SELECT * FROM "nama_table";` nanti akan muncul semua data/seeds yang sudah kita isi

   3. Penggunaan Code dan Uji coba Code
      Dalam penulisan code saya lebih banyak menggunakan function async await, saya juga membuat middleware dan utils yang bisa digunakan sesuai dengan kebutuhan. Untuk pengujian code saya lebih banyak menggunakan POSTMAN, karena lebih mudah dalam pembuatan API Documentation juga.
      - dalam pengujian pertama-tama saya harus mengaktifkan server, kemudian membuka POSTMAN bisa melalui aplikasi/website
      - kemudian saya memilih add request untuk memulai pengujian
      - jangan lupa untuk mengubah method di setiap routes, karena pastinya berbeda-beda
      - untuk pengujian create user dan login bisa menggunakan method POST, kemudian masukan url yang kita gunakan untuk server
      - begitu pun dengan routes yang lain, sampai semua selesai diuji
      - hasil/response yang ditampilkan di POSTMAN bisa langsung di save dan bisa juga cek database apakah sudah masuk semua atau belum datanya
        Untuk melihat API Documentation lebih jelas bisa dilihat melalui link berikut:
        `https://documenter.getpostman.com/view/19163319/VUjMnkSt`

4. Untuk API Documentation tersebut saya merasa bahwa testing API v2 sedikit kurang berguna, kecuali ada database yang perlu dibuatkan CRUD/ testing CRUD mungkin akan lebih baik. selain itu untuk response.status langkah lebih baik menggunakan angka yang sesuai dengan HTML contohnya daripada membuat response status: "OK", lebih baik membuat response.status(200) agar lebih jelas
